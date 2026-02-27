import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const products: Record<string, {
  name: string;
  price: number;
  category: string;
  description: string;
  sizes: string[];
  details: string[];
}> = {
  'archive-jacket-vol1': {
    name: 'ARCHIVE JACKET VOL.1',
    price: 24900,
    category: 'ВЕРХНЯЯ ОДЕЖДА',
    description: 'Куртка из премиумной плотной ткани. Оверсайз силуэт. Минималистичный дизайн. Часть коллекции ARCHIVE.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    details: ['Состав: 100% хлопок', 'Уход: Ручная стирка', 'Страна производства: Португалия'],
  },
  'shadow-hoodie': {
    name: 'SHADOW HOODIE',
    price: 12900,
    category: 'ТОЛСТОВКИ',
    description: 'Тяжелый худи из смеси хлопка и полиэстера. Дроппед силуэт.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: ['Состав: 80% хлопок, 20% полиэстер', 'Уход: Стирка мешок', 'Страна производства: Турция'],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products[slug];
  return {
    title: product ? `${product.name} | ADVOLATUM` : 'Товар | ADVOLATUM',
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products[slug] || {
    name: 'PRODUCT NAME',
    price: 9900,
    category: 'КАТАЛОГ',
    description: 'Описание товара.',
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['Состав: 100% хлопок'],
  };

  return (
    <>
      <Header />
      <main className="bg-adv-dark min-h-screen">
        {/* Breadcrumb */}
        <div className="border-b border-adv-border px-4 py-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-adv-gray text-xs tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">ГЛАВНАЯ</Link>
              <span>/</span>
              <Link href="/catalog" className="hover:text-white transition-colors">КАТАЛОГ</Link>
              <span>/</span>
              <span className="text-white">{product.name}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-3">
              {/* Main image */}
              <div className="bg-adv-dark-secondary aspect-[3/4] flex items-center justify-center">
                <span className="text-adv-gray text-xs tracking-widest">ADVOLATUM / {product.name}</span>
              </div>
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-adv-dark-secondary aspect-square cursor-pointer border border-transparent hover:border-adv-accent transition-colors" />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <p className="text-adv-gray text-[10px] tracking-widest uppercase mb-2">ADVOLATUM / {product.category}</p>
              <h1 className="text-white text-3xl font-bold tracking-wider mb-6">{product.name}</h1>
              <p className="text-white text-2xl font-bold mb-8">
                {product.price.toLocaleString('ru-RU')} ₽
              </p>

              {/* Size selector */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-adv-gray text-xs tracking-widest uppercase">РАЗМЕР</p>
                  <button className="text-adv-gray text-xs tracking-widest underline hover:text-white transition-colors">ТАБЛИЦА РАЗМЕРОВ</button>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="border border-adv-border text-white text-xs tracking-widest py-2 hover:border-adv-accent hover:text-adv-accent transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to cart */}
              <div className="space-y-3 mb-8">
                <button className="w-full bg-adv-accent text-black text-xs font-bold tracking-widest py-4 hover:opacity-90 transition-opacity">
                  ДОБАВИТЬ В КОРЗИНУ
                </button>
                <button className="w-full border border-adv-border text-white text-xs font-bold tracking-widest py-4 hover:border-adv-accent hover:text-adv-accent transition-colors">
                  ДОБАВИТЬ В ИЗБРАННОЕ
                </button>
              </div>

              {/* Description */}
              <div className="border-t border-adv-border pt-6 mb-6">
                <h3 className="text-white text-xs font-bold tracking-widest mb-3">ОПИСАНИЕ</h3>
                <p className="text-adv-gray text-sm leading-relaxed">{product.description}</p>
              </div>

              {/* Details */}
              <div className="border-t border-adv-border pt-6">
                <h3 className="text-white text-xs font-bold tracking-widest mb-3">СОСТАВ И УХОД</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="text-adv-gray text-sm">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
