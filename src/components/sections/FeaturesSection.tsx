"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaUsers,
  FaClipboardList,
  FaExclamationTriangle,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      title: "LoopCare Profile & Support Network",
      desc: "Create a central profile for your child and invite family, friends, and professionals to join your care circle. Keep everyone informed and involved.",
      icon: <FaUsers className="text-2xl text-[#f4b75a]" />,
      color: "bg-[#f4b75a]/20",
      accent: "text-[#f4b75a]",
    },
    {
      title: "Loop TaskBoard",
      desc: "Organise daily care tasks in one place. Assign responsibilities, set reminders, and track progress together.",
      icon: <FaClipboardList className="text-2xl text-[#f8845b]" />,
      color: "bg-[#f8845b]/20",
      accent: "text-[#f8845b]",
    },
    {
      title: "Community & SOS",
      desc: "Connect with other families for shared experiences and advice. Use the SOS feature to request urgent help when needed.",
      icon: <FaExclamationTriangle className="text-2xl text-[#9f6b99]" />,
      color: "bg-[#9f6b99]/20",
      accent: "text-[#9f6b99]",
    },
    {
      title: "Peer-to-Peer Marketplace",
      desc: "Buy, sell, or exchange products and services tailored to your child's needs. All within a trusted community.",
      icon: <FaShoppingCart className="text-2xl text-[#c5d4c1]" />,
      color: "bg-[#c5d4c1]/20",
      accent: "text-[#c5d4c1]",
    },
    {
      title: "Care Directory",
      desc: "Find verified service providers, from therapists to recreational programs, with reviews and recommendations from other families.",
      icon: <FaSearch className="text-2xl text-[#f4b75a]" />,
      color: "bg-[#f4b75a]/20",
      accent: "text-[#f4b75a]",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 lg:py-32 bg-gradient-to-br from-white to-blue-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl text-center lg:text-3xl xl:text-4xl font-bold text-[#2a2d34] mb-6 lg:mb-8">
            Core Features
          </h2>
          <p className="text-[#2a2d34]/60 text-xl   max-w-3xl mx-auto">
            Everything you need to provide exceptional care and build a
            supportive network around your child
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-2 h-full">
                <CardContent className="p-6 lg:p-8 h-fit">
                  <div
                    className={`w-14 h-14 lg:w-16 lg:h-16 ${feature.color} rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 border border-gray-200`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-[#2a2d34] mb-4 group-hover:text-[#f4b75a] transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#2a2d34]/80 text-sm lg:text-base leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
