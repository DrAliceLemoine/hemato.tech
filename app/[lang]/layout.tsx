import type { Metadata } from 'next';
import { getTranslation, isValidLanguage, DEFAULT_LANGUAGE } from '@/lib/i18n';
import '../globals.css';

export const metadata: Metadata = {
  title: 'HematoTech - Predictive Hematology Intelligence',
  description: 'Advanced AI-driven hematological analytics for healthcare professionals',
  keywords: ['hematology', 'AI', 'predictive analytics', 'healthcare', 'blood analysis'],
  authors: [{ name: 'HematoTech' }],
  openGraph: {
    title: 'HematoTech - Predictive Hematology Intelligence',
    description: 'Advanced AI-driven hematological analytics for healthcare professionals',
    type: 'website',
  },
};

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = isValidLanguage(params.lang) ? params.lang : DEFAULT_LANGUAGE;

  return (
    <html lang={lang}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
