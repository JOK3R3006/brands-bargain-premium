import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Amazing collection of branded clothes at such affordable prices! I always find something great here. Best store in Panchkula hands down.",
    rating: 5,
    location: "Sector 9, Panchkula",
  },
  {
    name: "Rahul Verma",
    text: "Got Nike shoes at 60% off — couldn't believe the quality and price. The staff is really helpful too. Highly recommended!",
    rating: 5,
    location: "Sector 15, Panchkula",
  },
  {
    name: "Sneha Gupta",
    text: "My go-to store for all shopping needs. From clothes to accessories, everything is top-notch quality at bargain prices.",
    rating: 5,
    location: "Chandigarh",
  },
  {
    name: "Amit Kumar",
    text: "Best deals in Sector 11! The seasonal offers are incredible. I've been shopping here for 2 years and always find great value.",
    rating: 4,
    location: "Sector 11, Panchkula",
  },
];

const Testimonials = () => {
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
            Customer Love
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            What Our Shoppers Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 relative group hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/15" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`w-4 h-4 ${si < t.rating ? "fill-accent text-accent" : "text-muted-foreground/30"}`}
                  />
                ))}
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
