type ParagraphStackProps = {
  paragraphs: string[];
};

export function ParagraphStack({ paragraphs }: ParagraphStackProps) {
  // Content fields hold multi-paragraph prose separated by blank lines. Without this
  // split the whole story collapses into a single run-on paragraph.
  const blocks = paragraphs.flatMap((paragraph) =>
    paragraph.split(/\n{2,}/).map((part) => part.trim()).filter(Boolean),
  );

  return (
    <>
      {blocks.map((block) => (
        <p key={block}>{block}</p>
      ))}
    </>
  );
}

