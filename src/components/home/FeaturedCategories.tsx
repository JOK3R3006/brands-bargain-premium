import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shirt, Footprints, Watch, Gift } from "lucide-react";

const categories = [
  {
    icon: Shirt,
    name: "Clothing",
    description: "Premium branded apparel for men, women & kids",
    link: "/products?category=clothing",
    count: "500+ Items",
  },
  {
    icon: Footprints,
    name: "Footwear",
    description: "Top brand shoes, sneakers & sandals",
    link: "/products?category=footwear",
    count: "300+ Items",
  },
  {
    icon: Watch,
    name: "Accessories",
    description: "Watches, bags, belts & more",
    link: "/products?category=accessories",
    count: "200+ Items",
  },
  {
    icon: Gift,
    name: "Seasonal Offers",
    description: "Limited-time deals on trending brands",
    link: "/offers",
    count: "New Arrivals",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            Shop By Category
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            What Are You Looking For?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={cat.link}
                className="group block glass-card p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <cat.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {cat.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {cat.description}
                </p>
                <span className="text-accent text-xs font-semibold tracking-wide uppercase">
                  {cat.count}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
