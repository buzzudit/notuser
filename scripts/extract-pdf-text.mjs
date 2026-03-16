#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { PDFParse } from "pdf-parse";

const cwd = process.cwd();
const inputArg = process.argv[2] ?? "archive/appraisal";
const outputArg = process.argv[3] ?? "archive/appraisal-text";

const inputPath = path.resolve(cwd, inputArg);
const outputPath = path.resolve(cwd, outputArg);

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function normalizeText(value) {
  return value
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

async function extractFile(pdfPath, outDir) {
  const data = fs.readFileSync(pdfPath);
  const parser = new PDFParse({ data });
  const result = await parser.getText();
  await parser.destroy();

  const text = normalizeText(result.text ?? "");
  const baseName = path.basename(pdfPath, path.extname(pdfPath));
  const outFile = path.join(outDir, `${baseName}.txt`);
  fs.writeFileSync(outFile, `${text}\n`, "utf8");
  return outFile;
}

async function main() {
  if (!fs.existsSync(inputPath)) {
    throw new Error(`Input path not found: ${inputPath}`);
  }

  ensureDir(outputPath);

  const stat = fs.statSync(inputPath);
  const files = stat.isDirectory()
    ? fs.readdirSync(inputPath)
        .filter((name) => name.toLowerCase().endsWith(".pdf"))
        .map((name) => path.join(inputPath, name))
    : [inputPath];

  if (files.length === 0) {
    throw new Error(`No PDF files found at: ${inputPath}`);
  }

  for (const file of files) {
    const written = await extractFile(file, outputPath);
    console.log(`Extracted: ${written}`);
  }
}

main().catch((error) => {
  console.error(`PDF extraction failed: ${error.message}`);
  process.exitCode = 1;
});
