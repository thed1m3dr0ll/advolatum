import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'О бренде | ADVOLATUM',
  description: 'ADVOLATUM — российский стритвер-бренд нового поколения',
};

const values = [
  {
    title: 'АВТЕНТИЧНОСТЬ',
    description: 'Мы создаём вещи, которые рассказывают историю. Каждый дроп — это часть нашего архива.',
  },
  {
    title: 'КАЧЕСТВО',
    description: 'Только премиумные материалы. Только точное производство. Никакого компромисса.',
  },
  {
    title: 'СООБЩЕСТВО',
    description: 'Мы строим больше, чем просто бренд. Мы строим племя для тех, кто видит мир иначе.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-adv-dark min-h-screen">
        {/* Hero section */}
        <div className="relative border-b border-adv-border">
          <div className="max-w-7xl mx-auto px-4 py-32">
            <p className="text-adv-gray text-[10px] tracking-widest uppercase mb-6">ADVOLATUM / О БРЕНДЕ</p>
            <h1 className="text-white text-6xl md:text-8xl font-bold tracking-widest uppercase leading-none mb-8">
              ADVO<br />LATUM
            </h1>
            <p className="text-adv-gray text-sm tracking-wider max-w-lg">
              Уличная мода нового поколения.
            </p>
          </div>
        </div>

        {/* About text */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="text-adv-gray text-[10px] tracking-widest uppercase mb-6">НАША ИСТОРИЯ</p>
              <h2 className="text-white text-3xl font-bold tracking-wide uppercase mb-8">
                РОЖДЕНО ИЗ УЛИЦЫ
              </h2>
              <div className="space-y-6 text-adv-gray text-sm leading-relaxed">
                <p>
                  ADVOLATUM — это больше, чем просто одежда. Это язык, на котором разговаривает новое поколение творцов, мыслителей и тех, кто не боится выделяться.
                </p>
                <p>
                  Мы верим, что каждый человек заслуживает одежды, которая не просто подходит, а говорит о нём. Каждый дроп — это выражение.
                </p>
              </div>
            </div>
            <div className="bg-adv-dark-secondary aspect-video lg:aspect-auto" />
          </div>
        </div>

        {/* Values */}
        <div className="border-t border-adv-border">
          <div className="max-w-7xl mx-auto px-4 py-20">
            <p className="text-adv-gray text-[10px] tracking-widest uppercase mb-12">НАШИ ЦЕННОСТИ</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="border-t border-adv-border pt-8">
                  <span className="text-adv-gray text-[10px] tracking-widest mb-4 block">0{idx + 1}</span>
                  <h3 className="text-white text-sm font-bold tracking-widest mb-4">{value.title}</h3>
                  <p className="text-adv-gray text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-adv-border">
          <div className="max-w-7xl mx-auto px-4 py-20 text-center">
            <h2 className="text-white text-4xl font-bold tracking-widest uppercase mb-8">СМОТРЕТЬ КОЛЛЕКЦИЮ</h2>
            <Link
              href="/catalog"
              className="inline-block border border-adv-accent text-adv-accent text-xs font-bold tracking-widest px-16 py-4 hover:bg-adv-accent hover:text-black transition-colors"
            >
              В КАТАЛОГ
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
