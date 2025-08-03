"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const userTypes = [
    { title: "Children's Homes", icon: "", color: "bg-pink-200" },
    { title: "Foster Carers", icon: "👨‍‍👧‍", color: "bg-blue-200" },
    { title: "Special Education Settings", icon: "🎓", color: "bg-purple-200" },
    { title: "Local Authorities", icon: "️", color: "bg-rose-200" },
    { title: "Parents & Guardians", icon: "👨‍‍👧‍", color: "bg-pink-100" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            What is Nestloop?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Nestloop is a smart, all-in-one care platform built for real-life
            settings. It simplifies daily care, reduces admin, and puts child
            wellbeing at the centre — using emotion journaling, wearable data,
            and smart alerts to support every child&apos;s journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {userTypes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className=" h-full text-center hover:scale-105 transition-transform bg-white/80 border border-gray-100">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-slate-800">{item.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
