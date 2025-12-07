import { isValidLanguage, DEFAULT_LANGUAGE, getTranslation } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ChartPlaceholder from '@/components/ChartPlaceholder';

interface PageProps {
  params: Promise<{ lang: string }>;
}

function TimelineIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}

function ScenarioIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function ScoreIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  );
}

export default async function PredictiveModelingPage({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = isValidLanguage(paramLang) ? paramLang : DEFAULT_LANGUAGE;
  const t = getTranslation(lang);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar lang={lang} t={t} />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.predictiveModeling.title}
          </h1>
          <p className="text-xl text-blue-100 mb-6">{t.predictiveModeling.subtitle}</p>
          <p className="text-lg text-blue-50 max-w-3xl">{t.predictiveModeling.description}</p>
        </div>
      </div>

      {/* Core Concept Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t.predictiveModeling.sections.personalized.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t.predictiveModeling.sections.personalized.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {lang === 'en'
                      ? 'Unique AI model per patient'
                      : 'Modèle IA unique par patient'}
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {lang === 'en'
                      ? 'Continuous learning from new data'
                      : 'Apprentissage continu à partir de nouvelles données'}
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {lang === 'en'
                      ? 'Accuracy improves over time'
                      : 'La précision s\'améliore au fil du temps'}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <ScoreIcon />
                <p className="text-gray-600 mt-4 font-semibold">
                  {lang === 'en' ? 'Personalized Model' : 'Modèle Personnalisé'}
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-100 rounded-lg p-8 h-96 flex items-center justify-center order-2 md:order-1">
              <div className="text-center">
                <TimelineIcon />
                <p className="text-gray-600 mt-4 font-semibold">
                  {lang === 'en' ? 'Time-Based Projections' : 'Projections Temporelles'}
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t.predictiveModeling.sections.projections.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t.predictiveModeling.sections.projections.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {lang === 'en'
                      ? '30-day predictions'
                      : 'Prédictions sur 30 jours'}
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {lang === 'en'
                      ? '60-day projections'
                      : 'Projections sur 60 jours'}
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">
                    {lang === 'en'
                      ? '90-day forecasts'
                      : 'Prévisions sur 90 jours'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            {lang === 'en' ? 'Advanced Capabilities' : 'Capacités Avancées'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Scenario Analysis */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <ScenarioIcon />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.predictiveModeling.sections.scenarios.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t.predictiveModeling.sections.scenarios.description}
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">→</span>
                  <span>
                    {lang === 'en' ? 'Treatment simulation' : 'Simulation de traitement'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">→</span>
                  <span>
                    {lang === 'en'
                      ? 'Risk-benefit analysis'
                      : 'Analyse risques-bénéfices'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">→</span>
                  <span>
                    {lang === 'en'
                      ? 'Outcome comparison'
                      : 'Comparaison des résultats'}
                  </span>
                </li>
              </ul>
            </div>

            {/* HemaStability Score */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <ScoreIcon />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.predictiveModeling.sections.hemaStability.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t.predictiveModeling.sections.hemaStability.description}
              </p>
              <div className="bg-white rounded p-4 border-l-4 border-blue-600">
                <p className="text-sm text-gray-600 mb-2">
                  {lang === 'en' ? 'Score Range' : 'Plage de Score'}
                </p>
                <p className="text-3xl font-bold text-blue-600">0 - 100</p>
              </div>
            </div>
          </div>

          {/* Chart Placeholders */}
          <div className="space-y-8">
            <ChartPlaceholder
              title={
                lang === 'en'
                  ? 'Hematological Parameter Trends'
                  : 'Tendances des Paramètres Hématologiques'
              }
              description={
                lang === 'en'
                  ? 'Historical data with AI-generated future projections'
                  : 'Données historiques avec projections futures générées par l\'IA'
              }
            />

            <ChartPlaceholder
              title={
                lang === 'en' ? 'Scenario Comparison' : 'Comparaison de Scénarios'
              }
              description={
                lang === 'en'
                  ? 'Multiple treatment pathways visualized side by side'
                  : 'Plusieurs voies de traitement visualisées côte à côte'
              }
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t.predictiveModeling.benefits.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.predictiveModeling.benefits.items.map((item: string, index: number) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-600">
                <p className="text-lg text-gray-700 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Predictive Report Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.predictiveModeling.report.title}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t.predictiveModeling.report.description}
          </p>
          <ChartPlaceholder
            title={
              lang === 'en'
                ? 'Comprehensive Predictive Report'
                : 'Rapport Prédictif Complet'
            }
            description={
              lang === 'en'
                ? 'Patient overview, predictions, and clinical recommendations'
                : 'Aperçu du patient, prédictions et recommandations cliniques'
            }
            height="h-[500px]"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {lang === 'en'
              ? 'Discover HemaPredict™'
              : 'Découvrez HemaPredict™'}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Experience the future of predictive hematology analytics.'
              : 'Découvrez l\'avenir de l\'analytique hématologique prédictive.'}
          </p>
          <a
            href={`/${lang}/contact`}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
          >
            {lang === 'en' ? 'Schedule a Demo' : 'Planifier une Démo'}
          </a>
        </div>
      </section>

      <Footer lang={lang} t={t} />
    </div>
  );
}
