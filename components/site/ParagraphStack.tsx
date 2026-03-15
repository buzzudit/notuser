type ParagraphStackProps = {
  paragraphs: string[];
};

export function ParagraphStack({ paragraphs }: ParagraphStackProps) {
  return (
    <>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </>
  );
}

