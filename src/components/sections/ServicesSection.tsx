"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FaChild,
  FaHouse,
  FaClock,
  FaMoon,
  FaUsers,
  FaGraduationCap,
  FaHeart,
  FaShieldCat,
} from "react-icons/fa6";

const ServicesSection = () => {
  const services = [
    {
      title: "Residential Care",
      desc: "24/7 support in children's homes with qualified carers providing trauma-informed care and emotional support.",
      icon: <FaHouse className="text-3xl" />,
      color: "bg-[#f4b75a]/20",
      accent: "text-[#f4b75a]",
      borderColor: "border-[#f4b75a]/30",
    },
    {
      title: "Foster Care Support",
      desc: "Comprehensive tools and resources for foster carers to provide stable, nurturing environments for children.",
      icon: <FaHeart className="text-3xl" />,
      color: "bg-[#f8845b]/20",
      accent: "text-[#f8845b]",
      borderColor: "border-[#f8845b]/30",
    },
    {
      title: "Hourly Care",
      desc: "Flexible hourly support for children with special needs, behavioral challenges, or developmental delays.",
      icon: <FaClock className="text-3xl" />,
      color: "bg-[#9f6b99]/20",
      accent: "text-[#9f6b99]",
      borderColor: "border-[#9f6b99]/30",
    },
    {
      title: "Overnight Care",
      desc: "Specialized overnight support for children who need consistent care during sleep hours.",
      icon: <FaMoon className="text-3xl" />,
      color: "bg-[#c5d4c1]/20",
      accent: "text-[#c5d4c1]",
      borderColor: "border-[#c5d4c1]/30",
    },
    {
      title: "Respite Care",
      desc: "Short-term relief for primary caregivers, ensuring children receive quality care while carers take breaks.",
      icon: <FaUsers className="text-3xl" />,
      color: "bg-[#f4b75a]/20",
      accent: "text-[#f4b75a]",
      borderColor: "border-[#f4b75a]/30",
    },
    {
      title: "Educational Support",
      desc: "Specialized care for children with learning difficulties, autism, or developmental challenges.",
      icon: <FaGraduationCap className="text-3xl" />,
      color: "bg-[#f8845b]/20",
      accent: "text-[#f8845b]",
      borderColor: "border-[#f8845b]/30",
    },
  ];

  const careTypes = [
    {
      title: "Trauma-Informed Care",
      desc: "Specialized support for children who have experienced trauma, abuse, or neglect.",
      icon: <FaShieldCat className="text-2xl" />,
      color: "bg-[#9f6b99]/20",
      accent: "text-[#9f6b99]",
    },
    {
      title: "Autism Support",
      desc: "Personalized care for children with autism spectrum disorders, focusing on routine and sensory needs.",
      icon: <FaChild className="text-2xl" />,
      color: "bg-[#c5d4c1]/20",
      accent: "text-[#c5d4c1]",
    },
    {
      title: "Behavioral Support",
      desc: "Expert care for children with challenging behaviors, ADHD, or emotional regulation difficulties.",
      icon: <FaHeart className="text-2xl" />,
      color: "bg-[#f4b75a]/20",
      accent: "text-[#f4b75a]",
    },
    {
      title: "Developmental Care",
      desc: "Support for children with developmental delays, learning disabilities, or physical challenges.",
      icon: <FaGraduationCap className="text-2xl" />,
      color: "bg-[#f8845b]/20",
      accent: "text-[#f8845b]",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#2a2d34] mb-6">
            Children&apos;s Care Services
          </h2>
          <p className="text-[#2a2d34]/60 text-lg max-w-3xl mx-auto">
            Comprehensive care solutions designed specifically for children&apos;s
            homes, foster carers, and families with children who need
            specialized support.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#f4b75a]/20 transition-all duration-300 h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div
                    className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${service.borderColor}`}
                  >
                    <span className={service.accent}>{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#2a2d34] mb-3 group-hover:text-[#f4b75a] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#2a2d34]/80 text-sm leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`border-current ${service.accent} hover:bg-current hover:text-white transition-colors`}
                    >
                      Learn more
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Care Types Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-[#2a2d34] mb-6">
            Types of Care We Support
          </h3>
          <p className="text-[#2a2d34]/60 text-lg">
            Specialized care for children with diverse needs and challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 ${type.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}
                  >
                    <span className={type.accent}>{type.icon}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-[#2a2d34] mb-2">
                    {type.title}
                  </h4>
                  <p className="text-[#2a2d34]/80 text-sm leading-relaxed">
                    {type.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#2a2d34] mb-4">
              Need Help Finding the Right Care?
            </h3>
            <p className="text-[#2a2d34]/80 mb-6 max-w-2xl mx-auto">
              Our team of care specialists can help you find the perfect match
              for your child&apos;s needs. Get personalized recommendations and
              support throughout your care journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#f8845b] text-white hover:bg-[#f8845b]/90"
              >
                Talk to our care team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#2a2d34] text-[#2a2d34] hover:bg-[#2a2d34] hover:text-white"
              >
                Find carers near you
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
