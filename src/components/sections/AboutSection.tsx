"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaHouseChimney,
  FaUserGroup,
  FaGraduationCap,
  FaBuilding,
  FaUser,
  FaUsers,
  FaClipboardList,
  FaComments,
} from "react-icons/fa6";

import { FaExclamationTriangle, FaShoppingCart } from "react-icons/fa";

const AboutSection = () => {
  const userTypes = [
    {
      title: "Children's Homes",
      icon: <FaHouseChimney className="text-2xl text-[#f4b75a]" />, // Add icon color
      color: "bg-[#f4b75a]/20",
    },
    {
      title: "Foster Carers",
      icon: <FaUserGroup className="text-2xl text-[#c5d4c1]" />,
      color: "bg-[#c5d4c1]/20",
    },
    {
      title: "Special Education Settings",
      icon: <FaGraduationCap className="text-2xl text-[#9f6b99]" />,
      color: "bg-[#9f6b99]/20",
    },
    {
      title: "Local Authorities",
      icon: <FaBuilding className="text-2xl text-[#f8845b]" />,
      color: "bg-[#f8845b]/20",
    },
    {
      title: "Parents & Guardians",
      icon: <FaUser className="text-2xl text-[#f4b75a]" />,
      color: "bg-[#f4b75a]/20",
    },
  ];

  return (
    <section className="max-w-7xl  mx-auto px-4 py-20 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl text-center lg:text-3xl xl:text-4xl font-bold text-[#2a2d34] mb-6">
            What is Nestloop?
          </h2>
          <p className="text-xl text-[#2a2d34]/80 max-w-3xl mx-auto">
            Nestloop is a smart, all-in-one care platform built for real-life
            settings. It simplifies daily care, reduces admin, and puts child
            wellbeing at the centre, using emotion journaling, wearable data,
            and smart alerts to support every child&apos;s journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {userTypes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:scale-105 transition-transform bg-white border border-gray-100 shadow-sm hover:shadow-md">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-200`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="font-semibold text-[#2a2d34]">{item.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {/* How Nestloop supports you section */}
      <motion.div
        className="  mx-auto px-4 mt-12 lg:mt-20 xl:mt-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h3 className="text-2xl text-center lg:text-3xl xl:text-4xl font-bold text-[#2a2d34] mb-8 lg:mb-12">
          How Nestloop supports you
        </h3>
        <div className="flex flex-col md:flex-row gap-4 lg:gap-8 xl:gap-10">
          <motion.div
            className="group bg-white rounded-xl lg:rounded-2xl p-4 lg:p-8 xl:p-10 text-center hover:bg-gradient-to-br hover:from-[#f4b75a]/10 hover:to-[#f4b75a]/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 hover:border-[#f4b75a]/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-gradient-to-br from-[#f4b75a] to-[#f4b75a]/80 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-200">
              <FaUsers className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-white" />
            </div>
            <p className="text-sm lg:text-lg xl:text-xl font-semibold text-[#2a2d34] mb-1 lg:mb-2">
              Care Directory
            </p>
            <p className="text-xs lg:text-sm xl:text-base text-[#2a2d34]/70">
              Find trusted carers
            </p>
          </motion.div>

          <motion.div
            className="group bg-white rounded-xl lg:rounded-2xl p-4 lg:p-8 xl:p-10 text-center hover:bg-gradient-to-br hover:from-[#f8845b]/10 hover:to-[#f8845b]/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 hover:border-[#f8845b]/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-gradient-to-br from-[#f8845b] to-[#f8845b]/80 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-200">
              <FaClipboardList className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-white" />
            </div>
            <p className="text-sm lg:text-lg xl:text-xl font-semibold text-[#2a2d34] mb-1 lg:mb-2">
              Taskboard
            </p>
            <p className="text-xs lg:text-sm xl:text-base text-[#2a2d34]/70">
              Assign tasks easily
            </p>
          </motion.div>

          <motion.div
            className="group bg-white rounded-xl lg:rounded-2xl p-4 lg:p-8 xl:p-10 text-center hover:bg-gradient-to-br hover:from-[#9f6b99]/10 hover:to-[#9f6b99]/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 hover:border-[#9f6b99]/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-gradient-to-br from-[#9f6b99] to-[#9f6b99]/80 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-200">
              <FaExclamationTriangle className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-white" />
            </div>
            <p className="text-sm lg:text-lg xl:text-xl font-semibold text-[#2a2d34] mb-1 lg:mb-2">
              SOS
            </p>
            <p className="text-xs lg:text-sm xl:text-base text-[#2a2d34]/70">
              Urgent help & support
            </p>
          </motion.div>

          <motion.div
            className="group bg-white rounded-xl lg:rounded-2xl p-4 lg:p-8 xl:p-10 text-center hover:bg-gradient-to-br hover:from-[#c5d4c1]/10 hover:to-[#c5d4c1]/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 hover:border-[#c5d4c1]/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-gradient-to-br from-[#c5d4c1] to-[#c5d4c1]/80 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-200">
              <FaShoppingCart className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-white" />
            </div>
            <p className="text-sm lg:text-lg xl:text-xl font-semibold text-[#2a2d34] mb-1 lg:mb-2">
              Marketplace
            </p>
            <p className="text-xs lg:text-sm xl:text-base text-[#2a2d34]/70">
              Buy & sell care items
            </p>
          </motion.div>

          <motion.div
            className="group bg-white rounded-xl lg:rounded-2xl p-4 lg:p-8 xl:p-10 text-center hover:bg-gradient-to-br hover:from-[#f4b75a]/10 hover:to-[#f4b75a]/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 hover:border-[#f4b75a]/20 col-span-2 lg:col-span-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-gradient-to-br from-[#f4b75a] to-[#f4b75a]/80 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-200">
              <FaComments className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-white" />
            </div>
            <p className="text-sm lg:text-lg xl:text-xl font-semibold text-[#2a2d34] mb-1 lg:mb-2">
              Community
            </p>
            <p className="text-xs lg:text-sm xl:text-base text-[#2a2d34]/70">
              Connect with parents
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
