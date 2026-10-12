export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-bold text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export function Prose({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="max-w-[40rem] text-[1.1rem] leading-[1.5] text-white">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-4 last:mb-0">
          <RichText text={paragraph} />
        </p>
      ))}
    </div>
  );
}
