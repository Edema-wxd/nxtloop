"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for families getting started",
      features: [
        "LoopCare Profile (Limited to one child)",
        "Add up to 3 care network members",
        "Access to the Loop TaskBoard",
        "Join the Community forum",
        "SOS emergency alerts (limited to 2 contacts)",
        "Access the Marketplace (No listing)",
      ],
      cta: "Get Started Free",
      variant: "outline" as const,
    },
    {
      name: "Pro Plan",
      price: "£29",
      description: "Everything in Basic + more",
      features: [
        "Everything in Basic",
        "Unlimited care network members",
        "Priority SOS alerts to full care network",
        "Early access to new features",
        "Post and list items on the Marketplace",
        "Direct messaging with community members",
        "Access to the care directory",
      ],
      cta: "Start Pro Trial",
      variant: "default" as const,
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations and licensing",
      features: [
        "White-label access to LoopCare tools",
        "Manage multiple families and care teams",
        "Directory visibility and enhanced listings",
        "Monthly reports and analytics",
        "Staff onboarding and training support",
        "API integrations (on request)",
      ],
      cta: "Contact Sales",
      variant: "outline" as const,
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
          <h2 className="text-4xl font-bold text-black mb-6">Pricing Plans</h2>
          <p className="text-xl text-gray-800">
            Try Nestloop free for 30 days. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className={`relative ${
                  plan.featured ? "ring-2 ring-accent" : ""
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-white px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <h3 className="text-2xl font-bold text-black">{plan.name}</h3>
                  <p className="text-accent text-3xl font-bold">{plan.price}</p>
                  <p className="text-gray-700">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.variant} className="w-full">
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
