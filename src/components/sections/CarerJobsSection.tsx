"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaUserTie,
  FaHeart,
  FaGraduationCap,
  FaClock,
  FaMapPin,
  FaShieldCat,
  FaUsers,
  FaChild,
  FaStar,
  FaBriefcase,
} from "react-icons/fa6";

const CarerJobsSection = () => {
  const jobBenefits = [
    {
      title: "Flexible Working",
      desc: "Choose your own hours and work patterns that fit your lifestyle.",
      icon: <FaClock className="text-2xl" />,
      color: "bg-[#f4b75a]/20",
      accent: "text-[#f4b75a]",
    },
    {
      title: "Competitive Pay",
      desc: "Earn above-average rates with bonuses for specialized skills and experience.",
      icon: <FaStar className="text-2xl" />,
      color: "bg-[#f8845b]/20",
      accent: "text-[#f8845b]",
    },
    {
      title: "Training & Development",
      desc: "Access to trauma-informed care training and ongoing professional development.",
      icon: <FaGraduationCap className="text-2xl" />,
      color: "bg-[#9f6b99]/20",
      accent: "text-[#9f6b99]",
    },
    {
      title: "Support Network",
      desc: "Connect with other carers and access 24/7 support when you need it.",
      icon: <FaUsers className="text-2xl" />,
      color: "bg-[#c5d4c1]/20",
      accent: "text-[#c5d4c1]",
    },
  ];

  const jobTypes = [
    {
      title: "Residential Care",
      desc: "Full-time positions in children's homes providing 24/7 support.",
      icon: <FaChild className="text-2xl" />,
      color: "bg-[#f4b75a]/20",
      accent: "text-[#f4b75a]",
      hours: "Full-time",
      location: "Various locations",
    },
    {
      title: "Foster Care Support",
      desc: "Support foster families with respite care and specialized assistance.",
      icon: <FaHeart className="text-2xl" />,
      color: "bg-[#f8845b]/20",
      accent: "text-[#f8845b]",
      hours: "Flexible",
      location: "Local communities",
    },
    {
      title: "Specialist Care",
      desc: "Work with children with autism, trauma, or behavioral challenges.",
      icon: <FaShieldCat className="text-2xl" />,
      color: "bg-[#9f6b99]/20",
      accent: "text-[#9f6b99]",
      hours: "Part-time/Full-time",
      location: "UK-wide",
    },
    {
      title: "Overnight Care",
      desc: "Provide specialized overnight support for children who need consistent care.",
      icon: <FaClock className="text-2xl" />,
      color: "bg-[#c5d4c1]/20",
      accent: "text-[#c5d4c1]",
      hours: "Night shifts",
      location: "Various locations",
    },
  ];

  const featuredJobs = [
    {
      title: "Senior Children's Carer",
      location: "Manchester",
      type: "Full-time",
      salary: "£28,000 - £32,000",
      experience: "3+ years",
      description: "Lead carer position in a trauma-informed children's home.",
    },
    {
      title: "Autism Specialist Carer",
      location: "London",
      type: "Part-time",
      salary: "£22 - £26/hour",
      experience: "2+ years",
      description:
        "Specialized care for children with autism spectrum disorders.",
    },
    {
      title: "Foster Care Support Worker",
      location: "Birmingham",
      type: "Flexible",
      salary: "£18 - £22/hour",
      experience: "1+ years",
      description: "Support foster families with respite care and guidance.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-[#f4b75a]/20 rounded-full flex items-center justify-center">
              <FaUserTie className="text-2xl text-[#f4b75a]" />
            </div>
            <h2 className="text-4xl font-bold text-[#2a2d34]">
              Work with Nestloop
            </h2>
          </div>
          <p className="text-[#2a2d34]/60 text-lg max-w-3xl mx-auto">
            Join our network of trusted carers and make a real difference in
            children&apos;s lives. Enjoy flexible working, competitive pay, and
            comprehensive support.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#2a2d34] mb-8 text-center">
            Why Work with Us?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobBenefits.map((benefit, index) => (
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
                      className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}
                    >
                      <span className={benefit.accent}>{benefit.icon}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#2a2d34] mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-[#2a2d34]/80 text-sm leading-relaxed flex-grow">
                      {benefit.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Job Types */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#2a2d34] mb-8 text-center">
            Types of Roles Available
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobTypes.map((job, index) => (
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
                      className={`w-16 h-16 ${job.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <span className={job.accent}>{job.icon}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#2a2d34] mb-3 group-hover:text-[#f4b75a] transition-colors">
                      {job.title}
                    </h4>
                    <p className="text-[#2a2d34]/80 text-sm leading-relaxed flex-grow mb-4">
                      {job.desc}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-xs text-[#2a2d34]/60">
                        <FaClock className="mr-2" />
                        <span>{job.hours}</span>
                      </div>
                      <div className="flex items-center text-xs text-[#2a2d34]/60">
                            <FaMapPin className="mr-2" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Jobs */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#2a2d34] mb-8 text-center">
            Featured Opportunities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-semibold text-[#2a2d34] group-hover:text-[#f4b75a] transition-colors">
                        {job.title}
                      </h4>
                      <div className="w-8 h-8 bg-[#f4b75a]/20 rounded-full flex items-center justify-center">
                        <FaBriefcase className="text-sm text-[#f4b75a]" />
                      </div>
                    </div>
                    <p className="text-[#2a2d34]/80 text-sm leading-relaxed flex-grow mb-4">
                      {job.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-xs text-[#2a2d34]/60">
                        <FaMapPin className="mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-xs text-[#2a2d34]/60">
                        <FaClock className="mr-2" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center text-xs text-[#2a2d34]/60">
                        <FaStar className="mr-2" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center text-xs text-[#2a2d34]/60">
                        <FaGraduationCap className="mr-2" />
                        <span>{job.experience} experience</span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-[#f8845b] text-white hover:bg-[#f8845b]/90 w-full"
                    >
                      Apply now
                    </Button>
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
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#2a2d34] mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-[#2a2d34]/80 mb-6 max-w-2xl mx-auto">
              Join our community of dedicated carers and help provide
              exceptional care to children who need it most. Start your journey
              with Nestloop today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#f8845b] text-white hover:bg-[#f8845b]/90"
              >
                Browse all jobs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#2a2d34] text-[#2a2d34] hover:bg-[#2a2d34] hover:text-white"
              >
                Upload your CV
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarerJobsSection;
