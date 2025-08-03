"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const WhyNestloopSection = () => {
  const reasons = [
    {
      title: "Built for non-techy carers",
      desc: "Intuitive UI that anyone can use, regardless of technical experience.",
      icon: "",
      color: "bg-accent",
    },
    {
      title: "Scalable from 1 to 1,000",
      desc: "Grows with your needs, from individual families to large organizations.",
      icon: "",
      color: "bg-accent-3",
    },
    {
      title: "GDPR, Ofsted & Safeguarding Ready",
      desc: "Built with compliance and security at the core.",
      icon: "",
      color: "bg-accent-4",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-black mb-6">Why Nestloop?</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            No other UK platform blends care coordination, SOS Alerts, emotional
            support, and a trusted SEND-focused marketplace, built for families
            raising children with special needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <motion.div
                    className={`w-16 h-16 ${reason.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-white text-2xl">{reason.icon}</span>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700">{reason.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNestloopSection;
