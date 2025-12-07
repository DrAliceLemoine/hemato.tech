interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function Section({ title, description, children }: SectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {description && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
