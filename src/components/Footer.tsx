import Link from 'next/link';

const FOOTER_LINKS = [
  { href: '/', label: 'Главная' },
  { href: '/catalog', label: 'Коллекции' },
  { href: '/about', label: 'О нас' },
  { href: '/docs', label: 'Пользовательское соглашение' },
  { href: '/docs/privacy', label: 'Политика конфиденциальности' },
  { href: '/docs/delivery', label: 'Доставка' },
];

export default function Footer() {
  return (
    <footer className="bg-adv-darker border-t border-adv-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & description */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-widest text-white mb-4 block">
              ADVOLATUM
            </Link>
            <p className="text-adv-gray text-xs leading-relaxed tracking-wider">
              Одежда для каждого. Коллекции для девушек, мужчин и юниекс.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-white mb-4">НАВИГАЦИЯ</h3>
            <nav className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-wider text-adv-gray hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-white mb-4">КОНТАКТЫ</h3>
            <div className="flex flex-col gap-2">
              <a href="tel:+79001234567" className="text-xs tracking-wider text-adv-gray hover:text-white transition-colors">
                +7 (900) 123-45-67
              </a>
              <a href="mailto:info@advolatum.ru" className="text-xs tracking-wider text-adv-gray hover:text-white transition-colors">
                info@advolatum.ru
              </a>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-xs tracking-widest text-adv-gray hover:text-adv-accent transition-colors">VK</a>
                <a href="#" className="text-xs tracking-widest text-adv-gray hover:text-adv-accent transition-colors">TG</a>
                <a href="#" className="text-xs tracking-widest text-adv-gray hover:text-adv-accent transition-colors">WA</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-adv-border mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-adv-gray tracking-wider">
            © 2024 ADVOLATUM. Все права защищены.
          </p>
          <p className="text-xs text-adv-gray tracking-wider">
            Сайт разработан на Next.js 14 + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
