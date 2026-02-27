import HeroSection from '@/components/home/HeroSection';
import CollectionSlider from '@/components/home/CollectionSlider';
import ProductsSection from '@/components/home/ProductsSection';
import ContactsSection from '@/components/home/ContactsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CollectionSlider />
      <ProductsSection />
      <ContactsSection />
    </>
  );
}
