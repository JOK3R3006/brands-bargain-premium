import { motion } from "framer-motion";
import { Heart, Target, Users, ShieldCheck } from "lucide-react";

const values = [
  { icon: Heart, title: "Customer First", desc: "Every decision we make is centered around making your shopping experience exceptional." },
  { icon: Target, title: "Best Prices", desc: "We negotiate directly with brands to bring you the most competitive prices possible." },
  { icon: Users, title: "Community", desc: "We're proud to serve the Panchkula community for years, building trust one customer at a time." },
  { icon: ShieldCheck, title: "Authenticity", desc: "Every product we sell is 100% authentic and sourced directly from authorized channels." },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="navy-gradient section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              Our Story
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mt-3 mb-6">
              About <span className="text-gradient-gold">Brands Bargain</span>
            </h1>
            <p className="text-secondary/70 text-lg leading-relaxed">
              We believe everyone deserves access to premium brands without the premium price tag. 
              Located in the heart of Sector 11, Panchkula, we've been making luxury affordable for our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Brands Bargain, we bridge the gap between luxury and affordability. 
                  We curate the finest branded products — from clothing and footwear to accessories — 
                  and offer them at prices that surprise and delight our customers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our direct relationships with top brands and smart sourcing strategies allow us 
                  to pass incredible savings to you, without ever compromising on quality or authenticity.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 text-center">
                  <p className="font-display text-3xl font-bold text-accent">1000+</p>
                  <p className="text-muted-foreground text-sm mt-1">Products</p>
                </div>
                <div className="glass-card p-6 text-center">
                  <p className="font-display text-3xl font-bold text-accent">50+</p>
                  <p className="text-muted-foreground text-sm mt-1">Top Brands</p>
                </div>
                <div className="glass-card p-6 text-center">
                  <p className="font-display text-3xl font-bold text-accent">5000+</p>
                  <p className="text-muted-foreground text-sm mt-1">Happy Customers</p>
                </div>
                <div className="glass-card p-6 text-center">
                  <p className="font-display text-3xl font-bold text-accent">70%</p>
                  <p className="text-muted-foreground text-sm mt-1">Max Discount</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
              Why Shop at Brands Bargain?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
