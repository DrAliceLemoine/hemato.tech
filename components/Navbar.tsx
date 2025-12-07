'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Language } from '@/lib/i18n';

interface NavbarProps {
  lang: Language;
  t: any;
}

export default function Navbar({ lang, t }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const otherLang = lang === 'en' ? 'fr' : 'en';

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">HT</span>
            </div>
            <span className="hidden sm:inline font-bold text-xl text-gray-900">
              HematoTech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href={`/${lang}`} label={t.nav.home} />
            <NavLink href={`/${lang}/features`} label={t.nav.features} />
            <NavLink href={`/${lang}/predictive-modeling`} label={t.nav.predictiveModeling} />
            <NavLink href={`/${lang}/about`} label={t.nav.about} />
            <NavLink href={`/${lang}/contact`} label={t.nav.contact} />
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Link
                href={`/${otherLang}`}
                className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 transition-colors"
              >
                <span className="mr-1">{otherLang === 'en' ? '🇬🇧' : '🇫🇷'}</span>
                {otherLang.toUpperCase()}
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-blue-50"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <MobileNavLink href={`/${lang}`} label={t.nav.home} />
            <MobileNavLink href={`/${lang}/features`} label={t.nav.features} />
            <MobileNavLink href={`/${lang}/predictive-modeling`} label={t.nav.predictiveModeling} />
            <MobileNavLink href={`/${lang}/about`} label={t.nav.about} />
            <MobileNavLink href={`/${lang}/contact`} label={t.nav.contact} />
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
    >
      {label}
    </Link>
  );
}
