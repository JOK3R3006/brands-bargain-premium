import HeroBanner from "@/components/home/HeroBanner";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FlashSaleCountdown from "@/components/home/FlashSaleCountdown";
import Testimonials from "@/components/home/Testimonials";
import TrustBadges from "@/components/home/TrustBadges";
import Newsletter from "@/components/home/Newsletter";

const Index = () => {
  return (
    <>
      <HeroBanner />
      <TrustBadges />
      <FeaturedCategories />
      <FlashSaleCountdown />
      <Testimonials />
      <Newsletter />

      {/* JSON-LD Structured Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ClothingStore",
            name: "Brands Bargain",
            description: "Premium branded clothing, footwear & accessories at unbeatable prices in Panchkula",
            url: "https://brandsbargain.in",
            telephone: "+91-172-5057777",
            address: {
              "@type": "PostalAddress",
              streetAddress: "SCO 8, Sector 11",
              addressLocality: "Panchkula",
              addressRegion: "Haryana",
              postalCode: "134112",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "30.6942",
              longitude: "76.8606",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "10:00",
                closes: "21:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Sunday",
                opens: "11:00",
                closes: "20:00",
              },
            ],
            priceRange: "₹₹",
          }),
        }}
      />
    </>
  );
};

export default Index;
