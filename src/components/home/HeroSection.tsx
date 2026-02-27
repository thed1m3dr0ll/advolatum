import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-adv-dark pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-adv-darker via-adv-dark to-black opacity-80" />

      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="text-[20vw] font-black text-white/5 leading-none select-none tracking-tighter">
          ADV
        </span>
      </div>

      <div className="relative z-10 container-custom text-center">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-none mb-6">
          <span className="block">ОДЕЖДА</span>
          <span className="block text-adv-accent">ДЛЯ</span>
          <span className="block">КАЖДОГО</span>
        </h1>

        {/* Subtitle */}
        <p className="text-adv-gray text-xs md:text-sm tracking-[0.3em] uppercase mb-10 max-w-md mx-auto">
          Новая коллекция уже доступна
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/catalog"
            className="inline-block px-10 py-4 bg-adv-accent text-black text-xs font-bold tracking-widest hover:bg-white transition-colors"
          >
            КАТАЛОГ
          </Link>
          <Link
            href="/about"
            className="inline-block px-10 py-4 border border-adv-border text-white text-xs font-bold tracking-widest hover:border-white transition-colors"
          >
            О НАС
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-adv-gray text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-adv-gray animate-pulse" />
        </div>
      </div>
    </section>
  );
}
