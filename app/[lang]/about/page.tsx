import { isValidLanguage, DEFAULT_LANGUAGE, getTranslation } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PageProps {
  params: Promise<{ lang: string }>;
}

function MissionIcon() {
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

function VisionIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
}

function ValueIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export default async function AboutPage({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = isValidLanguage(paramLang) ? paramLang : DEFAULT_LANGUAGE;
  const t = getTranslation(lang);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar lang={lang} t={t} />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.about.title}</h1>
          <p className="text-xl text-blue-100 mb-2">
            {lang === 'en'
              ? 'Transforming hematology through intelligent prediction'
              : 'Transformer l\'hématologie par la prédiction intelligente'}
          </p>
          <p className="text-lg text-blue-100 font-semibold">{t.about.founder}</p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                  <MissionIcon />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{t.about.mission.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t.about.mission.description}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                  <VisionIcon />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{t.about.vision.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t.about.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t.about.values.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {t.about.values.items.map((item: any, index: number) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4 flex-shrink-0 mt-1">
                    <ValueIcon />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HematoTech Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            {lang === 'en' ? 'Why Choose HematoTech?' : 'Pourquoi Choisir HematoTech?'}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {lang === 'en' ? 'Clinically Validated' : 'Validé Cliniquement'}
              </h3>
              <p className="text-gray-600">
                {lang === 'en'
                  ? 'Built on rigorous scientific research and clinical validation.'
                  : 'Construit sur une recherche scientifique rigoureuse et une validation clinique.'}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v2h8v-2zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-2a4 4 0 00-8 0v2h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {lang === 'en' ? 'User-Centric Design' : 'Conception Centrée sur l\'Utilisateur'}
              </h3>
              <p className="text-gray-600">
                {lang === 'en'
                  ? 'Developed with input from healthcare professionals.'
                  : 'Développé avec l\'apport des professionnels de santé.'}
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {lang === 'en' ? 'Continuously Evolving' : 'En Évolution Continue'}
              </h3>
              <p className="text-gray-600">
                {lang === 'en'
                  ? 'Regular updates and improvements based on user feedback.'
                  : 'Mises à jour régulières et améliorations basées sur les commentaires des utilisateurs.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            {t.about.team.title}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {t.about.team.description}
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Founder */}
            <div className="text-center md:col-span-2 md:col-start-2">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                AL
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Dr. Alice Lemoine</h3>
              <p className="text-gray-600 font-semibold mb-2">
                {lang === 'en' ? 'Founder & CEO' : 'Fondatrice & PDG'}
              </p>
              <p className="text-gray-600 text-sm">
                {lang === 'en'
                  ? 'Hematology specialist with 15+ years of clinical and research experience'
                  : 'Spécialiste en hématologie avec plus de 15 ans d\'expérience clinique et de recherche'}
              </p>
            </div>

            {/* Team Members */}
            {[1, 2].map((i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {lang === 'en' ? `Team Member ${i}` : `Membre de l'Équipe ${i}`}
                </h3>
                <p className="text-gray-600 text-sm">
                  {lang === 'en' ? 'Specialist in Hematology' : 'Spécialiste en Hématologie'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">20+</p>
              <p className="text-gray-600">
                {lang === 'en' ? 'Healthcare Partners' : 'Partenaires de Santé'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">50K+</p>
              <p className="text-gray-600">
                {lang === 'en' ? 'Patient Records' : 'Dossiers Patients'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">99.9%</p>
              <p className="text-gray-600">
                {lang === 'en' ? 'System Uptime' : 'Disponibilité du Système'}
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">24/7</p>
              <p className="text-gray-600">
                {lang === 'en' ? 'Support Available' : 'Support Disponible'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {lang === 'en'
              ? 'Join Us in Transforming Hematology'
              : 'Rejoignez-Nous pour Transformer l\'Hématologie'}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Be part of a revolution in predictive healthcare.'
              : 'Faites partie d\'une révolution dans les soins de santé prédictifs.'}
          </p>
          <a
            href={`/${lang}/contact`}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
          >
            {lang === 'en' ? 'Contact Us' : 'Nous Contacter'}
          </a>
        </div>
      </section>

      <Footer lang={lang} t={t} />
    </div>
  );
}
