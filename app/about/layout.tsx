import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Sakura Pipe | Top Pipe Manufacturer in Western Nepal',
  description: 'Founded in 2014, Sakura Pipe is a leading manufacturer of HDPE and PVC pipes based in Butwal, serving over 77 districts across Nepal.',
  keywords: ['About Sakura Pipe', 'Pipe factory Butwal', 'Pipe company history Nepal', 'HDPE western Nepal'],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Sakura Pipe Udhyog",
    "description": "Founded in 2014, Sakura Pipe is a leading manufacturer of HDPE and PVC pipes based in Butwal, serving over 77 districts across Nepal.",
    "publisher": {
      "@type": "Organization",
      "name": "Sakura Pipe Udhyog Pvt. Ltd."
    }
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
