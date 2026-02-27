import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Каталог | ADVOLATUM',
  description: 'Каталог одежды ADVOLATUM — уличная мода нового поколения',
};

const categories = [
  'ВСЕ',
  'ВЕРХНЯЯ ОДЕЖДА',
  'ТОЛСТОВКИ',
  'ФУТБОЛКИ',
  'ШТАНЫ',
  'АКСЕССУАРЫ',
];

const products = [
  { id: 1, name: 'ARCHIVE JACKET VOL.1', price: 24900, category: 'ВЕРХНЯЯ ОДЕЖДА', slug: 'archive-jacket-vol1' },
  { id: 2, name: 'SHADOW HOODIE', price: 12900, category: 'ТОЛСТОВКИ', slug: 'shadow-hoodie' },
  { id: 3, name: 'VOID TEE BLACK', price: 6900, category: 'ФУТБОЛКИ', slug: 'void-tee-black' },
  { id: 4, name: 'CARGO PANTS WIDE', price: 16900, category: 'ШТАНЫ', slug: 'cargo-pants-wide' },
  { id: 5, name: 'LOGO CAP ADV', price: 4900, category: 'АКСЕССУАРЫ', slug: 'logo-cap-adv' },
  { id: 6, name: 'ARCHIVE JACKET VOL.2', price: 26900, category: 'ВЕРХНЯЯ ОДЕЖДА', slug: 'archive-jacket-vol2' },
  { id: 7, name: 'CITY HOODIE GREY', price: 13900, category: 'ТОЛСТОВКИ', slug: 'city-hoodie-grey' },
  { id: 8, name: 'STREET TEE WHITE', price: 6900, category: 'ФУТБОЛКИ', slug: 'street-tee-white' },
  { id: 9, name: 'WIDE LEG PANTS', price: 18900, category: 'ШТАНЫ', slug: 'wide-leg-pants' },
  { id: 10, name: 'BEANIE KNIT ADV', price: 3900, category: 'АКСЕССУАРЫ', slug: 'beanie-knit-adv' },
  { id: 11, name: 'TECH JACKET', price: 28900, category: 'ВЕРХНЯЯ ОДЕЖДА', slug: 'tech-jacket' },
  { id: 12, name: 'OVERSIZE HOODIE', price: 14900, category: 'ТОЛСТОВКИ', slug: 'oversize-hoodie' },
];

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main className="bg-adv-dark min-h-screen">
        {/* Page Header */}
        <div className="border-b border-adv-border px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-adv-gray text-[10px] tracking-widest uppercase mb-3">ADVOLATUM</p>
            <h1 className="text-white text-5xl font-bold tracking-widest uppercase">КАТАЛОГ</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Categories filter */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`text-xs font-bold tracking-widest px-6 py-2 border transition-colors ${
                  cat === 'ВСЕ'
                    ? 'border-adv-accent text-black bg-adv-accent'
                    : 'border-adv-border text-white hover:border-adv-accent hover:text-adv-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort row */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-adv-gray text-xs tracking-widest">{products.length} ТОВАРА</p>
            <select className="bg-transparent border border-adv-border text-white text-xs tracking-widest px-4 py-2 focus:outline-none">
              <option value="new">НОВИНКИ</option>
              <option value="price_asc">ЦЕНА: ПО ВОЗРАСТАНИЮ</option>
              <option value="price_desc">ЦЕНА: ПО УБЫВАНИЮ</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/catalog/${product.slug}`}
                className="group block"
              >
                <div className="relative bg-adv-dark-secondary aspect-[3/4] mb-3 overflow-hidden">
                  {/* Placeholder image */}
                  <div className="w-full h-full bg-gradient-to-b from-adv-dark-secondary to-adv-dark flex items-end p-4">
                    <span className="text-adv-gray text-[9px] tracking-widest">{product.category}</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Category badge */}
                  <div className="absolute top-2 left-2">
                    <span className="text-[9px] font-bold tracking-widest bg-adv-accent text-black px-2 py-0.5">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-adv-gray text-[10px] tracking-widest uppercase mb-1">ADVOLATUM</p>
                  <h3 className="text-white text-sm font-semibold tracking-wider group-hover:text-adv-accent transition-colors mb-1">
                    {product.name}
                  </h3>
                  <p className="text-white text-sm font-bold">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
