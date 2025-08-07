"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FaShieldCat,
  FaUserCheck,
  FaCertificate,
  FaEye,
  FaLock,
  FaUsers,
  FaHeart,
  FaGraduationCap,
} from "react-icons/fa6";

const TrustSafetySection = () => {
  const verificationSteps = [
    {
      title: "Enhanced DBS Checks",
      desc: "All carers undergo comprehensive Disclosure and Barring Service checks with enhanced clearance for working with children.",
      icon: <FaShieldCat className="text-2xl" />,
      color: "bg-[#f4b75a]/20",
      accent: "text-[#f4b75a]",
    },
    {
      title: "Professional Qualifications",
      desc: "Verified qualifications in childcare, social work, or specialized training in trauma-informed care and behavioral support.",
      icon: <FaCertificate className="text-2xl" />,
      color: "bg-[#f8845b]/20",
      accent: "text-[#f8845b]",
    },
    {
      title: "Thorough References",
      desc: "Multiple professional and personal references, including previous employers and families they've worked with.",
      icon: <FaUserCheck className="text-2xl" />,
      color: "bg-[#9f6b99]/20",
      accent: "text-[#9f6b99]",
    },
    {
      title: "In-Depth Interviews",
      desc: "Comprehensive interviews assessing experience, approach to care, and understanding of children's needs.",
      icon: <FaEye className="text-2xl" />,
      color: "bg-[#c5d4c1]/20",
      accent: "text-[#c5d4c1]",
    },
  ];

  const safetyFeatures = [
    {
      title: "Secure Platform",
      desc: "End-to-end encryption and secure data handling to protect sensitive information about children and families.",
      icon: <FaLock className="text-2xl" />,
      color: "bg-[#f4b75a]/20",
      accent: "text-[#f4b75a]",
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock support team available to help with any concerns or emergencies.",
      icon: <FaUsers className="text-2xl" />,
      color: "bg-[#f8845b]/20",
      accent: "text-[#f8845b]",
    },
    {
      title: "Trauma-Informed Training",
      desc: "All carers receive specialized training in trauma-informed care and child development.",
      icon: <FaHeart className="text-2xl" />,
      color: "bg-[#9f6b99]/20",
      accent: "text-[#9f6b99]",
    },
    {
      title: "Ongoing Monitoring",
      desc: "Regular check-ins and performance monitoring to ensure quality care standards are maintained.",
      icon: <FaGraduationCap className="text-2xl" />,
      color: "bg-[#c5d4c1]/20",
      accent: "text-[#c5d4c1]",
    },
  ];

  const certifications = [
    {
      name: "Ofsted Registered",
      desc: "Registered with the Office for Standards in Education, Children's Services and Skills",
      logo: "Ofsted",
    },
    {
      name: "CQC Compliant",
      desc: "Meeting Care Quality Commission standards for children's services",
      logo: "CQC",
    },
    {
      name: "GDPR Compliant",
      desc: "Full compliance with data protection regulations for children's data",
      logo: "GDPR",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#2a2d34] mb-6">
            Your Safety. Our #1 Priority
          </h2>
          <p className="text-[#2a2d34]/60 text-lg max-w-3xl mx-auto">
            We conduct the most comprehensive verification process for
            children&apos;s care in the UK. Every carer undergoes rigorous checks to
            ensure your child&apos;s safety and well-being.
          </p>
        </motion.div>

        {/* Verification Process */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#2a2d34] mb-8 text-center">
            Our Verification Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verificationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div
                      className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}
                    >
                      <span className={step.accent}>{step.icon}</span>
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

        {/* Safety Features */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#2a2d34] mb-8 text-center">
            Platform Safety Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div
                      className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}
                    >
                      <span className={feature.accent}>{feature.icon}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#2a2d34] mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-[#2a2d34]/80 text-sm leading-relaxed flex-grow">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#2a2d34] mb-8 text-center">
            Regulatory Compliance
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-[#2a2d34]">
                        {cert.logo}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#2a2d34] mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-[#2a2d34]/80 text-sm leading-relaxed">
                      {cert.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#f4b75a]/10 to-[#f8845b]/10 rounded-2xl p-8 border border-[#f4b75a]/20">
            <h3 className="text-2xl font-bold text-[#2a2d34] mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-[#2a2d34]/80 mb-6 max-w-2xl mx-auto">
              Join thousands of families who trust Nestloop for their children&apos;s
              care needs. Our comprehensive safety measures ensure peace of mind
              for every family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#f8845b] text-white hover:bg-[#f8845b]/90"
              >
                Get started today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#2a2d34] text-[#2a2d34] hover:bg-[#2a2d34] hover:text-white"
              >
                Learn more about safety
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSafetySection;
