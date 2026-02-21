import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle, Mail, Navigation } from "lucide-react";

const Contact = () => {
  return (
    <main className="pt-20">
      <section className="navy-gradient py-16 sm:py-20">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-secondary mb-4">
              Get in <span className="text-gradient-gold">Touch</span>
            </h1>
            <p className="text-secondary/60 max-w-lg mx-auto">
              Visit our store or reach out — we'd love to help you find the perfect deal.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Visit Our Store
                </h2>

                <div className="space-y-6">
                  <a
                    href="tel:01725057777"
                    className="flex items-start gap-4 p-5 glass-card hover:shadow-lg transition-shadow group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Call Us</p>
                      <p className="text-muted-foreground text-sm">0172-5057777</p>
                      <p className="text-accent text-xs mt-1">Tap to call →</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/911725057777?text=Hi%2C%20I%27m%20interested%20in%20your%20products!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 glass-card hover:shadow-lg transition-shadow group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">WhatsApp</p>
                      <p className="text-muted-foreground text-sm">Chat with us instantly</p>
                      <p className="text-green-600 text-xs mt-1">Open WhatsApp →</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-5 glass-card">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground text-sm">SCO 8, Sector 11, Panchkula, Haryana 134112</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 glass-card">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Business Hours</p>
                      <p className="text-muted-foreground text-sm">Mon – Sat: 10:00 AM – 9:00 PM</p>
                      <p className="text-muted-foreground text-sm">Sunday: 11:00 AM – 8:00 PM</p>
                    </div>
                  </div>

                  <a
                    href="mailto:info@brandsbargain.in"
                    className="flex items-start gap-4 p-5 glass-card hover:shadow-lg transition-shadow group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground text-sm">info@brandsbargain.in</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-card overflow-hidden h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5!2d76.86!3d30.694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQxJzM4LjQiTiA3NsKwNTEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Brands Bargain Location"
                  className="rounded-xl"
                />
              </div>

              <a
                href="https://maps.google.com/?q=MVQ2+JV+Panchkula"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center justify-center gap-2 w-full"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
