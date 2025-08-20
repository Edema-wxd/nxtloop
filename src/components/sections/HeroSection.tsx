"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaPlay, FaArrowRight, FaStar } from "react-icons/fa";

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
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                  className="bg-gradient-to-r from-[#f8845b] to-[#f8845b]/90 text-white hover:from-[#f8845b]/90 hover:to-[#f8845b] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-lg lg:text-xl px-8 py-6 lg:px-12 lg:py-8"
                >
                  <FaPlay className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
                  Book a Demo
                </Button>
                <Button
                  size="lg"
                  onClick={() => {
                    window.location.href = "/features";
                  }}
                  variant="outline"
                  className="border-2 border-[#2a2d34] text-[#2a2d34] hover:bg-[#2a2d34] hover:text-white w-full sm:w-auto text-lg lg:text-xl px-8 py-6 lg:px-12 lg:py-8 transition-all duration-200 hover:shadow-lg"
                >
                  Explore Features
                  <FaArrowRight className="w-5 h-5 lg:w-6 lg:h-6 ml-2 lg:ml-3" />
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
