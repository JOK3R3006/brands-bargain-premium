import { motion } from "framer-motion";
import { Percent, Clock, Flame, Zap, Gift, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import FlashSaleCountdown from "@/components/home/FlashSaleCountdown";

const offers = [
  {
    title: "Flat 50% Off on All Clothing",
    description: "Premium branded shirts, jeans, jackets & more at half the price",
    icon: Percent,
    badge: "Limited Time",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Buy 2 Get 1 Free — Footwear",
    description: "Mix & match any shoes, sneakers or sandals from top brands",
    icon: Gift,
    badge: "Popular",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Accessories Under ₹999",
    description: "Watches, sunglasses, belts & bags — all under ₹999",
    icon: Tag,
    badge: "Best Value",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Seasonal Clearance — Up to 70% Off",
    description: "End-of-season sale on winter & summer collections",
    icon: Zap,
    badge: "Ending Soon",
    color: "bg-destructive/10 text-destructive",
  },
  {
    title: "New Arrivals — Flat 30% Off",
    description: "Fresh stock from Nike, Adidas, Puma & more",
    icon: Flame,
    badge: "New",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Weekend Special — Extra 10% Off",
    description: "Visit us this weekend for an exclusive additional discount",
    icon: Clock,
    badge: "Weekend Only",
    color: "bg-accent/10 text-accent",
  },
];

const Offers = () => {
  return (
    <main className="pt-20">
      <section className="navy-gradient py-16 sm:py-20">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary mb-4">
              Offers & <span className="text-gradient-gold">Deals</span>
            </h1>
            <p className="text-secondary/60 max-w-lg mx-auto">
              Grab incredible deals before they're gone. New offers every week!
            </p>
          </motion.div>
        </div>
      </section>

      <FlashSaleCountdown />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Current Promotions
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {offers.map((offer, i) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${offer.color}`}>
                  {offer.badge}
                </span>
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <offer.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {offer.title}
                </h3>
                <p className="text-muted-foreground text-sm">{offer.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-4">Want to know about new offers first?</p>
            <Link to="/contact" className="btn-gold">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Offers;
