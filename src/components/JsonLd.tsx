import React from "react";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kedstechnology.com/#organization",
        "name": "Keds Technology",
        "url": "https://kedstechnology.com",
        "logo": "https://kedstechnology.com/images/keds-official-logo.png",
        "description": "High-velocity digital engineering and product design firm specializing in web applications, mobile apps, HRMS, CRM, and ERP systems.",
        "slogan": "Innovate | Build | Scale",
        "sameAs": [
          "https://linkedin.com/company/kedstechnology",
          "https://github.com/kedstechnology",
          "https://instagram.com/kedstechnology"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9999999999",
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi", "Marathi"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://kedstechnology.com/#website",
        "url": "https://kedstechnology.com",
        "name": "Keds Technology - Official Website",
        "publisher": {
          "@id": "https://kedstechnology.com/#organization"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://kedstechnology.com/#localbusiness",
        "name": "Keds Technology",
        "image": "https://kedstechnology.com/images/keds-official-logo.png",
        "url": "https://kedstechnology.com",
        "telephone": "+91-9999999999",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
