import React from "react";
import { Helmet } from "react-helmet-async";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "ISO - Instituto Seu Olhar",
  image: "https://institutoseuolhar.com.br/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Fernandes Tourinho, 235 - Sala 1002",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    postalCode: "30112-000",
    addressCountry: "BR",
  },
  telephone: "+55-31-99565-9538",
  url: "https://institutoseuolhar.com.br",
  openingHours: "Mo-Fr 09:00-18:00",
  medicalSpecialty: ["Ophthalmology", "Psychiatry", "Nutrition"],
};

export function SchemaOrg() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
}
