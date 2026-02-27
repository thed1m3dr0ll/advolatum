'use client';

import { useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'ГЛАВНАЯ' },
  { href: '/catalog', label: 'КОЛЛЕКЦИИ' },
  { href: '/about', label: 'О НАС' },
  { href: '/contacts', label: 'КОНТАКТЫ' },
  { href: '/cart', label: 'КОРЗИНА' },
];

const CATEGORY_LINKS = [
  { href: '/catalog?gender=women', label: 'ДЕВУШКИ' },
  { href: '/catalog?gender=men', label: 'МУЖЧИНЫ' },
  { href: '/catalog?gender=unisex', label: 'ЮНИЕКС' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-adv-darker/95 backdrop-blur-sm border-b border-adv-border">
      <div className="container-custom">
        {/* Main nav row */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-widest text-white hover:text-adv-accent transition-colors">
            ADVOLATUM
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold tracking-widest text-adv-gray hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-adv-gray hover:text-white transition-colors text-xs tracking-widest">VK</a>
            <a href="#" className="text-adv-gray hover:text-white transition-colors text-xs tracking-widest">TG</a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Category links row */}
        <div className="hidden md:flex items-center gap-8 py-2 border-t border-adv-border">
          {CATEGORY_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-widest text-adv-gray hover:text-adv-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-adv-darker border-t border-adv-border">
          <nav className="container-custom py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-widest text-adv-gray hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-adv-border pt-4 flex gap-6">
              {CATEGORY_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-semibold tracking-widest text-adv-gray hover:text-adv-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
