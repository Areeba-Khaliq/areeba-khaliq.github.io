const Caption = ({ children }: { children: React.ReactNode }) => (
  <figcaption className="mt-2 text-sm text-stone-500">{children}</figcaption>
);

const layers: [string, string[]][] = [
  ['Models', ['Detection', 'Sub-type', 'Severity', 'EfficientNet-B3, exported to ONNX']],
  ['Serving', ['FastAPI', 'JWT authentication']],
  ['Background work', ['Celery', 'Redis']],
  ['Data', ['Supabase']],
  ['Ingredient scanner and chatbot', ['OCR', 'Groq LLM']],
];

export const AcneStack = () => (
  <figure className="my-6 max-w-lg">
    <div className="border border-stone-400 divide-y divide-stone-300 bg-[#fbf9f4]">
      {layers.map(([name, items]) => (
        <div key={name} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 px-3 py-2">
          <span className="w-44 shrink-0 text-sm text-stone-500">{name}</span>
          <span className="text-stone-800">{items.join('  /  ')}</span>
        </div>
      ))}
    </div>
    <Caption>The parts of AcneAI.</Caption>
  </figure>
);
