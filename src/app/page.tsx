"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setIsVisible(true);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 hero-content">
              <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight animate-fade-in-up">
                Here&apos;s who my child is today. Help us grow together.
              </h1>
              <p
                className="text-xl text-gray-800 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                Empowering children&apos;s homes, foster carers, and caregivers
                with the tools to provide trauma-informed, insight-driven care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 stagger-animation">
                <button className="btn-primary animate-fade-in-up">
                  Book a Demo
                </button>
                <button className="btn-secondary animate-fade-in-up">
                  Explore Features
                </button>
                <button className="btn-outline animate-fade-in-up">
                  Try Free for 30 Days
                </button>
              </div>
            </div>
            <div className="relative hero-visual">
              <div className="bg-white rounded-2xl p-8 shadow-2xl float-element">
                <div className="bg-gradient-to-br from-blue-50 to-accent/10 rounded-xl p-6">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <span className="text-white text-2xl">👶</span>
                    </div>
                    <div className="w-12 h-12 bg-accent-3 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <span className="text-white text-xl">📱</span>
                    </div>
                    <div className="w-14 h-14 bg-accent-2 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <span className="text-white text-xl">⌚</span>
                    </div>
                  </div>
                  <p className="text-center mt-4 text-slate-700 font-medium">
                    A smiling child interacts with a tablet and wearable device,
                    surrounded by supportive adults.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Nestloop Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 section-reveal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6 animate-fade-in-up">
              What is Nestloop?
            </h2>
            <p
              className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Nestloop is a smart, all-in-one care platform built for real-life
              settings. It simplifies daily care, reduces admin, and puts child
              wellbeing at the centre — using emotion journaling, wearable data,
              and smart alerts to support every child&apos;s journey.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 stagger-animation">
            {[
              { title: "Children's Homes", icon: "🏠", color: "bg-pink-200" },
              { title: "Foster Carers", icon: "👨‍👩‍👧‍👦", color: "bg-blue-200" },
              {
                title: "Special Education Settings",
                icon: "🎓",
                color: "bg-purple-200",
              },
              { title: "Local Authorities", icon: "🏛️", color: "bg-rose-200" },
              {
                title: "Parents & Guardians",
                icon: "👨‍👩‍👧‍👦",
                color: "bg-pink-100",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card text-center hover:scale-105 transition-transform bg-white/80 border border-gray-100"
              >
                <div className={`feature-icon ${item.color} mx-auto mb-4`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-slate-800">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section
        id="features"
        className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 section-reveal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6 animate-fade-in-up">
              Core Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            {[
              {
                title: "Emotion Journaling",
                desc: "Children log their feelings with simple visuals or words. Caregivers add notes for context.",
                icon: "📝",
                color: "bg-pink-200",
              },
              {
                title: "SOS Alerts",
                desc: "Alert your care network when you need urgent help. Support is always just a tap away.",
                icon: "🚨",
                color: "bg-rose-200",
              },
              {
                title: "Predictive AI Alerts",
                desc: "Detect patterns in mood, sleep, or behaviour changes. Intervene early, prevent escalation.",
                icon: "🤖",
                color: "bg-purple-200",
              },
              {
                title: "Caregiver Tools",
                desc: "Shift logging, task management, secure documentation — all streamlined in one place.",
                icon: "🛠️",
                color: "bg-blue-200",
              },
              {
                title: "Therapist & Social Worker Access",
                desc: "Permissioned access lets external professionals view only what they need.",
                icon: "👨‍⚕️",
                color: "bg-pink-100",
              },
              {
                title: "Community",
                desc: "Connect with other parents, share experiences, ask questions, and get support.",
                icon: "👥",
                color: "bg-purple-100",
              },
              {
                title: "Marketplace",
                desc: "Buy, sell, or swap trusted care items and therapy tools with other parents.",
                icon: "🛒",
                color: "bg-blue-100",
              },
              {
                title: "Near Me Recommendations",
                desc: "Activity suggestions, events, and sensory-friendly spaces based on location.",
                icon: "📍",
                color: "bg-rose-100",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="card group bg-white/80 border border-gray-100"
              >
                <div
                  className={`feature-icon ${feature.color} mb-4 group-hover:scale-110`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designed Around the Child Section */}
      <section className="py-20 bg-white section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <h2 className="text-4xl font-bold text-black">
                Designed Around the Child
              </h2>
              <p className="text-xl text-gray-800 italic">
                &ldquo;Nestloop doesn&apos;t just log data — it listens to
                it.&rdquo;
              </p>
              <ul className="space-y-4">
                {[
                  "Trauma-informed care tools",
                  "Personalised routines and timelines",
                  "Children take part in their own care through planners, reward charts & event scheduling",
                  "Visual progress that helps everyone grow — together",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 hover:translate-x-2 transition-transform"
                  >
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1 hover:scale-110 transition-transform">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="bg-gradient-to-br from-accent/10 to-accent-3/10 rounded-2xl p-8 float-element">
                <div className="text-center">
                  <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform">
                    <span className="text-white text-4xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-black mb-4">
                    Visual Progress Tracking
                  </h3>
                  <p className="text-gray-700">
                    Real-time insights that help everyone understand and support
                    the child&apos;s journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6 animate-fade-in-up">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {[
              {
                title: "Create Your LoopCare Profile",
                desc: "Sign up and set up your profile to reflect your child's needs, preferred communication, and care routines.",
                icon: "👤",
                color: "bg-accent",
              },
              {
                title: "Build Your Care Support Network",
                desc: "Add family, friends, caregivers, and therapists to your private loop so everyone stays aligned and informed.",
                icon: "🔗",
                color: "bg-accent-2",
              },
              {
                title: "Organize with Your Loop TaskBoard",
                desc: "Plan and delegate daily tasks, routines, and appointments — all in one shared space.",
                icon: "📋",
                color: "bg-accent-3",
              },
              {
                title: "Join the Community",
                desc: "Ask questions, share wins, and connect with other parents navigating similar journeys.",
                icon: "👥",
                color: "bg-accent-4",
              },
              {
                title: "Explore the Marketplace",
                desc: "Buy, sell, or swap care essentials, therapy tools, and educational resources.",
                icon: "🛒",
                color: "bg-accent",
              },
              {
                title: "Use SOS When You Need Help",
                desc: "Instantly alert your network in moments of stress, emergencies, or burnout.",
                icon: "🚨",
                color: "bg-accent-3",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="card text-center hover:scale-105 transition-transform"
              >
                <div className={`feature-icon ${step.color} mx-auto mb-4`}>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {step.title}
                </h3>
                <p className="text-black">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6 animate-fade-in-up">
              Testimonials
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 stagger-animation">
            <div className="testimonial-card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-white font-bold">C</span>
                </div>
                <div>
                  <p className="text-gray-700 mb-4 italic">
                    &ldquo;We&rsquo;ve never felt more in sync as a care team.
                    Nestloop changed everything.&rdquo;
                  </p>
                  <p className="font-semibold text-black">
                    Children&rsquo;s Home Manager, Birmingham
                  </p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent-3 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-white font-bold">F</span>
                </div>
                <div>
                  <p className="text-gray-700 mb-4 italic">
                    &ldquo;It gave my foster child a voice — even when he
                    couldn&apos;t speak it out loud.&rdquo;
                  </p>
                  <p className="font-semibold text-black">
                    Foster Carer, Manchester
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6 animate-fade-in-up">
              Pricing Plans
            </h2>
            <p
              className="text-xl text-gray-800 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Try Nestloop free for 30 days. Cancel anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 stagger-animation">
            {/* Basic Plan */}
            <div className="pricing-card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">Basic</h3>
                <p className="text-accent text-3xl font-bold">Free</p>
                <p className="text-gray-700">
                  Perfect for families getting started
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "LoopCare Profile (Limited to one child)",
                  "Add up to 3 care network members",
                  "Access to the Loop TaskBoard",
                  "Join the Community forum",
                  "SOS emergency alerts (limited to 2 contacts)",
                  "Access the Marketplace (No listing)",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full">Get Started Free</button>
            </div>

            {/* Pro Plan */}
            <div className="pricing-card featured">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse-slow">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">Pro Plan</h3>
                <p className="text-accent text-3xl font-bold">£29</p>
                <p className="text-gray-700">Everything in Basic + more</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Basic",
                  "Unlimited care network members",
                  "Priority SOS alerts to full care network",
                  "Early access to new features",
                  "Post and list items on the Marketplace",
                  "Direct messaging with community members",
                  "Access to the care directory",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full pulse-cta">
                Start Pro Trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="pricing-card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">
                  Enterprise
                </h3>
                <p className="text-accent text-3xl font-bold">Custom</p>
                <p className="text-gray-700">For organizations and licensing</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "White-label access to LoopCare tools",
                  "Manage multiple families and care teams",
                  "Directory visibility and enhanced listings",
                  "Monthly reports and analytics",
                  "Staff onboarding and training support",
                  "API integrations (on request)",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-outline w-full">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-white section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6 animate-fade-in-up">
              Who It&apos;s For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 stagger-animation">
            {[
              {
                title: "Children&apos;s Home Staff",
                icon: "🏠",
                color: "bg-accent",
              },
              { title: "Foster Carers", icon: "👨‍👩‍👧‍👦", color: "bg-accent-2" },
              { title: "SENCOs & Schools", icon: "🎓", color: "bg-accent-3" },
              {
                title: "Councils and Local Authorities",
                icon: "🏛️",
                color: "bg-accent-4",
              },
              {
                title: "Therapists & Social Workers",
                icon: "👨‍⚕️",
                color: "bg-accent",
              },
              {
                title: "Parents of neurodiverse children",
                icon: "👨‍👩‍👧‍👦",
                color: "bg-accent-2",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card text-center hover:scale-105 transition-transform"
              >
                <div className={`feature-icon ${item.color} mx-auto mb-4`}>
                  <span className="text-xl">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-black text-sm">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nestloop Section */}
      <section className="py-20 bg-white section-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6 animate-fade-in-up">
              Why Nestloop?
            </h2>
            <p
              className="text-xl text-gray-800 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              No other UK platform blends care coordination, SOS Alerts,
              emotional support, and a trusted SEND-focused marketplace, built
              for families raising children with special needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-animation">
            <div className="card text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                <span className="text-white text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Built for non-techy carers
              </h3>
              <p className="text-gray-700">
                Intuitive UI that anyone can use, regardless of technical
                experience.
              </p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-accent-3 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Scalable from 1 to 1,000
              </h3>
              <p className="text-gray-700">
                Grows with your needs, from individual families to large
                organizations.
              </p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-accent-4 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                GDPR, Ofsted & Safeguarding Ready
              </h3>
              <p className="text-gray-700">
                Built with compliance and security at the core.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white section-reveal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6 animate-fade-in-up">
            Ready to Transform Care?
          </h2>
          <p
            className="text-xl text-gray-800 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Join thousands of caregivers who are already using Nestloop to
            provide better care for children.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center stagger-animation">
            <button className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-200 hover:scale-105">
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
