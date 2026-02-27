import type { Metadata } from 'next';
import { Unbounded } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-primary',
});

export const metadata: Metadata = {
  title: 'ADVOLATUM | Одежда для каждого',
  description: 'ADVOLATUM - стритфэшн магазин одежды. Коллекции для девушек, мужчин и юниекс.',
  keywords: ['одежда', 'стритфэшн', 'advolatum', 'fashion', 'streetwear'],
  openGraph: {
    title: 'ADVOLATUM | Одежда для каждого',
    description: 'ADVOLATUM - стритфэшн магазин одежды.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${unbounded.variable} font-primary bg-adv-dark text-adv-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
