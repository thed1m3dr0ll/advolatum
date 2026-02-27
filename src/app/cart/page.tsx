import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Корзина | ADVOLATUM',
};

// Sample cart items for demonstration
const cartItems = [
  { id: 1, name: 'ARCHIVE JACKET VOL.1', price: 24900, size: 'M', quantity: 1, slug: 'archive-jacket-vol1' },
  { id: 2, name: 'SHADOW HOODIE', price: 12900, size: 'L', quantity: 2, slug: 'shadow-hoodie' },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = 0;
  const total = subtotal + delivery;

  return (
    <>
      <Header />
      <main className="bg-adv-dark min-h-screen">
        {/* Page Header */}
        <div className="border-b border-adv-border px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-adv-gray text-[10px] tracking-widest uppercase mb-3">ADVOLATUM</p>
            <h1 className="text-white text-5xl font-bold tracking-widest uppercase">КОРЗИНА</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-adv-gray text-sm tracking-widest mb-8">КОРЗИНА ПУСТА</p>
              <Link
                href="/catalog"
                className="inline-block border border-adv-accent text-adv-accent text-xs font-bold tracking-widest px-12 py-4 hover:bg-adv-accent hover:text-black transition-colors"
              >
                ПЕРЕЙТИ В КАТАЛОГ
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-6 border-b border-adv-border pb-6">
                    {/* Product image placeholder */}
                    <div className="w-24 h-32 bg-adv-dark-secondary flex-shrink-0" />
                    {/* Product details */}
                    <div className="flex-1">
                      <p className="text-adv-gray text-[10px] tracking-widest uppercase mb-1">ADVOLATUM</p>
                      <Link
                        href={`/catalog/${item.slug}`}
                        className="text-white text-sm font-semibold tracking-wider hover:text-adv-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-adv-gray text-xs tracking-widest mt-2">Размер: {item.size}</p>
                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity */}
                        <div className="flex items-center border border-adv-border">
                          <button className="text-white text-xs px-3 py-1 hover:bg-adv-dark-secondary transition-colors">-</button>
                          <span className="text-white text-xs px-4 py-1 border-x border-adv-border">{item.quantity}</span>
                          <button className="text-white text-xs px-3 py-1 hover:bg-adv-dark-secondary transition-colors">+</button>
                        </div>
                        {/* Price */}
                        <p className="text-white text-sm font-bold">
                          {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                        </p>
                      </div>
                    </div>
                    {/* Remove button */}
                    <button className="text-adv-gray hover:text-white transition-colors text-xs tracking-widest self-start">
                      ×
                    </button>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="border border-adv-border p-6">
                  <h2 className="text-white text-sm font-bold tracking-widest uppercase mb-6">ИТОГО</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-adv-gray text-xs tracking-widest">ТОВАРЫ</span>
                      <span className="text-white text-xs">{subtotal.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-adv-gray text-xs tracking-widest">ДОСТАВКА</span>
                      <span className="text-adv-accent text-xs tracking-widest">БЕСПЛАТНО</span>
                    </div>
                    <div className="border-t border-adv-border pt-3 flex justify-between">
                      <span className="text-white text-sm font-bold tracking-widest">ИТОГО</span>
                      <span className="text-white text-sm font-bold">{total.toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </div>
                  {/* Promo code */}
                  <div className="flex mb-6">
                    <input
                      type="text"
                      placeholder="ПРОМОКОД"
                      className="flex-1 bg-transparent border border-adv-border text-white text-xs tracking-widest placeholder-adv-gray px-4 py-3 focus:outline-none focus:border-adv-accent transition-colors"
                    />
                    <button className="border border-l-0 border-adv-border text-white text-xs tracking-widest px-4 hover:bg-adv-dark-secondary transition-colors">
                      ПРИМЕНИТЬ
                    </button>
                  </div>
                  <Link
                    href="/checkout"
                    className="block w-full bg-adv-accent text-black text-xs font-bold tracking-widest py-4 text-center hover:opacity-90 transition-opacity"
                  >
                    ОФОРМИТЬ ЗАКАЗ
                  </Link>
                  <Link
                    href="/catalog"
                    className="block w-full text-center text-adv-gray text-xs tracking-widest mt-4 hover:text-white transition-colors"
                  >
                    ПРОДОЛЖИТЬ ПОКУПКИ
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
