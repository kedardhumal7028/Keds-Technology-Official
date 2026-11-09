import React from "react";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kedstechnology.com/#organization",
        "name": "Keds Technology",
        "alternateName": [
          "Keds",
          "Technology",
          "Keds Tech",
          "Keds Technology Official",
          "Keds Software",
          "Keds IT Solutions"
        ],
        "url": "https://kedstechnology.com",
        "logo": "https://kedstechnology.com/images/keds-official-logo.png",
        "description": "Leading software development and IT engineering company specializing in website development, mobile application development, enterprise HRMS, CRM, and ERP solutions.",
        "slogan": "Innovate • Build • Scale",
        "email": "kedstechnology@gmail.com",
        "telephone": "+91-9511273939",
        "sameAs": [
          "https://linkedin.com",
          "https://github.com",
          "https://instagram.com"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-9511273939",
            "contactType": "customer service",
            "email": "kedstechnology@gmail.com",
            "areaServed": ["IN", "Worldwide"],
            "availableLanguage": ["English", "Hindi", "Marathi"]
          }
        ],
        "knowsAbout": [
          "Website Development",
          "Mobile App Development",
          "Custom Software Engineering",
          "Enterprise ERP Systems",
          "CRM Systems",
          "HRMS Solutions",
          "UI/UX Design",
          "Cloud Infrastructure"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://kedstechnology.com/#website",
        "url": "https://kedstechnology.com",
        "name": "Keds Technology",
        "alternateName": ["Keds", "Keds Tech", "Keds Technology Official Website"],
        "description": "Official website of Keds Technology - Premier Website, Mobile App & Custom Software Development Company.",
        "publisher": {
          "@id": "https://kedstechnology.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://kedstechnology.com/#localbusiness",
        "name": "Keds Technology",
        "image": "https://kedstechnology.com/images/keds-banner.jpeg",
        "url": "https://kedstechnology.com",
        "telephone": "+91-9511273939",
        "email": "kedstechnology@gmail.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5204",
          "longitude": "73.8567"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "19:00"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Software Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Website Development",
                "description": "High-performance, SEO-optimized, responsive web applications and portals."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobile App Development",
                "description": "Native and cross-platform mobile apps for iOS and Android."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "HRMS Solutions",
                "description": "Automated payroll, biometric attendance, and workforce management systems."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "CRM Systems",
                "description": "Lead management, sales pipelines, and customer communication systems."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERP Systems",
                "description": "Integrated enterprise resource planning for inventory, billing, and supply chains."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Software Architecture",
                "description": "Bespoke digital software engineered for specialized business requirements."
              }
            }
          ]
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
