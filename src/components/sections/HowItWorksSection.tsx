"use client";

import { motion } from "framer-motion";
import { FaUser, FaUsers, FaComments, FaBell } from "react-icons/fa6";
import { FaShoppingBag, FaTasks } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
      detailedDesc:
        "Start by creating a comprehensive profile that captures your child's unique needs, preferences, and care requirements. Include information about their developmental stage, any special needs, behavioral patterns, and communication preferences. This helps us match you with the right carers and tools.",
      icon: <FaUser />,
      color: brandColors[0],
      subSteps: [
        "Complete your family profile",
        "Add your child's care needs",
        "Set communication preferences",
        "Upload relevant documents",
      ],
    },
    {
      title: "Build Your Care Support Network",
      desc: "Add family, friends, caregivers, and therapists to your private loop so everyone stays aligned and informed.",
      detailedDesc:
        "Connect your entire care team in one secure platform. Invite family members, foster carers, therapists, social workers, and other professionals involved in your child's care. Everyone gets access to the information they need while maintaining privacy and security.",
      icon: <FaUsers />,
      color: brandColors[1],
      subSteps: [
        "Invite family members",
        "Add professional carers",
        "Connect with therapists",
        "Set permission levels",
      ],
    },
    {
      title: "Organize with Your Loop TaskBoard",
      desc: "Plan and delegate daily tasks, routines, and appointments all in one shared space.",
      detailedDesc:
        "Use our intuitive task management system to organize everything from daily routines to medical appointments. Create care plans, set reminders, track progress, and ensure nothing falls through the cracks. All team members can see and update tasks in real-time.",
      icon: <FaTasks />,
      color: brandColors[2],
      subSteps: [
        "Create daily routines",
        "Set medication reminders",
        "Schedule appointments",
        "Track progress",
      ],
    },
    {
      title: "Join the Community",
      desc: "Ask questions, share wins, and connect with other parents navigating similar journeys.",
      detailedDesc:
        "Connect with a supportive community of parents, carers, and professionals who understand your journey. Share experiences, ask questions, and learn from others who have faced similar challenges. Our community is moderated and safe for all families.",
      icon: <FaComments />,
      color: brandColors[3],
      subSteps: [
        "Join discussion groups",
        "Share experiences",
        "Ask for advice",
        "Learn from others",
      ],
    },
    {
      title: "Explore the Marketplace",
      desc: "Buy, sell, or swap care essentials, therapy tools, and educational resources.",
      detailedDesc:
        "Access a curated marketplace of trusted care products, therapy tools, and educational resources. Connect with other families to buy, sell, or swap items your child has outgrown. All items are verified and safe for children.",
      icon: <FaShoppingBag />,
      color: brandColors[4],
      subSteps: [
        "Browse trusted products",
        "Sell unused items",
        "Swap with other families",
        "Find therapy tools",
      ],
    },
    {
      title: "Use SOS When You Need Help",
      desc: "Instantly alert your network in moments of stress, emergencies, or burnout.",
      detailedDesc:
        "When you need immediate support, our SOS feature instantly notifies your care network. Whether it's a behavioral crisis, medical emergency, or you just need a break, help is just a tap away. Your network can respond with advice, support, or physical assistance.",
      icon: <FaBell />,
      color: brandColors[5],
      subSteps: [
        "Send instant alerts",
        "Get immediate support",
        "Connect with carers",
        "Access emergency resources",
      ],
    },
  ];

  const processOverview = [
    {
      title: "Assessment & Matching",
      desc: "We assess your child's needs and match you with qualified carers who have the right experience and skills.",
      icon: "1",
    },
    {
      title: "Care Planning",
      desc: "Together with your carer, we create a personalized care plan that addresses your child's specific needs.",
      icon: "2",
    },
    {
      title: "Ongoing Support",
      desc: "We provide continuous support, monitoring, and adjustments to ensure the best possible care outcomes.",
      icon: "3",
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
            How Nestloop Works
          </h2>
          <p className="text-[#2a2d34]/60 text-lg max-w-3xl mx-auto">
            Our comprehensive platform simplifies children&apos;s care
            management while ensuring every child receives the personalized
            support they need to thrive.
          </p>
        </motion.div>

        {/* Process Overview */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#2a2d34] mb-8 text-center">
            Our Care Process
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {processOverview.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-[#f4b75a]/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-[#f4b75a]">
                        {step.icon}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#2a2d34] mb-3">
                      {step.title}
                    </h4>
                    <p className="text-[#2a2d34]/80 text-sm leading-relaxed flex-grow">
                      {step.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Steps */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#2a2d34] mb-8 text-center">
            Platform Features & Workflow
          </h3>
        </motion.div>

        {/* Desktop horizontal curve */}
        <div className="relative w-full flex flex-col items-center">
          <div
            className="hidden md:block w-full relative"
            style={{ height: 280 }}
          >
            <svg
              width="100%"
              height="260"
              viewBox="0 0 1000 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-0"
              preserveAspectRatio="none"
            >
              <motion.path
                d={`
                  M 0 130
                  Q 100 0, 200 130
                  Q 300 260, 400 130
                  Q 500 0, 600 130
                  Q 700 260, 800 130
                  Q 900 0, 1000 130
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
                    top: idx % 2 === 0 ? 40 : 160,
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
                    <p className="text-[#2a2d34]/80 text-sm leading-relaxed mb-4">
                      {step.desc}
                    </p>
                    <p className="text-[#2a2d34]/70 text-xs leading-relaxed mb-4">
                      {step.detailedDesc}
                    </p>
                    <div className="space-y-2">
                      {step.subSteps.map((subStep, subIdx) => (
                        <div
                          key={subIdx}
                          className="flex items-center text-xs text-[#2a2d34]/60"
                        >
                          <div className="w-1.5 h-1.5 bg-[#f4b75a] rounded-full mr-2"></div>
                          <span>{subStep}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Steps for Desktop */}
        <div className="hidden md:block mt-36">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#f4b75a]/20 transition-all duration-300 h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center space-x-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: `${step.color}20`,
                          color: step.color,
                        }}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#2a2d34]">
                          {step.title}
                        </h4>
                        <p className="text-sm text-[#2a2d34]/60">
                          Step {index + 1}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#2a2d34]/80 text-sm leading-relaxed flex-grow mb-4">
                      {step.detailedDesc}
                    </p>
                    <div className="space-y-2">
                      {step.subSteps.map((subStep, subIdx) => (
                        <div
                          key={subIdx}
                          className="flex items-center text-xs text-[#2a2d34]/60"
                        >
                          <div className="w-1.5 h-1.5 bg-[#f4b75a] rounded-full mr-2"></div>
                          <span>{subStep}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

     
      </div>
    </section>
  );
};

export default HowItWorksSection;
