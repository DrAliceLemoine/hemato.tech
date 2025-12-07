import { isValidLanguage, DEFAULT_LANGUAGE, getTranslation } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import FeatureCard from '@/components/FeatureCard';

interface PageProps {
  params: Promise<{ lang: string }>;
}

// Icons
function DatabaseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    </svg>
  );
}

function BrainIcon() {
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

function ChartIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  );
}

function IntegrationIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}

export default async function FeaturesPage({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = isValidLanguage(paramLang) ? paramLang : DEFAULT_LANGUAGE;
  const t = getTranslation(lang);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar lang={lang} t={t} />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.features.title}</h1>
          <p className="text-xl text-blue-100">
            {lang === 'en'
              ? 'Comprehensive tools for intelligent hematological management'
              : 'Outils complets pour une gestion intelligente de l\'hématologie'}
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title={t.features.centralizedManagement.title}
              description={t.features.centralizedManagement.description}
              icon={<DatabaseIcon />}
            />
            <FeatureCard
              title={t.features.anomalyDetection.title}
              description={t.features.anomalyDetection.description}
              icon={<BrainIcon />}
            />
            <FeatureCard
              title={t.features.patientMonitoring.title}
              description={t.features.patientMonitoring.description}
              icon={<ChartIcon />}
            />
            <FeatureCard
              title={t.features.detailedReports.title}
              description={t.features.detailedReports.description}
              icon={<DocumentIcon />}
            />
            <FeatureCard
              title={t.features.deviceIntegration.title}
              description={t.features.deviceIntegration.description}
              icon={<IntegrationIcon />}
            />
            <FeatureCard
              title={t.features.securePlatform.title}
              description={t.features.securePlatform.description}
              icon={<SecurityIcon />}
            />
          </div>
        </div>
      </section>

      {/* Detailed Feature Descriptions */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-blue-100 rounded-lg p-8 h-64 flex items-center justify-center">
                <DatabaseIcon />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t.features.centralizedManagement.title}
                </h3>
                <p className="text-gray-600 text-lg mb-4">
                  {t.features.centralizedManagement.description}
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>
                      {lang === 'en'
                        ? 'Secure cloud-based storage'
                        : 'Stockage basé sur le cloud sécurisé'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>
                      {lang === 'en'
                        ? 'Real-time data synchronization'
                        : 'Synchronisation des données en temps réel'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>
                      {lang === 'en'
                        ? 'Multiple user access levels'
                        : 'Niveaux d\'accès utilisateur multiples'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center md:grid-flow-dense">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t.features.anomalyDetection.title}
                </h3>
                <p className="text-gray-600 text-lg mb-4">
                  {t.features.anomalyDetection.description}
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>
                      {lang === 'en'
                        ? 'Machine learning algorithms'
                        : 'Algorithmes d\'apprentissage automatique'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>
                      {lang === 'en' ? 'Pattern recognition' : 'Reconnaissance des motifs'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>
                      {lang === 'en' ? 'Instant alerts' : 'Alertes instantanées'}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-100 rounded-lg p-8 h-64 flex items-center justify-center">
                <BrainIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {lang === 'en' ? 'Experience Our Features' : 'Découvrez Nos Fonctionnalités'}
          </h2>
          <a
            href={`/${lang}/contact`}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
          >
            {lang === 'en' ? 'Request a Demo' : 'Demander une Démo'}
          </a>
        </div>
      </section>

      <Footer lang={lang} t={t} />
    </div>
  );
}
