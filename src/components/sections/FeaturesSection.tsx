"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaChild,
  FaUserGroup,
  FaGraduationCap,
  FaBuilding,
  FaUser,
  FaBookOpen,
  FaBell,
} from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      title: "Emotion Journaling",
      desc: "Children log their feelings with simple visuals or words. Caregivers add notes for context.",
      icon: <FaChild className="text-2xl text-[#f4b75a]" />,
      color: "bg-[#f4b75a]/20",
      accent: "text-[#f4b75a]",
    },
    {
      title: "SOS Alerts",
      desc: "Alert your care network when you need urgent help. Support is always just a tap away.",
      icon: <FaBell className="text-2xl text-[#f8845b]" />,
      color: "bg-[#f8845b]/20",
      accent: "text-[#f8845b]",
    },
    {
      title: "Predictive AI Alerts",
      desc: "Detect patterns in mood, sleep, or behaviour changes. Intervene early, prevent escalation.",
      icon: <FaGraduationCap className="text-2xl text-[#9f6b99]" />,
      color: "bg-[#9f6b99]/20",
      accent: "text-[#9f6b99]",
    },
    {
      title: "Caregiver Tools",
      desc: "Shift logging, task management, secure documentation — all streamlined in one place.",
      icon: <FaBookOpen className="text-2xl text-[#c5d4c1]" />,
      color: "bg-[#c5d4c1]/20",
      accent: "text-[#c5d4c1]",
    },
    {
      title: "Therapist & Social Worker Access",
      desc: "Permissioned access lets external professionals view only what they need.",
      icon: <FaUser className="text-2xl text-[#f4b75a]" />,
      color: "bg-[#f4b75a]/20",
      accent: "text-[#f4b75a]",
    },
    {
      title: "Community",
      desc: "Connect with other parents, share experiences, ask questions, and get support.",
      icon: <FaUserGroup className="text-2xl text-[#9f6b99]" />,
      color: "bg-[#9f6b99]/20",
      accent: "text-[#9f6b99]",
    },
    {
      title: "Marketplace",
      desc: "Buy, sell, or swap trusted care items and therapy tools with other parents.",
      icon: <FaShoppingBag className="text-2xl text-[#c5d4c1]" />,
      color: "bg-[#c5d4c1]/20",
      accent: "text-[#c5d4c1]",
    },
    {
      title: "Near Me Recommendations",
      desc: "Activity suggestions, events, and sensory-friendly spaces based on location.",
      icon: <FaBuilding className="text-2xl text-[#f8845b]" />,
      color: "bg-[#f8845b]/20",
      accent: "text-[#f8845b]",
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
            Core Features
          </h2>
          <p className="text-[#2a2d34]/60 text-lg">
            Everything you need to provide exceptional care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#f4b75a]/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-gray-200`}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#2a2d34] mb-3 group-hover:text-[#f4b75a] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[#2a2d34]/80 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-[#2a2d34]/60">
                    <span className="mr-2">Learn more</span>
                    <span
                      className={`${feature.accent} group-hover:translate-x-1 transition-transform`}
                    >
                      →
                    </span>
                  </div>
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
