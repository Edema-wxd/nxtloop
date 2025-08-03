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
      color: "bg-accent",
    },
    {
      quote:
        "It gave my foster child a voice — even when he couldn't speak it out loud.",
      author: "Foster Carer, Manchester",
      initial: "F",
      color: "bg-accent",
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
          <h2 className="text-4xl font-bold text-black mb-6">Testimonials</h2>
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
              <Card className="bg-white/80 border border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={`w-fit h-fit ${testimonial.color} rounded-full flex items-center justify-center`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-black text-2xl p-2
                        font-bold">
                        {testimonial.initial}
                      </span>
                    </motion.div>
                    <div>
                      <p className="text-gray-700 mb-4 italic">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <p className="font-semibold text-black">
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
