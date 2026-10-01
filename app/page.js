import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Audiences from "@/components/home/Audiences";
import ServicesBento from "@/components/home/ServicesBento";
import Results from "@/components/home/Results";
import Process from "@/components/home/Process";
import PricingPlans from "@/components/pricing/PricingPlans";
import FinalCta from "@/components/home/FinalCta";
import { services, site } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: "PK",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital marketing and software development services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.body },
    })),
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Marquee />
      <Audiences />
      <ServicesBento />
      <Results />
      <Process />
      <PricingPlans />
      <FinalCta />
    </>
  );
}
