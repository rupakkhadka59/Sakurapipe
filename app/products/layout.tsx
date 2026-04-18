import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HDPE & PVC Pipes for Nepal | Water Supply, Irrigation, Fittings',
  description: 'Explore Sakura Pipe\'s range of high-performance PVC, HDPE, Agriculture, and Flexible pipes for residential, commercial and municipal projects.',
  keywords: ['HDPE pipes catalog', 'PVC pipes Nepal', 'Agriculture pipe fittings', 'Hose pipes Butwal'],
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Sakura Pipe Products",
    "description": "Explore Sakura Pipe's range of high-performance PVC, HDPE, Agriculture, and Flexible pipes.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
