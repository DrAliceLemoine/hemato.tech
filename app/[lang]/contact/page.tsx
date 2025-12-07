import { isValidLanguage, DEFAULT_LANGUAGE, getTranslation } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

interface PageProps {
  params: Promise<{ lang: string }>;
}

function EmailIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 10h4.764a2 2 0 011.789 2.894l-3.646 7.23a2 2 0 01-1.788 1.106H2.4a2 2 0 01-2-2V8a2 2 0 012-2h2.4a2 2 0 012 2v5m4 0a2 2 0 002 2h2.4a2 2 0 002-2m0-5a2 2 0 00-2-2h-2.4a2 2 0 00-2 2m4 0V8m0 5v5m-8 0a2 2 0 11-4 0m4 0a2 2 0 01-4 0m4 0V8a2 2 0 00-2-2m0 0V3"
      />
    </svg>
  );
}

export default async function ContactPage({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = isValidLanguage(paramLang) ? paramLang : DEFAULT_LANGUAGE;
  const t = getTranslation(lang);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar lang={lang} t={t} />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t.contact.title}</h1>
          <p className="text-xl text-blue-100">{t.contact.subtitle}</p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Sales */}
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-blue-600">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <EmailIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {lang === 'en' ? 'Sales Inquiry' : 'Demande de Vente'}
              </h3>
              <p className="text-gray-600 mb-4">
                {lang === 'en'
                  ? 'Learn more about our solutions'
                  : 'En savoir plus sur nos solutions'}
              </p>
              <a href="mailto:sales@hemato.tech" className="text-blue-600 font-semibold hover:underline">
                sales@hemato.tech
              </a>
            </div>

            {/* Support */}
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-blue-600">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <PhoneIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {lang === 'en' ? 'Technical Support' : 'Support Technique'}
              </h3>
              <p className="text-gray-600 mb-4">
                {lang === 'en'
                  ? '24/7 support for our customers'
                  : 'Support 24/7 pour nos clients'}
              </p>
              <a href="tel:+1-555-123-4567" className="text-blue-600 font-semibold hover:underline">
                +1 (555) 123-4567
              </a>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-blue-600">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <LocationIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {lang === 'en' ? 'Headquarters' : 'Siège Social'}
              </h3>
              <p className="text-gray-600">
                {lang === 'en'
                  ? 'HematoTech SAS'
                  : 'HematoTech SAS'}
                <br />
                {lang === 'en'
                  ? '15 Rue Cuvier, Immeuble Galilée'
                  : '15 Rue Cuvier, Immeuble Galilée'}
                <br />
                {lang === 'en'
                  ? '75005 Paris, France'
                  : '75005 Paris, France'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {lang === 'en' ? 'Send us a Message' : 'Envoyez-nous un Message'}
          </h2>
          <ContactForm t={t} lang={lang} />
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Partnerships */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <HandshakeIcon />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.contact.partnerships.title}
              </h3>
              <p className="text-gray-600 mb-6">{t.contact.partnerships.description}</p>
              <a
                href="mailto:partnerships@hemato.tech"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {lang === 'en' ? 'Learn More' : 'En Savoir Plus'}
              </a>
            </div>

            {/* Investors */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.contact.investors.title}
              </h3>
              <p className="text-gray-600 mb-6">{t.contact.investors.description}</p>
              <a
                href="mailto:investors@hemato.tech"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {lang === 'en' ? 'Get in Touch' : 'Nous Contacter'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {lang === 'en' ? 'Frequently Asked Questions' : 'Questions Fréquemment Posées'}
          </h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {lang === 'en' ? 'How long does implementation take?' : 'Combien de temps prend la mise en œuvre?'}
              </h3>
              <p className="text-gray-600">
                {lang === 'en'
                  ? 'Implementation typically takes 4-8 weeks depending on your facility size and existing systems.'
                  : 'La mise en œuvre prend généralement 4 à 8 semaines selon la taille de votre établissement et vos systèmes existants.'}
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {lang === 'en' ? 'Is my data secure?' : 'Mes données sont-elles sécurisées?'}
              </h3>
              <p className="text-gray-600">
                {lang === 'en'
                  ? 'Yes, we use HIPAA-compliant encryption and enterprise-grade security measures.'
                  : 'Oui, nous utilisons le chiffrement conforme à la HIPAA et des mesures de sécurité de classe entreprise.'}
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {lang === 'en' ? 'Can we integrate with our EHR?' : 'Pouvons-nous intégrer à notre DSE?'}
              </h3>
              <p className="text-gray-600">
                {lang === 'en'
                  ? 'Yes, we support integration with most major EHR systems including Epic, Cerner, and Athena.'
                  : 'Oui, nous supportons l\'intégration avec la plupart des principaux systèmes DSE.'}
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {lang === 'en' ? 'What kind of training do you provide?' : 'Quel type de formation fournissez-vous?'}
              </h3>
              <p className="text-gray-600">
                {lang === 'en'
                  ? 'We provide comprehensive training, including onsite sessions, webinars, and continuous support.'
                  : 'Nous fournissons une formation complète, y compris des sessions sur site, des webinaires et un support continu.'}
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
              ? 'Ready to Get Started?'
              : 'Prêt à Commencer?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Contact our team today to schedule a personalized demo.'
              : 'Contactez notre équipe dès aujourd\'hui pour planifier une démo personnalisée.'}
          </p>
          <a
            href={`/${lang}/contact`}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
          >
            {lang === 'en' ? 'Schedule Demo' : 'Planifier une Démo'}
          </a>
        </div>
      </section>

      <Footer lang={lang} t={t} />
    </div>
  );
}
