"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      title: "Emotion Journaling",
      desc: "Children log their feelings with simple visuals or words. Caregivers add notes for context.",
      icon: "👶",
      color: "bg-pink-200",
    },
    {
      title: "SOS Alerts",
      desc: "Alert your care network when you need urgent help. Support is always just a tap away.",
      icon: "👨‍👧‍👦",
      color: "bg-rose-200",
    },
    {
      title: "Predictive AI Alerts",
      desc: "Detect patterns in mood, sleep, or behaviour changes. Intervene early, prevent escalation.",
      icon: "🎓",
      color: "bg-purple-200",
    },
    {
      title: "Caregiver Tools",
      desc: "Shift logging, task management, secure documentation — all streamlined in one place.",
      icon: "🛠️",
      color: "bg-blue-200",
    },
    {
      title: "Therapist & Social Worker Access",
      desc: "Permissioned access lets external professionals view only what they need.",
      icon: "👨‍⚕️",
      color: "bg-pink-100",
    },
    {
      title: "Community",
      desc: "Connect with other parents, share experiences, ask questions, and get support.",
      icon: "👨‍👩‍👧‍👦",
      color: "bg-purple-100",
    },
    {
      title: "Marketplace",
      desc: "Buy, sell, or swap trusted care items and therapy tools with other parents.",
      icon: "🛍️",
      color: "bg-blue-100",
    },
    {
      title: "Near Me Recommendations",
      desc: "Activity suggestions, events, and sensory-friendly spaces based on location.",
      icon: "📍",
      color: "bg-rose-100",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Core Features
          </h2>
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
              <Card className="group bg-white/80 border border-gray-100">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.desc}</p>
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
