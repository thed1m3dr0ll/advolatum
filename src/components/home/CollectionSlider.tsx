'use client';

import { useState } from 'react';
import Link from 'next/link';

const COLLECTIONS = [
  {
    id: 1,
    title: 'ОСЕНЬ / ЗИМА 2024',
    subtitle: 'Новая коллекция',
    gender: 'Девушки',
    href: '/collection/autumn-winter-2024',
    color: '#1a1f2e',
  },
  {
    id: 2,
    title: 'ВЕСНА / ЛЕТО 2024',
    subtitle: 'Летняя коллекция',
    gender: 'Мужчины',
    href: '/collection/spring-summer-2024',
    color: '#0f1520',
  },
  {
    id: 3,
    title: 'КАПСУЛьНАЯ',
    subtitle: 'Базовая коллекция',
    gender: 'Юниекс',
    href: '/collection/capsule',
    color: '#141a24',
  },
];

export default function CollectionSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-adv-dark">
      <div className="container-custom">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-adv-gray text-xs tracking-[0.3em] uppercase mb-2">КОЛЛЕКЦИИ</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">НА ЭТОТ СЕЗОН</h2>
          </div>
          <Link href="/catalog" className="text-xs tracking-widest text-adv-gray hover:text-white transition-colors border-b border-adv-border pb-1">
            СМОТРЕТЬ ВСЕ
          </Link>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-sm">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {COLLECTIONS.map((collection) => (
              <div
                key={collection.id}
                className="min-w-full relative h-[60vh] md:h-[70vh] flex items-end"
                style={{ backgroundColor: collection.color }}
              >
                {/* Placeholder image area */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="relative z-10 p-8 md:p-12 w-full">
                  <span className="text-adv-accent text-xs font-bold tracking-widest mb-2 block">{collection.gender}</span>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-2">{collection.title}</h3>
                  <p className="text-adv-gray text-sm tracking-wider mb-6">{collection.subtitle}</p>
                  <Link
                    href={collection.href}
                    className="inline-block px-8 py-3 bg-white text-black text-xs font-bold tracking-widest hover:bg-adv-accent transition-colors"
                  >
                    СМОТРЕТЬ КОЛЛЕКЦИЮ
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="absolute bottom-4 right-8 flex gap-2">
            {COLLECTIONS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === activeIndex ? 'bg-white w-6' : 'bg-white/30'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => setActiveIndex((prev) => (prev - 1 + COLLECTIONS.length) % COLLECTIONS.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Prev"
          >
            ←
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % COLLECTIONS.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
