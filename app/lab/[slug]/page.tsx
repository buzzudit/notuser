import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, Compass, FlaskConical, Lightbulb, Radar, Sparkles } from "lucide-react";
import { BulletList } from "@/components/site/BulletList";
import { MetricsStrip } from "@/components/site/MetricsStrip";
import { SectionShell } from "@/components/site/SectionShell";
import { AIWorkspace } from "@/components/site/AIWorkspace";
import { AIWorkspaceBanner } from "@/components/site/AIWorkspaceBanner";
import { PageLayout } from "@/components/site/layout/PageLayout";
import type { Trial } from "@/data/trials";
import { getTrialBySlug, trials } from "@/data/trials";
import { buildSiteMetadata } from "@/lib/site/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function LabLearningGraphic({ trial }: { trial: Trial }) {
  const learningPoints = [
    {
      label: "Need",
      value: trial.metrics[0]?.value ?? trial.entityLabel,
      className: "sm:ml-0",
    },
    {
      label: "Bridge",
      value: trial.metrics[2]?.value ?? trial.medium,
      className: "sm:ml-[10%]",
    },
    {
      label: "Pressure",
      value: "Platform pace",
      className: "sm:ml-[20%]",
    },
    {
      label: "Learning",
      value: "What lasted",
      className: "sm:ml-[30%]",
    },
  ];

  return (
    <div className="blue-banner min-h-[320px] p-5 md:p-6">
      <div
        aria-hidden="true"
        className="blue-banner-radial absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="blue-banner-grid absolute inset-0"
      />
      <div aria-hidden="true" className="blue-banner-orb" />
      <div className="relative flex h-full min-h-[280px] flex-col justify-between">
        <div>
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10">
            <Lightbulb size={18} />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
            {trial.learningSignal}
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:mt-12">
          {learningPoints.map((point, index) => (
            <div
              key={point.label}
              className={`w-full rounded-lg border border-white/20 bg-white/[0.12] p-4 backdrop-blur sm:w-[68%] ${point.className}`}
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/65">
                {String(index + 1).padStart(2, "0")} / {point.label}
              </p>
              <p className="mt-2 text-base font-medium leading-snug text-white">{point.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LabFlowGraphic({ trial }: { trial: Trial }) {
  const flowItems = [
    {
      label: trial.metrics[0]?.label ?? "Audience",
      value: trial.metrics[0]?.value ?? trial.entityLabel,
    },
    {
      label: trial.metrics[1]?.label ?? "Core job",
      value: trial.metrics[1]?.value ?? trial.title,
    },
    {
      label: trial.metrics[2]?.label ?? "Surface",
      value: trial.metrics[2]?.value ?? trial.medium,
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-[#f8fafc] p-5 text-slate-950">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:28px_28px]"
      />
      <div className="relative">
        <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm">
          <FlaskConical size={14} />
          Idea path
        </div>
        <div className="grid gap-3">
          {flowItems.map((item, index) => (
            <div key={item.label} className="grid grid-cols-[40px_1fr] items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-sm font-semibold text-primary shadow-sm">
                {index + 1}
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-medium leading-snug text-slate-950">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-lg border border-dashed border-slate-300 bg-white/80 p-3">
          <p className="text-sm leading-relaxed text-slate-700">{trial.hypothesis}</p>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return trials.map((trial) => ({ slug: trial.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const trial = getTrialBySlug(slug);
  if (!trial) {
    notFound();
  }

  return buildSiteMetadata({
    title: `${trial.title} Lab Idea`,
    description: trial.summary,
    pathname: `/lab/${trial.slug}`,
    image: trial.thumbnail,
    imageAlt: trial.title,
    keywords: trial.tags,
  });
}

export default async function LabTrialPage({ params }: PageProps) {
  const { slug } = await params;
  const trial = getTrialBySlug(slug);
  if (!trial) {
    notFound();
  }

  const navItems = [
    { id: "learning", label: "Learning", description: "The takeaway that lasted" },
    { id: "why", label: "Why", description: "Why the idea mattered" },
    { id: "shape", label: "Shape", description: "How the idea worked" },
    { id: "friction", label: "Friction", description: "What had to become easier" },
    { id: "value", label: "Value", description: "What it made possible" },
    { id: "outcome", label: "Outcome", description: "What happened next" },
    { id: "signals", label: "Signals", description: "What the work revealed" },
    { id: "questions", label: "Questions", description: "What remained open" },
  ];

  const aiContext = [
    `Idea title: ${trial.title}`,
    `Summary: ${trial.summary}`,
    `Core belief: ${trial.hypothesis}`,
    `Why it mattered: ${trial.context}`,
    `How it worked: ${trial.experimentFrame}`,
    `What had to become easier: ${trial.whatItTests.join(" | ")}`,
    `What it made possible: ${trial.features.join(" | ")}`,
    `What happened: ${trial.result}`,
    `Learning: ${trial.learning}`,
    `Signals: ${trial.signals.join(" | ")}`,
    `Questions: ${trial.nextQuestions.join(" | ")}`,
  ].join("\n");

  return (
    <PageLayout>
      <SectionShell>
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <div className="relative h-72 border-b border-border bg-secondary/40 md:h-[420px]">
            <Image
              src={trial.thumbnail}
              alt={trial.title}
              fill
              unoptimized={trial.thumbnail.endsWith(".svg")}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1100px"
              priority
            />
          </div>
          <div className="p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              Lab idea - {trial.status} - {trial.year}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              {trial.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {trial.summary}
            </p>
            <div className="mt-6 max-w-4xl rounded-lg border border-border/70 bg-secondary/25 p-4">
              <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                Core belief
              </p>
              <p className="mt-2 text-base leading-relaxed text-foreground">
                {trial.hypothesis}
              </p>
            </div>
            <div className="mt-6">
              <MetricsStrip metrics={trial.metrics} />
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          <AIWorkspaceBanner
            eyebrow="AI Idea Guide"
            title="Explore the idea with AI"
            description="Ask AI to pull out the lasting lesson, pressure-test the idea, or compare it with platform shifts that changed its shelf life."
          >
            <AIWorkspace
              compact
              page="lab-idea-detail"
              context={aiContext}
              helperText="Ask AI to pull out the lasting lesson, pressure-test the idea, or compare it with platform shifts that changed its shelf life."
              suggestions={[
                "Summarize this idea",
                "Extract the lasting product lesson",
                "Compare this with platform-native tools",
                "Turn this into reusable principles",
              ]}
              tone="banner"
            />
          </AIWorkspaceBanner>
          <nav className="rounded-lg border border-border bg-card p-4" aria-label="Lab idea sections">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-primary">
              Section guide
            </p>
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-md px-3 py-2 transition-colors hover:bg-secondary"
                >
                  <p className="text-xs font-medium text-foreground">{item.label}</p>
                  <p className="text-[11px] text-muted-foreground">{item.description}</p>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-8">
          <section id="learning" className="scroll-mt-24">
            <div className="grid gap-5 lg:grid-cols-[1fr_2fr] lg:items-stretch">
              <div className="flex flex-col justify-center rounded-lg border border-primary/35 bg-primary/[0.07] p-6 md:p-8">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Sparkles size={19} />
                </div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  What stayed with me
                </p>
                <p className="mt-4 text-xl font-medium leading-relaxed text-foreground md:text-2xl">
                  {trial.learning}
                </p>
              </div>
              <LabLearningGraphic trial={trial} />
            </div>
          </section>

          <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
            <section id="shape" className="blue-banner scroll-mt-24 p-6 md:p-7">
              <div
                aria-hidden="true"
                className="blue-banner-radial absolute inset-0"
              />
              <div
                aria-hidden="true"
                className="blue-banner-grid absolute inset-0"
              />
              <div aria-hidden="true" className="blue-banner-orb" />
              <div className="relative">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white">
                  <Lightbulb size={18} />
                </div>
                <p className="blue-banner-eyebrow">
                  <span className="blue-banner-dot" />
                  How the idea behaved
                </p>
                <p className="mt-4 text-base leading-relaxed text-white/[0.92] md:text-lg md:leading-8">
                  {trial.experimentFrame}
                </p>
              </div>
            </section>

            <section id="why" className="scroll-mt-24 rounded-lg border border-border bg-card p-6 md:p-7">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <Compass size={18} />
              </div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                Why it existed
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {trial.context}
              </p>
            </section>
          </div>

          <section id="friction" className="scroll-mt-24">
            <div className="grid gap-5 rounded-lg border border-border bg-card p-5 md:p-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  What needed to become easier
                </p>
                <div className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  <BulletList items={trial.whatItTests} />
                </div>
              </div>
              <LabFlowGraphic trial={trial} />
            </div>
          </section>

          <section id="value" className="scroll-mt-24">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                <Radar size={18} />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  What it made possible
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  The useful surface area
                </h2>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {trial.features.map((feature, index) => (
                <article
                  key={feature}
                  className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/35"
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="outcome" className="scroll-mt-24 overflow-hidden rounded-lg border border-border bg-secondary/40">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              <div className="border-b border-border bg-card p-6 lg:border-b-0 lg:border-r">
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  What happened
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                  Resonance, then acceleration.
                </p>
              </div>
              <p className="p-6 text-base leading-relaxed text-muted-foreground md:p-8">
                {trial.result}
              </p>
            </div>
          </section>

          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <section id="signals" className="scroll-mt-24 rounded-lg border border-border bg-card p-5 md:p-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                What the work revealed
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {trial.signals.map((signal) => (
                  <p
                    key={signal}
                    className="rounded-lg border border-border/80 bg-secondary/25 p-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    {signal}
                  </p>
                ))}
              </div>
            </section>

            <section id="questions" className="scroll-mt-24 rounded-lg border border-border bg-card p-5 md:p-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                Questions it left behind
              </p>
              <div className="mt-4 space-y-3">
                {trial.nextQuestions.map((question) => (
                  <p
                    key={question}
                    className="border-l-2 border-primary/60 pl-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    {question}
                  </p>
                ))}
              </div>
            </section>
          </div>

          <div className="flex flex-wrap gap-3">
            {trial.sourceUrl ? (
              <a
                href={trial.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View source <ArrowUpRight size={14} />
              </a>
            ) : null}
            <Link
              href="/lab"
              className="inline-flex items-center rounded-lg border border-border bg-secondary/40 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to Lab
            </Link>
          </div>
        </div>
      </SectionShell>
    </PageLayout>
  );
}
