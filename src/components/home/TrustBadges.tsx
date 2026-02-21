import { motion } from "framer-motion";
import { ShieldCheck, Truck, RefreshCcw, Award } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "100% Authentic", desc: "Genuine branded products" },
  { icon: Award, label: "Best Prices", desc: "Guaranteed lowest rates" },
  { icon: RefreshCcw, label: "Easy Returns", desc: "Hassle-free exchange" },
  { icon: Truck, label: "Fresh Stock", desc: "New arrivals weekly" },
];

const TrustBadges = () => {
  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 justify-center"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <b.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{b.label}</p>
                <p className="text-muted-foreground text-xs">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
