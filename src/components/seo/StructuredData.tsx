export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OpenMarTech AI",
    alternateName: "OpenMarTech",
    url: "https://openmartech.ai",
    description:
      "Enterprise Decision Intelligence Platform",
    author: {
      "@type": "Person",
      name: "Rakesh Jillella",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}