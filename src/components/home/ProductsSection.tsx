import Link from 'next/link';

const PRODUCTS = [
  { id: 1, name: 'Худи оверсайз', price: 3790, category: 'Юниекс', slug: 'oversized-hoodie-1', color: '#1E2530' },
  { id: 2, name: 'Теховый костюм', price: 5490, category: 'Мужчины', slug: 'tracksuit-1', color: '#161B24' },
  { id: 3, name: 'Черная футболка', price: 2490, category: 'Девушки', slug: 'black-tee-1', color: '#0E1420' },
  { id: 4, name: 'Карго шорты', price: 3190, category: 'Юниекс', slug: 'cargo-shorts-1', color: '#182030' },
];

export default function ProductsSection() {
  return (
    <section className="py-20 bg-adv-darker">
      <div className="container-custom">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-adv-gray text-xs tracking-[0.3em] uppercase mb-2">НОВИНКИ</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">АКТУАЛЬНОЕ</h2>
          </div>
          <Link href="/catalog" className="text-xs tracking-widest text-adv-gray hover:text-white transition-colors border-b border-adv-border pb-1">
            СМОТРЕТЬ ВСЕ
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group block"
            >
              {/* Product image placeholder */}
              <div
                className="relative aspect-[3/4] mb-3 overflow-hidden"
                style={{ backgroundColor: product.color }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-bold tracking-widest border border-white px-4 py-2">
                    СМОТРЕТЬ
                  </span>
                </div>

                {/* Category badge */}
                <div className="absolute top-2 left-2">
                  <span className="text-[10px] font-bold tracking-widest bg-adv-accent text-black px-2 py-1">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product info */}
              <div>
                <p className="text-adv-gray text-[10px] tracking-widest uppercase mb-1">ADVOLATUM</p>
                <h3 className="text-sm font-semibold tracking-wider text-white group-hover:text-adv-accent transition-colors mb-1">
                  {product.name}
                </h3>
                <p className="text-sm font-bold text-white">
                  {product.price.toLocaleString('ru-RU')} ₽
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Link
            href="/catalog"
            className="inline-block px-12 py-4 border border-adv-border text-white text-xs font-bold tracking-widest hover:border-white hover:bg-white hover:text-black transition-all"
          >
            ВЕСЬ КАТАЛОГ
          </Link>
        </div>
      </div>
    </section>
  );
}
