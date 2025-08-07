"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="space-y-6 sm:space-y-8 hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2a2d34] leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Here&apos;s who my child is today. Help us grow together.
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-[#2a2d34]/80 leading-relaxed"
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
                className="bg-[#f8845b] text-white hover:bg-[#f8845b]/90 w-full sm:w-auto"
              >
                Join the waitlist
              </Button>
              <Button
                size="lg"
                onClick={() => {
                  window.location.href = "#features";
                }}
                variant="outline"
                className="border-[#2a2d34] text-[#2a2d34] hover:bg-[#2a2d34] hover:text-white w-full sm:w-auto"
              >
                Explore Features
              </Button>
            </motion.div>

            {/* Mobile-specific features preview */}
            <motion.div
              className="lg:hidden mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f4b75a]/10 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-[#f4b75a]/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-[#f4b75a] text-sm">👥</span>
                  </div>
                  <p className="text-xs text-[#2a2d34]/80">Care Network</p>
                </div>
                <div className="bg-[#f8845b]/10 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-[#f8845b]/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-[#f8845b] text-sm">📱</span>
                  </div>
                  <p className="text-xs text-[#2a2d34]/80">Mobile App</p>
                </div>
                <div className="bg-[#9f6b99]/10 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-[#9f6b99]/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-[#9f6b99] text-sm">🔒</span>
                  </div>
                  <p className="text-xs text-[#2a2d34]/80">Secure</p>
                </div>
                <div className="bg-[#c5d4c1]/10 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-[#c5d4c1]/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-[#c5d4c1] text-sm">💝</span>
                  </div>
                  <p className="text-xs text-[#2a2d34]/80">Trauma-Informed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative hero-visual order-first lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-gray-100 flex items-center justify-center aspect-square max-w-[400px] sm:max-w-[500px] mx-auto"
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

            {/* Floating elements for desktop */}
            <div className="hidden lg:block">
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-[#f4b75a]/20 rounded-full flex items-center justify-center"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-[#f4b75a] text-xl">👥</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#f8845b]/20 rounded-full flex items-center justify-center"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <span className="text-[#f8845b] text-lg">💝</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
