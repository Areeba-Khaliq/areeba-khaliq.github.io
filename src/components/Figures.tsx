const Caption = ({ children }: { children: React.ReactNode }) => (
  <figcaption className="mt-2 text-sm text-stone-500">{children}</figcaption>
);

export const FederatedChart = () => (
  <figure className="my-6 max-w-lg">
    <svg viewBox="0 0 480 130" role="img" aria-label="Federated training lost 12.5 percentage points of accuracy; with Group Normalization and centralized-checkpoint initialization it lost 4.2" className="w-full">
      <g fontFamily="'Source Sans 3', sans-serif" fontSize="13" fill="#3b3a36">
        <text x="0" y="14">Federated training, baseline</text>
        <rect x="0" y="22" width="450" height="22" fill="#9a4a2b" />
        <text x="456" y="38" textAnchor="start" fontSize="13">12.5</text>

        <text x="0" y="78">With Group Normalization and checkpoint init</text>
        <rect x="0" y="86" width="151" height="22" fill="#2f4a52" />
        <text x="157" y="102">4.2</text>
      </g>
      <line x1="0" y1="18" x2="0" y2="112" stroke="#3b3a36" />
    </svg>
    <Caption>Accuracy lost to federated training, in percentage points against centralized training. Shorter is better.</Caption>
  </figure>
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
