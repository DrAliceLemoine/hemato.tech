import { getTranslation, isValidLanguage, DEFAULT_LANGUAGE } from '@/lib/i18n';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: paramLang } = await params;
  const lang = isValidLanguage(paramLang) ? paramLang : DEFAULT_LANGUAGE;

  return children;
}
