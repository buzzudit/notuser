/**
 * Generates public/resume.docx from the live resume data in data/experience.ts.
 *
 * Run with: npm run resume:docx
 *
 * This is a professional resume document, NOT a copy of the /resume page. The page is a
 * marketing surface with labelled tiles and section headings written to persuade; this
 * file is skimmed by recruiters in about twenty seconds and parsed by applicant tracking
 * systems. So it follows document conventions: a prose summary, scannable competencies,
 * achievements near the top, reverse-chronological experience, and compact one-line
 * credentials. Resume-specific prose lives in `resumeDocument` rather than being derived
 * from the page's `resumeSignals`.
 *
 * Per AGENTS.md, run this immediately before committing a resume change, never while
 * iterating. Do not hand-edit public/resume.docx — it is overwritten on every run.
 */
import { writeFileSync } from "node:fs";
import {
  profile,
  resumeDocument,
  experienceTimeline,
  achievements,
  education,
  trainingAndCertifications,
} from "../data/experience";
import { directContact } from "../data/site";

import {
  AlignmentType,
  BorderStyle,
  Document,
  LevelFormat,
  PageOrientation,
  Packer,
  Paragraph,
  TabStopType,
  TextRun,
} from "docx";

const INK = "1A1A1A";
const MUTED = "595959";

/** US Letter in DXA (1440 = 1 inch). docx-js defaults to A4 otherwise. */
const PAGE = {
  size: { width: 12240, height: 15840, orientation: PageOrientation.PORTRAIT },
  margin: { top: 720, bottom: 720, left: 1080, right: 1080 },
};

/** Right tab stop at the text-column edge, for dates flush right. */
const RIGHT_EDGE = 10080;

function sectionHeading(text: string) {
  return new Paragraph({
    spacing: { before: 260, after: 100 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 6, color: "999999", space: 3 },
    },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        bold: true,
        size: 20,
        color: INK,
        characterSpacing: 24,
      }),
    ],
  });
}

function bullet(text: string) {
  return new Paragraph({
    numbering: { reference: "resume-bullets", level: 0 },
    spacing: { after: 60, line: 252 },
    children: [new TextRun({ text, size: 20, color: INK })],
  });
}

/** Bold left entry with a right-aligned date on the same line. */
function entryLine(left: string, right: string, opts: { before?: number } = {}) {
  return new Paragraph({
    spacing: { before: opts.before ?? 160, after: 10 },
    tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_EDGE }],
    children: [
      new TextRun({ text: left, bold: true, size: 21, color: INK }),
      new TextRun({ text: `\t${right}`, size: 19, color: MUTED }),
    ],
  });
}

function subLine(text: string) {
  return new Paragraph({
    spacing: { after: 70 },
    children: [new TextRun({ text, italics: true, size: 19, color: MUTED })],
  });
}

const doc = new Document({
  creator: profile.name,
  title: `${profile.name} — Resume`,
  description: resumeDocument.summary,
  numbering: {
    config: [
      {
        reference: "resume-bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "•",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 288, hanging: 180 } } },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: { page: PAGE },
      children: [
        // ---- Masthead ----
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 40 },
          children: [
            new TextRun({
              text: profile.name.toUpperCase(),
              bold: true,
              size: 36,
              color: INK,
              characterSpacing: 20,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 60 },
          children: [
            new TextRun({
              text: "Director, Experience Design  ·  Design Leadership  ·  AI Product Strategy",
              size: 20,
              color: MUTED,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 40 },
          children: [
            new TextRun({
              text: [
                directContact.email,
                directContact.locationLabel,
                "notuser.com",
                "linkedin.com/in/khandelwaludit",
              ].join("  |  "),
              size: 18,
              color: MUTED,
            }),
          ],
        }),

        // ---- Summary ----
        sectionHeading("Professional Summary"),
        new Paragraph({
          spacing: { after: 60, line: 252 },
          children: [
            new TextRun({ text: resumeDocument.summary, size: 20, color: INK }),
          ],
        }),

        // ---- Competencies ----
        sectionHeading("Areas of Expertise"),
        new Paragraph({
          spacing: { after: 60, line: 252 },
          children: [
            new TextRun({
              text: resumeDocument.competencies.join("  ·  "),
              size: 19,
              color: INK,
            }),
          ],
        }),

        // ---- Achievements up top, where a skim lands ----
        sectionHeading("Selected Achievements"),
        ...achievements.map((item) => bullet(item.text)),

        // ---- Experience ----
        sectionHeading("Professional Experience"),
        ...experienceTimeline.flatMap((item) => [
          entryLine(item.role, item.period),
          subLine(`${item.company}, ${item.location}`),
          ...item.highlights.map(bullet),
        ]),

        // ---- Education ----
        sectionHeading("Education"),
        ...education.flatMap((item) => [
          entryLine(item.degree, item.year),
          subLine(item.institution),
        ]),

        // ---- Credentials, one compact line each ----
        sectionHeading("Certifications and Professional Development"),
        ...trainingAndCertifications.map(
          (item) =>
            new Paragraph({
              spacing: { after: 60 },
              tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_EDGE }],
              children: [
                new TextRun({ text: item.title, bold: true, size: 19, color: INK }),
                new TextRun({ text: ` — ${item.provider}`, size: 19, color: MUTED }),
                new TextRun({ text: `\t${item.year}`, size: 18, color: MUTED }),
              ],
            }),
        ),
      ],
    },
  ],
});

async function main() {
  const out = "public/resume.docx";
  const buffer = await Packer.toBuffer(doc);
  writeFileSync(out, buffer);
  console.log(`Wrote ${out} (${buffer.length.toLocaleString()} bytes)`);
  console.log(
    `  ${experienceTimeline.length} roles · ${achievements.length} achievements · ${trainingAndCertifications.length} credentials`,
  );
}

main();
