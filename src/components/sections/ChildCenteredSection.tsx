"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

const ChildCenteredSection = () => {
  const features = [
    "Trauma-informed care tools",
    "Personalised routines and timelines",
    "Children take part in their own care through planners, reward charts & event scheduling",
    "Visual progress that helps everyone grow  together",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#2a2d34]">
              Designed Around the Child
            </h2>
            <p className="text-xl text-[#2a2d34]/80 italic">
              &ldquo;Nestloop doesn&apos;t just log data it listens to
              it.&rdquo;
            </p>
            <ul className="space-y-4">
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start w-full max-w-xs sm:max-w-none">
                    <div className="w-6 h-6 bg-[#c5d4c1] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-[#2a2d34] text-sm font-bold">
                        <FaCheck />
                      </span>
                    </div>
                    <span className="text-[#2a2d34]/80 ml-3">{item}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/profile.png"
              alt="Child Centered"
              width={402}
              height={714}
              className="object-contain rounded-3xl w-full h-auto max-h-[714px] aspect-[402/714]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChildCenteredSection;
