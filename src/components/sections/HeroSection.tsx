"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8 hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-[#2a2d34] leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Here&apos;s who my child is today. Help us grow together.
            </motion.h1>
            <motion.p
              className="text-xl text-[#2a2d34]/80 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering children&apos;s homes, foster carers, and caregivers
              with the tools to provide trauma-informed, insight-driven care.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-[#f8845b] text-white hover:bg-[#f8845b]/90"
              >
                Book a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#2a2d34] text-[#2a2d34] hover:bg-[#2a2d34] hover:text-white"
              >
                Explore Features
              </Button>
              <Button
                size="lg"
                className="bg-[#f4b75a] text-[#2a2d34] hover:bg-[#f4b75a]/90"
              >
                Try Free for 30 Days
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
      
      
            <motion.div
              className="bg-white rounded-2xl p-4 md:p-8 shadow-2xl border border-gray-100 flex items-center justify-center aspect-square max-w-[500px] mx-auto"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full relative">
                <Image
                  src="/images/hero-image.png"
                  alt="Illustration of a happy, neurodiverse child and caregivers"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 500px"
                  className="object-contain"
                  priority
                  loading="eager"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
