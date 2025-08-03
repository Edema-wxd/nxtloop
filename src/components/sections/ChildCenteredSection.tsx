"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const ChildCenteredSection = () => {
  const features = [
    "Trauma-informed care tools",
    "Personalised routines and timelines",
    "Children take part in their own care through planners, reward charts & event scheduling",
    "Visual progress that helps everyone grow — together",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black">
              Designed Around the Child
            </h2>
            <p className="text-xl text-gray-800 italic">
              &ldquo;Nestloop doesn&apos;t just log data — it listens to
              it.&rdquo;
            </p>
            <ul className="space-y-4">
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-accent/10 to-accent-3/10 border-0">
              <CardContent className="p-8">
                <div className="text-center">
                  <motion.div
                    className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-white text-4xl">📊</span>
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-black mb-4">
                    Visual Progress Tracking
                  </h3>
                  <p className="text-gray-700">
                    Real-time insights that help everyone understand and support
                    the child&apos;s journey.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChildCenteredSection;
