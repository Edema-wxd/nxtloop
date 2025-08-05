"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const WhoItsForSection = () => {
  const userTypes = [
    {
      title: "Children&apos;s Home Staff",
      icon: "🏠",
      color: "bg-[#f4b75a]/20",
    },
    { title: "Foster Carers", icon: "👨‍👦", color: "bg-[#c5d4c1]/20" },
    { title: "SENCOs & Schools", icon: "🎓", color: "bg-[#9f6b99]/20" },
    {
      title: "Councils and Local Authorities",
      icon: "🏛️",
      color: "bg-[#f8845b]/20",
    },
    {
      title: "Therapists & Social Workers",
      icon: "👨‍⚕️",
      color: "bg-[#f4b75a]/20",
    },
    {
      title: "Parents of neurodiverse children",
      icon: "👨‍👩‍👧‍",
      color: "bg-[#c5d4c1]/20",
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
          <h2 className="text-4xl font-bold text-[#2a2d34] mb-6">
            Who It&apos;s For
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {userTypes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:scale-105 transition-transform bg-white border border-gray-100 shadow-sm hover:shadow-md">
                <CardContent className="p-4">
                  <div
                    className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-200`}
                  >
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-[#2a2d34] text-sm">
                    {item.title}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
