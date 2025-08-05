"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "We've never felt more in sync as a care team. Nestloop changed everything.",
      author: "Children's Home Manager, Birmingham",
      initial: "C",
      color: "bg-[#f4b75a]",
    },
    {
      quote:
        "It gave my foster child a voice  even when he couldn't speak it out loud.",
      author: "Foster Carer, Manchester",
      initial: "F",
      color: "bg-[#c5d4c1]",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#2a2d34] mb-6">
            Testimonials
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={`w-fit h-fit ${testimonial.color} rounded-full flex items-center justify-center`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-[#2a2d34] text-2xl p-2 font-bold">
                        {testimonial.initial}
                      </span>
                    </motion.div>
                    <div>
                      <p className="text-[#2a2d34]/80 mb-4 italic">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <p className="font-semibold text-[#2a2d34]">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
