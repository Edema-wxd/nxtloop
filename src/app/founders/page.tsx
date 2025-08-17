"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

const FoundersPage = () => {
  const founders = [
    {
      name: "Iseoluwa Akinyosoye",
      image: "/images/founders/iseoluwa-akinyosoye.jpg",
      role: "CEO & Founder",
      bio: "Seasoned solicitor with dual LLM degrees and over six years of legal, regulatory, and strategic experience across top-tier institutions. At NestLoop, she leads legal, strategic, and external functions with deep empathy as a parent to a child with complex needs.",
      expertise: [
        "Corporate & Technology Law",
        "Regulatory Compliance",
        "Strategic Advisory",
        "Investor Relations",
      ],
      linkedin: "https://linkedin.com/in/iseoluwa-akinyosoye",
      twitter: "https://twitter.com/iseoluwaakinyosoye",
      email: "iseoluwa@nestloop.com",
      funFact:
        "Licensed solicitor in Nigeria and progressing through the UK Solicitors Regulation Authority process.",
      quote:
        "Families deserve systems that are not just legally sound but also compassionate and accessible.",
    },

    {
      name: "Tomilola Ayeni",
      image: "/images/founders/tomilola-ayeni.jpg",
      role: "COO & Co-Founder",
      bio: "Operational leader with a unique blend of law, cybersecurity, and care sector experience. She ensures NestLoop’s mission is matched by operational excellence and robust safeguarding systems.",
      expertise: [
        "Operations & Risk Management",
        "Safeguarding & Compliance",
        "Cybersecurity",
        "Care Home Management",
      ],
      linkedin: "https://linkedin.com/in/tomilola-ayeni",
      twitter: "https://twitter.com/tomilolaayeni",
      email: "tomilola@nestloop.com",
      funFact:
        "Once managed care homes while completing her MBA in Operations and Entrepreneurship.",
      quote:
        "Building trust starts with protecting the most vulnerable through both care and compliance.",
    },

    {
      name: "Omotooke Afolabi",
      image: "/images/founders/omotooke-afolabi.jpg",
      role: "CTO",
      bio: "Experienced product and technology leader with a track record of delivering scalable, human-centered platforms across health, education, and financial services. At NestLoop, she drives the platform’s vision, architecture, and continuous improvement.",
      expertise: [
        "Product Management",
        "Platform Architecture",
        "User Experience Design",
        "Scalable MVP Development",
      ],
      linkedin: "https://linkedin.com/in/omotooke-afolabi",
      twitter: "https://twitter.com/omotookeafolabi",
      email: "omotooke@nestloop.com",
      funFact:
        "Has built platforms at both early-stage startups and large social impact ventures.",
      quote:
        "Technology should feel like a helping hand, powerful but invisible, always serving the family’s needs first.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Children Supported", icon: FaHeart },
    { number: "1K+", label: "Care Providers", icon: FaUsers },
    { number: "95%", label: "Satisfaction Rate", icon: FaStar },
    { number: "24/7", label: "Support Available", icon: FaRocket },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm lg:text-base font-medium shadow-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaLightbulb className="w-4 h-4 lg:w-5 lg:h-5" />
              Meet the Visionaries
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2a2d34] mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f8845b] to-[#9f6b99]">
                passionate minds
              </span>{" "}
              behind Nestloop
            </motion.h1>

            <motion.p
              className="text-xl text-[#2a2d34]/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our founders bring together decades of experience in child
              welfare, technology, and clinical psychology to create a platform
              that truly understands the needs of caregivers and children.
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f8845b]/20 to-[#9f6b99]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-[#f8845b]" />
                  </div>
                  <div className="text-3xl font-bold text-[#2a2d34] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[#2a2d34]/70">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid gap-12 lg:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Founder Image */}
                <motion.div
                  className="relative w-full lg:w-1/2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-[#f8845b]/20 to-[#9f6b99]/20 rounded-3xl overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-gradient-to-br from-[#f8845b] to-[#9f6b99] rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl font-bold text-white">
                              {founder.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <p className="text-gray-600">Photo coming soon</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#f4b75a] to-[#c5d4c1] rounded-full flex items-center justify-center shadow-lg">
                      <FaQuoteLeft className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Founder Info */}
                <motion.div
                  className="w-full lg:w-1/2 space-y-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <motion.div
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f8845b]/20 to-[#9f6b99]/20 text-[#f8845b] px-4 py-2 rounded-full text-sm font-medium mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <FaRocket className="w-4 h-4" />
                      {founder.role}
                    </motion.div>

                    <motion.h2
                      className="text-3xl lg:text-4xl font-bold text-[#2a2d34] mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {founder.name}
                    </motion.h2>

                    <motion.p
                      className="text-lg text-[#2a2d34]/80 leading-relaxed mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {founder.bio}
                    </motion.p>
                  </div>

                  {/* Expertise Tags */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {founder.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-white border border-gray-200 text-[#2a2d34] px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </motion.div>

                  {/* Fun Fact */}
                  <motion.div
                    className="bg-gradient-to-r from-[#f4b75a]/10 to-[#c5d4c1]/10 border border-[#f4b75a]/20 rounded-2xl p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#f4b75a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FaHeart className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#2a2d34] mb-1">
                          Fun Fact
                        </p>
                        <p className="text-sm text-[#2a2d34]/80">
                          {founder.funFact}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Quote */}
                  <motion.blockquote
                    className="border-l-4 border-[#9f6b99] pl-6 italic text-lg text-[#2a2d34]/90"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    &quot;{founder.quote}&quot;
                  </motion.blockquote>

                  {/* Social Links */}
                  <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#f8845b] text-[#f8845b] hover:bg-[#f8845b] hover:text-white transition-colors"
                      onClick={() => window.open(founder.linkedin, "_blank")}
                    >
                      <FaLinkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#9f6b99] text-[#9f6b99] hover:bg-[#9f6b99] hover:text-white transition-colors"
                      onClick={() => window.open(founder.twitter, "_blank")}
                    >
                      <FaTwitter className="w-4 h-4 mr-2" />
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#f4b75a] text-[#f4b75a] hover:bg-[#f4b75a] hover:text-white transition-colors"
                      onClick={() =>
                        window.open(`mailto:${founder.email}`, "_blank")
                      }
                    >
                      <FaEnvelope className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#f8845b]/10 to-[#9f6b99]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2a2d34] mb-6">
              Ready to transform care together?
            </h2>
            <p className="text-xl text-[#2a2d34]/80 mb-8 max-w-2xl mx-auto">
              Join thousands of caregivers who are already using Nestloop to
              provide better care for children in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#f8845b] to-[#f8845b]/90 text-white hover:from-[#f8845b]/90 hover:to-[#f8845b] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-lg px-8 py-6"
              >
                Start Your Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#2a2d34] text-[#2a2d34] hover:bg-[#2a2d34] hover:text-white text-lg px-8 py-6 transition-all duration-200 hover:shadow-lg"
              >
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FoundersPage;
