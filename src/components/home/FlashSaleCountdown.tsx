import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { Link } from "react-router-dom";

const FlashSaleCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const getTargetTime = () => {
      const now = new Date();
      const target = new Date(now);
      target.setHours(21, 0, 0, 0);
      if (now >= target) {
        target.setDate(target.getDate() + 1);
      }
      return target;
    };

    const updateCountdown = () => {
      const now = new Date();
      const target = getTargetTime();
      const diff = target.getTime() - now.getTime();

      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <section className="navy-gradient section-padding overflow-hidden relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, hsl(42 80% 55%) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="w-6 h-6 text-accent animate-float" />
            <span className="text-accent font-semibold tracking-widest uppercase text-sm">
              Flash Sale Ends In
            </span>
            <Flame className="w-6 h-6 text-accent animate-float" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-8">
            Up to <span className="text-gradient-gold">70% Off</span> Today
          </h2>

          {/* Countdown */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10">
            {[
              { value: pad(timeLeft.hours), label: "Hours" },
              { value: pad(timeLeft.minutes), label: "Minutes" },
              { value: pad(timeLeft.seconds), label: "Seconds" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-secondary/10 backdrop-blur-sm border border-secondary/20 flex items-center justify-center mb-2">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-accent">
                    {item.value}
                  </span>
                </div>
                <span className="text-secondary/50 text-xs uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <Link to="/offers" className="btn-gold text-base">
            Shop the Sale
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FlashSaleCountdown;
