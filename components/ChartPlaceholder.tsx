interface ChartPlaceholderProps {
  title: string;
  description?: string;
  height?: string;
}

export default function ChartPlaceholder({
  title,
  description,
  height = 'h-96',
}: ChartPlaceholderProps) {
  return (
    <div className={`${height} bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-2 border-dashed border-blue-300 flex flex-col items-center justify-center p-8`}>
      <svg
        className="w-16 h-16 text-blue-400 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
      <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
      {description && <p className="text-blue-700 text-center text-sm">{description}</p>}
      <p className="text-blue-600 text-xs mt-4">Interactive chart placeholder</p>
    </div>
  );
}
