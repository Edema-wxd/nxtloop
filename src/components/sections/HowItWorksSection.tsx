"use client";

import { motion } from "framer-motion";
import { FaUser, FaUsers, FaComments, FaBell } from "react-icons/fa6";
import { FaShoppingBag, FaTasks } from "react-icons/fa";

const brandColors = [
  "#f4b75a", // gold
  "#c5d4c1", // greenish
  "#9f6b99", // purple
  "#f8845b", // orange
  "#f4b75a", // gold (repeat for more steps)
  "#9f6b99", // purple
];

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Create Your LoopCare Profile",
      desc: "Sign up and set up your profile to reflect your child's needs, preferred communication, and care routines.",
      icon: <FaUser />,
      color: brandColors[0],
    },
    {
      title: "Build Your Care Support Network",
      desc: "Add family, friends, caregivers, and therapists to your private loop so everyone stays aligned and informed.",
      icon: <FaUsers />,
      color: brandColors[1],
    },
    {
      title: "Organize with Your Loop TaskBoard",
      desc: "Plan and delegate daily tasks, routines, and appointments all in one shared space.",
      icon: <FaTasks />,
      color: brandColors[2],
    },
    {
      title: "Join the Community",
      desc: "Ask questions, share wins, and connect with other parents navigating similar journeys.",
      icon: <FaComments />,
      color: brandColors[3],
    },
    {
      title: "Explore the Marketplace",
      desc: "Buy, sell, or swap care essentials, therapy tools, and educational resources.",
      icon: <FaShoppingBag />,
      color: brandColors[4],
    },
    {
      title: "Use SOS When You Need Help",
      desc: "Instantly alert your network in moments of stress, emergencies, or burnout.",
      icon: <FaBell />,
      color: brandColors[5],
    },
  ];

  return (
    <section id="how-it-works" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#2a2d34] mb-6">
            How It Works
          </h2>
        </motion.div>

        {/* Desktop horizontal curve */}
        <div className="relative w-full flex flex-col items-center">
          <div
            className="hidden md:block w-full relative"
            style={{ height: 220 }}
          >
            <svg
              width="100%"
              height="200"
              viewBox="0 0 1000 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-0"
              preserveAspectRatio="none"
            >
              <motion.path
                d={`
                  M 0 100
                  Q 100 0, 200 100
                  Q 300 200, 400 100
                  Q 500 0, 600 100
                  Q 700 200, 800 100
                  Q 900 0, 1000 100
                `}
                stroke="#f4b75a"
                strokeWidth="5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 2px 8px #f4b75a33)" }}
              />
            </svg>
            {/* Step markers */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center pointer-events-none">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center"
                  style={{
                    left: `calc(${(idx / (steps.length - 1)) * 100}% - 40px)`,
                    position: "absolute",
                    top: idx % 2 === 0 ? 40 : 120,
                  }}
                >
                  <motion.div
                    className="bg-white shadow-lg rounded-full border-4"
                    style={{
                      borderColor: step.color,
                      color: step.color,
                      width: 64,
                      height: 64,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 28,
                    }}
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {step.icon}
                  </motion.div>
                  <span
                    className="text-6xl font-extrabold absolute -z-10 top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none"
                    style={{ opacity: 0.13, color: step.color }}
                  >
                    {idx + 1}
                  </span>
                  <div className="w-44 text-center mt-8">
                    <h3 className="text-lg font-bold text-[#2a2d34] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[#2a2d34]/80 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden w-full max-w-lg mx-auto">
            {/* Vertical timeline line */}
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f4b75a] to-[#9f6b99] -translate-x-1/2" />

              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  className="relative flex flex-col items-center mb-12 last:mb-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Step icon on timeline */}
                  <div className="relative z-10 mb-6">
                    <div
                      className="w-16 h-16 rounded-full border-4 bg-white shadow-lg flex items-center justify-center"
                      style={{
                        borderColor: step.color,
                        color: step.color,
                        fontSize: 24,
                      }}
                    >
                      {step.icon}
                    </div>
                    {/* Step number badge */}
                    <span
                      className="absolute -top-2 -right-2 bg-white text-xs font-bold rounded-full border-2 px-2 py-1"
                      style={{
                        borderColor: step.color,
                        color: step.color,
                      }}
                    >
                      {idx + 1}
                    </span>
                  </div>

                  {/* Step content card */}
                  <div
                    className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm border-l-4"
                    style={{
                      borderLeftColor: step.color,
                    }}
                  >
                    <h3 className="text-lg font-bold text-[#2a2d34] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#2a2d34]/80 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default HowItWorksSection;
