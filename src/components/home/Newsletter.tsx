import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(42 80% 55%) 35px, hsl(42 80% 55%) 36px)",
        }} />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <Mail className="w-10 h-10 text-accent mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary mb-3">
            Stay in the Loop
          </h2>
          <p className="text-secondary/60 mb-8 text-sm">
            Get notified about new arrivals, exclusive deals, and flash sales — straight to your inbox.
          </p>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-accent font-semibold"
            >
              🎉 You're subscribed! Watch out for amazing deals.
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3 rounded-md bg-secondary/10 border border-secondary/20 text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-accent text-sm"
              />
              <button type="submit" className="btn-gold flex items-center justify-center gap-2 px-6">
                Subscribe <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
