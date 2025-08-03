"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Create Your LoopCare Profile",
      desc: "Sign up and set up your profile to reflect your child's needs, preferred communication, and care routines.",
      icon: "",
      color: "bg-accent",
    },
    {
      title: "Build Your Care Support Network",
      desc: "Add family, friends, caregivers, and therapists to your private loop so everyone stays aligned and informed.",
      icon: "",
      color: "bg-accent-2",
    },
    {
      title: "Organize with Your Loop TaskBoard",
      desc: "Plan and delegate daily tasks, routines, and appointments — all in one shared space.",
      icon: "",
      color: "bg-accent-3",
    },
    {
      title: "Join the Community",
      desc: "Ask questions, share wins, and connect with other parents navigating similar journeys.",
      icon: "",
      color: "bg-accent-4",
    },
    {
      title: "Explore the Marketplace",
      desc: "Buy, sell, or swap care essentials, therapy tools, and educational resources.",
      icon: "",
      color: "bg-accent",
    },
    {
      title: "Use SOS When You Need Help",
      desc: "Instantly alert your network in moments of stress, emergencies, or burnout.",
      icon: "",
      color: "bg-accent-3",
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
          <h2 className="text-4xl font-bold text-black mb-6">How It Works</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-black">{step.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
