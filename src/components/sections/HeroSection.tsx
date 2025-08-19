"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  FaUsers,
  FaClipboardList,
  FaExclamationTriangle,
  FaShoppingCart,
  FaComments,
  FaPlay,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 py-16 sm:py-20   overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 ">
        <div className="flex flex-col gap-12 lg:gap-20 xl:gap-24 items-center">
          <motion.div
            className="
            flex flex-col md:flex-row gap-12 lg:gap-20  justify-center items-start md:items-center
             "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col w-full md:max-w-1/2 gap-12   items-start">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm lg:text-base font-medium shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <FaStar className="w-4 h-4 lg:w-5 lg:h-5" />
                Trusted by 1000+ families
              </motion.div>

              <motion.h1
                className="text-4xl font-bold text-[#2a2d34] leading-tight lg:leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Care, community, and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f8845b] to-[#9f6b99]">
                  trusted support
                </span>{" "}
                for families of children of all abilities and personalities
              </motion.h1>

              <motion.p
                className="text-xl sm:text-2xl    text-[#2a2d34]/80 leading-relaxed max-w-3xl lg:max-w-4xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Empowering children&apos;s homes, foster carers, and caregivers
                with the tools to provide trauma-informed, insight-driven care.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#f8845b] to-[#f8845b]/90 text-white hover:from-[#f8845b]/90 hover:to-[#f8845b] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-lg lg:text-xl px-8 py-6 lg:px-12 lg:py-8"
                >
                  <FaPlay className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
                  Book a Demo
                </Button>
                <Button
                  size="lg"
                  onClick={() => {
                    window.location.href = "#features";
                  }}
                  variant="outline"
                  className="border-2 border-[#2a2d34] text-[#2a2d34] hover:bg-[#2a2d34] hover:text-white w-full sm:w-auto text-lg lg:text-xl px-8 py-6 lg:px-12 lg:py-8 transition-all duration-200 hover:shadow-lg"
                >
                  Explore Features
                  <FaArrowRight className="w-5 h-5 lg:w-6 lg:h-6 ml-2 lg:ml-3" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#9f6b99] text-[#9f6b99] hover:bg-[#9f6b99] hover:text-white w-full sm:w-auto text-lg lg:text-xl px-8 py-6 lg:px-12 lg:py-8 transition-all duration-200 hover:shadow-lg"
                >
                  Sign Up for Early Access
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="relative hero-visual order-first lg:order-last"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Image
                src="/images/hero-image.png"
                alt="A smiling child interacts with a tablet and wearable device, surrounded by supportive adults"
                width={500}
                height={500}
                className="object-contain rounded-3xl"
                priority
                loading="eager"
              />
            </motion.div>
          </motion.div>
          {/* How Nestloop supports you section */}
          <motion.div
            className="mt-12 lg:mt-20 xl:mt-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#2a2d34] mb-8 lg:mb-12">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
