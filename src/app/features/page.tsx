"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  FaUsers,
  FaClipboardList,
  FaExclamationTriangle,
  FaShoppingCart,
  FaSearch,
  FaCheckCircle,
  FaShieldAlt,
  FaHeart,
} from "react-icons/fa";

const ServicesPage = () => {
  const services = [
    {
      title: "LoopCare Profile & Support Network",
      description:
        "Managing your child's care is complex when information is scattered across notes, chats, and multiple people. LoopCare creates a central profile where everything about your child's needs lives in one secure place. You can invite family, friends, and professionals to join your care circle so everyone stays informed, aligned, and ready to support.",
      features: [
        "Create a detailed care profile with key information and progress updates",
        "Invite trusted people such as relatives, therapists, or teachers into the circle",
        "Share updates, documents, and milestones in one place",
        "Control access permissions so the right people see the right details",
      ],
      icon: <FaUsers className="text-3xl text-[#f4b75a]" />,
      color: "bg-[#f4b75a]/20",
      accent: "text-[#f4b75a]",
      image: "/images/profile.png",
      benefits: [
        "Centralized Information",
        "Secure Sharing",
        "Access Control",
        "Real-time Updates",
      ],
    },
    {
      title: "Loop TaskBoard",
      description:
        "Daily care involves numerous tasks, from medication schedules to therapy sessions and school routines. The TaskBoard helps you organise all responsibilities in one simple dashboard. Everyone knows what needs to be done, who is responsible, and when it should happen. This reduces stress and ensures no detail is overlooked.",
      features: [
        "Add and organise daily care tasks",
        "Assign responsibilities to family members or caregivers",
        "Set reminders and alerts for important actions",
        "Track completion and progress across the care circle",
      ],
      icon: <FaClipboardList className="text-3xl text-[#f8845b]" />,
      color: "bg-[#f8845b]/20",
      accent: "text-[#f8845b]",
      image: "/images/task.png",
      benefits: [
        "Task Organization",
        "Responsibility Assignment",
        "Progress Tracking",
        "Reminder System",
      ],
    },
    {
      title: "Community & SOS",
      description:
        "Families raising children with special needs often feel isolated, especially when challenges arise suddenly. NestLoop's community connects you with other parents and caregivers who understand your journey. The SOS feature gives you a way to request urgent help when you need immediate support.",
      features: [
        "Join conversations and share your experiences with other families",
        "Ask questions and learn from people facing similar challenges",
        "Trigger SOS Mode to send urgent alerts to your care circle",
        "Receive quick, reliable support in moments of need",
      ],
      icon: <FaExclamationTriangle className="text-3xl text-[#9f6b99]" />,
      color: "bg-[#9f6b99]/20",
      accent: "text-[#9f6b99]",
      image: "/images/sos.png",
      benefits: [
        "Community Support",
        "Emergency Alerts",
        "Peer Learning",
        "24/7 Help",
      ],
    },
    {
      title: "Peer-to-Peer Marketplace",
      description:
        "Specialised equipment and services are often expensive and hard to find. The Marketplace makes it easier by creating a trusted space where families can buy, sell, or exchange products and services tailored to children with special needs. It's a community-driven way to save money, reduce waste, and access the right resources faster.",
      features: [
        "Browse adaptive equipment, therapy tools, and caregiving services",
        "List your own items or skills to help other families",
        "Complete transactions securely within a trusted environment",
        "Leave reviews and ratings to build community trust",
      ],
      icon: <FaShoppingCart className="text-3xl text-[#c5d4c1]" />,
      color: "bg-[#c5d4c1]/20",
      accent: "text-[#c5d4c1]",
      image: "/images/listing.png",
      benefits: [
        "Cost Savings",
        "Trusted Environment",
        "Community Reviews",
        "Secure Transactions",
      ],
    },
    {
      title: "Care Directory",
      description:
        "Finding reliable professionals is one of the biggest challenges for families. The Care Directory gives you access to verified therapists, doctors, tutors, and activity providers recommended by other parents. With reviews and ratings included, you can make confident choices about who supports your child.",
      features: [
        "Search a directory of verified professionals",
        "Filter by location, specialty, or availability",
        "Read reviews and ratings from other families",
        "Add your own feedback to guide the community",
      ],
      icon: <FaSearch className="text-3xl text-[#f4b75a]" />,
      color: "bg-[#f4b75a]/20",
      accent: "text-[#f4b75a]",
      image: "/images/details.png",
      benefits: [
        "Verified Professionals",
        "Detailed Reviews",
        "Easy Filtering",
        "Community Recommendations",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50/30">
      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2a2d34] mb-6 lg:mb-8">
              Our Services
            </h1>
            <p className="text-[#2a2d34]/60 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive care solutions designed to support families and
              caregivers in providing the best possible care for children with
              special needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center border border-gray-200`}
                    >
                      {service.icon}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#2a2d34]">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-[#2a2d34]/80 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-[#2a2d34] mb-4">
                      Key Features:
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <FaCheckCircle className="text-[#f4b75a] mt-1 flex-shrink-0" />
                          <span className="text-[#2a2d34]/80 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="pt-6">
                    <h4 className="text-lg font-semibold text-[#2a2d34] mb-4">
                      Benefits:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${service.color} ${service.accent} border border-gray-200`}
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 w-full mx-auto max-w-md rounded-lg overflow-hidden items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={402}
                    height={715}
                    unoptimized={true}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    priority={index === 0}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-[#f4b75a]/10 to-[#f8845b]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2a2d34] mb-6">
              Ready to Transform Your Care Experience?
            </h2>
            <p className="text-[#2a2d34]/60 text-lg lg:text-xl max-w-2xl mx-auto mb-8">
              Join thousands of families who are already using NestLoop to
              provide better care and build stronger support networks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-white bg-[#f4b75a] hover:bg-[#f4b75a]/90 px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-200">
                Get Started Today
              </button>
              <button className="btn-secondary border-2 border-[#2a2d34] text-[#2a2d34] hover:bg-[#2a2d34] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-[#2a2d34] mb-12">
              Why Families Trust NestLoop
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-[#f4b75a]/20 rounded-2xl flex items-center justify-center">
                  <FaShieldAlt className="text-3xl text-[#f4b75a]" />
                </div>
                <h4 className="text-xl font-semibold text-[#2a2d34]">
                  Secure & Private
                </h4>
                <p className="text-[#2a2d34]/60 text-center">
                  Your family&apos;s information is protected with
                  enterprise-grade security
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-[#f8845b]/20 rounded-2xl flex items-center justify-center">
                  <FaHeart className="text-3xl text-[#f8845b]" />
                </div>
                <h4 className="text-xl font-semibold text-[#2a2d34]">
                  Family-Focused
                </h4>
                <p className="text-[#2a2d34]/60 text-center">
                  Designed by families, for families, with real-world needs in
                  mind
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-[#9f6b99]/20 rounded-2xl flex items-center justify-center">
                  <FaUsers className="text-3xl text-[#9f6b99]" />
                </div>
                <h4 className="text-xl font-semibold text-[#2a2d34]">
                  Community-Driven
                </h4>
                <p className="text-[#2a2d34]/60 text-center">
                  Built on the collective wisdom and support of thousands of
                  families
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
