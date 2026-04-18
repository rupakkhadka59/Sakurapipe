import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Sakura Pipe | Pipe Supplier in Butwal, Rupandehi',
  description: 'Get in touch with Sakura Pipe Udhyog. Located in Butwal-08, Rupandehi. Call +977-071-531659 or email info@sakurapipe.com.np.',
  keywords: ['Contact Sakura Pipe', 'Pipe supplier Butwal location', 'Buy HDPE pipe Nepal', 'Sakura pipe phone number'],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Sakura Pipe Udhyog",
    "description": "Get in touch with Sakura Pipe Udhyog. Located in Butwal-08, Rupandehi. Call +977-071-531659 or email info@sakurapipe.com.np.",
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
