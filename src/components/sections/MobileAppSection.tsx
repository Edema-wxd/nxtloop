"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaMobile,
  FaUsers,
  FaBell,
  FaHeart,
  FaShieldCat,
  FaGraduationCap,
  FaChild,
  FaComments,
} from "react-icons/fa6";

const MobileAppSection = () => {
  const appFeatures = [
    {
      title: "Family Circle",
      desc: "Keep your family connected and informed about your child's care, even when you're away.",
      icon: <FaUsers className="text-2xl" />,
      color: "bg-[#f4b75a]/20",
      accent: "text-[#f4b75a]",
    },
    {
      title: "Care Notes",
      desc: "Share up-to-date health information with GPs, therapists, and social workers securely.",
      icon: <FaGraduationCap className="text-2xl" />,
      color: "bg-[#f8845b]/20",
      accent: "text-[#f8845b]",
    },
    {
      title: "SOS Alerts",
      desc: "Instant alerts to your care network when you need urgent support or help.",
      icon: <FaBell className="text-2xl" />,
      color: "bg-[#9f6b99]/20",
      accent: "text-[#9f6b99]",
    },
    {
      title: "Emotion Tracking",
      desc: "Help children log their feelings and track emotional patterns over time.",
      icon: <FaHeart className="text-2xl" />,
      color: "bg-[#c5d4c1]/20",
      accent: "text-[#c5d4c1]",
    },
    {
      title: "Secure Messaging",
      desc: "Private communication with carers, therapists, and family members.",
      icon: <FaComments className="text-2xl" />,
      color: "bg-[#f4b75a]/20",
      accent: "text-[#f4b75a]",
    },
    {
      title: "Safety Features",
      desc: "Enhanced security measures to protect sensitive information about children.",
      icon: <FaShieldCat className="text-2xl" />,
      color: "bg-[#f8845b]/20",
      accent: "text-[#f8845b]",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f4b75a]/5 to-[#f8845b]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#f4b75a]/20 rounded-full flex items-center justify-center">
                  <FaMobile className="text-2xl text-[#f4b75a]" />
                </div>
                <h2 className="text-4xl font-bold text-[#2a2d34]">
                  Nestloop Mobile App
                </h2>
              </div>
              <p className="text-xl text-[#2a2d34]/80 leading-relaxed">
                    Manage your child&apos;s care on the go with our comprehensive mobile
                app. Stay connected with your care network, track progress, and
                access support whenever you need it.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div
                          className={`w-10 h-10 ${feature.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                        >
                          <span className={feature.accent}>{feature.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#2a2d34] mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-xs text-[#2a2d34]/80 leading-relaxed">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Waitlist CTA */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#2a2d34] mb-3">
                  Coming Soon
                </h3>
                <p className="text-[#2a2d34]/80 mb-6">
                  Be the first to know when our mobile app launches. Join the
                  waitlist for early access and exclusive features.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    size="lg"
                    className="bg-[#f8845b] text-white hover:bg-[#f8845b]/90"
                  >
                    Join the waitlist
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#2a2d34] text-[#2a2d34] hover:bg-[#2a2d34] hover:text-white"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* App Screen */}
                  <div className="w-full h-full bg-gradient-to-br from-[#f4b75a]/10 to-[#f8845b]/10 relative">
                    {/* Header */}
                    <div className="bg-white p-4 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#f4b75a] rounded-full"></div>
                          <span className="font-semibold text-[#2a2d34]">
                            Nestloop
                          </span>
                        </div>
                        <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-4">
                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          <div className="w-8 h-8 bg-[#f4b75a]/20 rounded-full flex items-center justify-center mb-2">
                            <FaChild className="text-sm text-[#f4b75a]" />
                          </div>
                          <span className="text-xs font-medium text-[#2a2d34]">
                            Care Log
                          </span>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          <div className="w-8 h-8 bg-[#f8845b]/20 rounded-full flex items-center justify-center mb-2">
                            <FaUsers className="text-sm text-[#f8845b]" />
                          </div>
                          <span className="text-xs font-medium text-[#2a2d34]">
                            Network
                          </span>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          <div className="w-8 h-8 bg-[#9f6b99]/20 rounded-full flex items-center justify-center mb-2">
                            <FaBell className="text-sm text-[#9f6b99]" />
                          </div>
                          <span className="text-xs font-medium text-[#2a2d34]">
                            Alerts
                          </span>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          <div className="w-8 h-8 bg-[#c5d4c1]/20 rounded-full flex items-center justify-center mb-2">
                            <FaHeart className="text-sm text-[#c5d4c1]" />
                          </div>
                          <span className="text-xs font-medium text-[#2a2d34]">
                            Emotions
                          </span>
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <h4 className="text-sm font-semibold text-[#2a2d34] mb-3">
                          Recent Activity
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#f4b75a] rounded-full"></div>
                            <span className="text-xs text-[#2a2d34]/80">
                              Care log updated
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#f8845b] rounded-full"></div>
                            <span className="text-xs text-[#2a2d34]/80">
                              New message from carer
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-[#9f6b99] rounded-full"></div>
                            <span className="text-xs text-[#2a2d34]/80">
                              Therapy session scheduled
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-[#f4b75a]/20 rounded-full flex items-center justify-center"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FaChild className="text-xl text-[#f4b75a]" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#f8845b]/20 rounded-full flex items-center justify-center"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <FaHeart className="text-lg text-[#f8845b]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
