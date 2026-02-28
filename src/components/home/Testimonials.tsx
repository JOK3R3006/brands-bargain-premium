import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    name: "Ashwani Kumar",
    text: "I really enjoyed shopping here. The store is so well organized. Service is excellent. The collection was amazing. I liked it and I will definitely visit again!",
    rating: 5,
    date: "January 2026",
  },
  {
    name: "Navroop Dhillon",
    text: "A quiet, premium shopping experience away from crowded malls. Beautiful store layout, calm surroundings, and brand options that instantly impress. The variety is incredible and prices are unbeatable.",
    rating: 5,
    date: "January 2026",
  },
  {
    name: "Pawan Narasimhan",
    text: "A Magical Shopping Experience! My visit to Brands Bargain was nothing short of spectacular. The branded collection was a perfect blend of luxury and affordability.",
    rating: 5,
    date: "May 2025",
  },
  {
    name: "Jatin Chaudhary",
    text: "Great Experience! The deals are literally 'Top of the World'. Excellent collection! Amazing prices on premium brands at their store.",
    rating: 5,
    date: "January 2025",
  },
  {
    name: "Tanishka Ingale",
    text: "Amazing store! The location is very convenient in Sector 11. The collection is breathtaking — from clothing to accessories. Prices were unbelievably good.",
    rating: 5,
    date: "January 2025",
  },
];

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Verified Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Wall of Love ❤️
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Real reviews from our happy shoppers
          </p>
        </motion.div>

        {/* Horizontal scrolling on mobile, grid on desktop */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center flex-shrink-0 md:flex-shrink p-6 rounded-2xl relative group hover:shadow-xl transition-shadow duration-300 border border-border/40"
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(12px)",
              }}
            >
              <Quote className="absolute top-5 right-5 w-7 h-7 text-accent/15" />

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`w-4 h-4 ${si < t.rating ? "fill-accent text-accent" : "text-muted-foreground/30"}`}
                  />
                ))}
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed mb-5">
                "{t.text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.date}</p>
                </div>
                <span className="text-xs text-accent font-medium bg-accent/10 px-2 py-1 rounded-full">
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
