"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFileContract,
  FaUserShield,
  FaUserCheck,
  FaHandsHelping,
  FaHeartbeat,
  FaLink,
  FaCopyright,
  FaServer,
  FaExclamationTriangle,
  FaUserSlash,
  FaGavel,
  FaSyncAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      {/* Hero */}
      <section className="pt-16 sm:pt-20 pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm mb-5">
              <FaFileContract className="w-4 h-4" />
              Terms & Conditions
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2a2d34] leading-tight">
              NestLoop Terms & Conditions
            </h1>
            <div className="mt-3 inline-flex items-center gap-2 text-[#2a2d34]/70 text-sm">
              <FaClock className="w-4 h-4" />
              <span>Last updated: 19th August 2025</span>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Body */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mb-8"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-[#2a2d34] mb-3">
              Contents
            </h2>
            <div className="grid sm:grid-cols-2 gap-2 text-sm">
              <a
                href="#about"
                className="text-[#2a2d34]/80 hover:text-[#2a2d34]"
              >
                1. About NestLoop
              </a>
              <a
                href="#eligibility"
                className="text-[#2a2d34]/80 hover:text-[#2a2d34]"
              >
                2. Eligibility
              </a>
              <a
                href="#responsibilities"
                className="text-[#2a2d34]/80 hover:text-[#2a2d34]"
              >
                3. Your Responsibilities
              </a>
              <a
                href="#safeguarding"
                className="text-[#2a2d34]/80 hover:text-[#2a2d34]"
              >
                4. Safeguarding & Responsibilities
              </a>
              <a
                href="#health-data"
                className="text-[#2a2d34]/80 hover:text-[#2a2d34]"
              >
                5. Health & Special Category Data
              </a>
              <a
                href="#third-parties"
                className="text-[#2a2d34]/80 hover:text-[#2a2d34]"
              >
                6. Third-Party Connections
              </a>
              <a href="#ip" className="text-[#2a2d34]/80 hover:text-[#2a2d34]">
                7. Intellectual Property
              </a>
              <a
                href="#availability"
                className="text-[#2a2d34]/80 hover:text-[#2a2d34]"
              >
                8. Service Availability
              </a>
              <a
                href="#liability"
                className="text-[#2a2d34]/80 hover:text-[#2a2d34]"
              >
                9. Liability Disclaimer
              </a>
              <a
                href="#termination"
                className="text-[#2a2d34]/80 hover:text-[#2a2d34]"
              >
                10. Termination
              </a>
              <a href="#law" className="text-[#2a2d34]/80 hover:text-[#2a2d34]">
                11. Governing Law
              </a>
              <a
                href="#changes"
                className="text-[#2a2d34]/80 hover:text-[#2a2d34]"
              >
                12. Changes to These Terms
              </a>
              <a
                href="#contact"
                className="text-[#2a2d34]/80 hover:text-[#2a2d34]"
              >
                13. Contact Us
              </a>
            </div>
            <div className="mt-4 text-xs text-[#2a2d34]/70">
              See also our{" "}
              <Link
                href="/privacy-policy"
                className="underline hover:text-[#9f6b99]"
              >
                Privacy Policy
              </Link>
              .
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* 1. About NestLoop */}
            <motion.div
              id="about"
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaUserShield className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  1. About NestLoop
                </h2>
              </div>
              <p className="text-[#2a2d34]/80 leading-relaxed">
                NestLoop (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a
                UK-based platform that helps families, carers, and trusted
                professionals coordinate care, share information, and connect
                with local services.
              </p>
              <p className="text-[#2a2d34]/80 leading-relaxed mt-3">
                By creating an account, downloading our app, or using our
                services, you (&quot;you&quot;, &quot;user&quot;,
                &quot;parent/guardian&quot;, &quot;carer&quot;,
                &quot;organisation&quot;) agree to these Terms &amp; Conditions.
                If you do not agree, you must not use NestLoop.
              </p>
            </motion.div>

            {/* 2. Eligibility */}
            <motion.div
              id="eligibility"
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaUserCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  2. Eligibility
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                <li>
                  You must be at least 18 years old to register an account.
                </li>
                <li>
                  Children may only appear on the platform through a
                  parent/guardian account.
                </li>
                <li>
                  By registering, you confirm that all information you provide
                  is accurate and kept up to date.
                </li>
              </ul>
            </motion.div>

            {/* 3. Your Responsibilities */}
            <motion.div
              id="responsibilities"
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaHandsHelping className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  3. Your Responsibilities
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                <li>
                  You are responsible for how you use NestLoop, including the
                  accuracy of any information you upload about yourself, your
                  child, or others.
                </li>
                <li>
                  You must only share health or care information if you have the
                  right and authority to do so (e.g., as a parent/guardian).
                </li>
                <li>You must not use NestLoop to:</li>
                <li className="ml-6">
                  Post false, harmful, or offensive content.
                </li>
                <li className="ml-6">Harass or abuse others.</li>
                <li className="ml-6">Breach confidentiality agreements.</li>
                <li className="ml-6">
                  Share anyone&apos;s personal data without permission.
                </li>
                <li>
                  You agree to keep your account secure and not share login
                  details with others.
                </li>
              </ul>
            </motion.div>

            {/* 4. Safeguarding & Responsibilities */}
            <motion.div
              id="safeguarding"
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaExclamationTriangle className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  4. Safeguarding & Responsibilities
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                <li>
                  NestLoop is a digital tool to support communication and
                  organisation, not a substitute for professional judgment,
                  medical advice, or safeguarding procedures.
                </li>
                <li>
                  While we take steps to promote safe use, ultimate
                  responsibility for safeguarding rests with parents/guardians
                  and carers.
                </li>
                <li>
                  If we become aware of unlawful, harmful, or
                  safeguarding-related content, we may:
                </li>
                <li className="ml-6">Suspend or terminate accounts.</li>
                <li className="ml-6">
                  Report concerns to relevant authorities.
                </li>
              </ul>
            </motion.div>

            {/* 5. Health & Special Category Data */}
            <motion.div
              id="health-data"
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaHeartbeat className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  5. Health & Special Category Data
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                <li>
                  You may choose to enter health or care information (e.g.,
                  allergies, medical needs, accessibility requirements).
                </li>
                <li>
                  This is optional and only processed with your explicit consent
                  (see Privacy Policy).
                </li>
                <li>
                  You remain responsible for ensuring this information is
                  accurate and updated.
                </li>
                <li>
                  NestLoop does not provide medical advice and is not
                  responsible for outcomes based on information entered.
                </li>
              </ul>
              <p className="mt-3 text-xs text-[#2a2d34]/70">
                See our{" "}
                <Link
                  className="underline hover:text-[#9f6b99]"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>{" "}
                for how we handle this data.
              </p>
            </motion.div>

            {/* 6. Third-Party Connections */}
            <motion.div
              id="third-parties"
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaLink className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  6. Third-Party Connections
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                <li>
                  NestLoop allows you to connect with carers, schools, or
                  service providers.
                </li>
                <li>
                  These third parties are independent of NestLoop. We are not
                  responsible for their actions, advice, or services.
                </li>
                <li>
                  You should carry out your own checks and due diligence before
                  engaging with third parties.
                </li>
              </ul>
            </motion.div>

            {/* 7. Intellectual Property */}
            <motion.div
              id="ip"
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaCopyright className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  7. Intellectual Property
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                <li>
                  All rights in the NestLoop platform, design, branding, and
                  software belong to us or our licensors.
                </li>
                <li>
                  You may not copy, modify, or distribute our content without
                  permission.
                </li>
                <li>
                  You retain ownership of the content you upload but grant
                  NestLoop a limited licence to store and display it for the
                  purpose of operating our services.
                </li>
              </ul>
            </motion.div>

            {/* 8. Service Availability */}
            <motion.div
              id="availability"
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaServer className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  8. Service Availability
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                <li>
                  We aim to keep NestLoop available and reliable, but we do not
                  guarantee uninterrupted access.
                </li>
                <li>
                  We may update, suspend, or restrict services at any time for
                  security, maintenance, or improvement.
                </li>
                <li>
                  We are not liable for loss caused by downtime, provided it was
                  not due to gross negligence.
                </li>
              </ul>
            </motion.div>

            {/* 9. Liability Disclaimer */}
            <motion.div
              id="liability"
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaExclamationTriangle className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  9. Liability Disclaimer
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                <li>To the fullest extent permitted by law:</li>
                <li className="ml-6">
                  NestLoop is provided “as is” and we make no guarantees of
                  fitness for a particular purpose.
                </li>
                <li className="ml-6">
                  We are not responsible for decisions made based on content
                  shared within NestLoop.
                </li>
                <li className="ml-6">
                  We are not liable for loss of data, indirect losses, or issues
                  caused by third-party providers.
                </li>
                <li>Nothing in these Terms limits liability for:</li>
                <li className="ml-6">
                  Death or personal injury caused by negligence.
                </li>
                <li className="ml-6">Fraud or fraudulent misrepresentation.</li>
                <li className="ml-6">
                  Any rights you have under UK consumer law.
                </li>
              </ul>
            </motion.div>

            {/* 10. Termination */}
            <motion.div
              id="termination"
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaUserSlash className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  10. Termination
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                <li>You may close your account at any time.</li>
                <li>We may suspend or terminate your account if:</li>
                <li className="ml-6">You breach these Terms.</li>
                <li className="ml-6">
                  We are required to do so by law or safeguarding duty.
                </li>
                <li>
                  On termination, your right to access NestLoop ends
                  immediately. We may retain some data as required by law (see
                  Privacy Policy).
                </li>
              </ul>
            </motion.div>

            {/* 11. Governing Law */}
            <motion.div
              id="law"
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaGavel className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  11. Governing Law
                </h2>
              </div>
              <p className="text-[#2a2d34]/80 leading-relaxed">
                These Terms are governed by the laws of England and Wales. Any
                disputes will be subject to the exclusive jurisdiction of the
                courts of England and Wales.
              </p>
            </motion.div>

            {/* 12. Changes to These Terms */}
            <motion.div
              id="changes"
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaSyncAlt className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  12. Changes to These Terms
                </h2>
              </div>
              <p className="text-[#2a2d34]/80 leading-relaxed">
                We may update these Terms occasionally. If changes are
                significant, we will notify you by email or in-app notification.
                Continued use of NestLoop means you accept the revised Terms.
              </p>
            </motion.div>

            {/* 13. Contact Us */}
            <motion.div
              id="contact"
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  13. Contact Us
                </h2>
              </div>
              <div className="text-[#2a2d34]/80 leading-relaxed">
                <p>If you have questions about these Terms, contact us at:</p>
                <p className="mt-2">support@nestloop.org.uk</p>
              </div>
            </motion.div>
          </motion.div>
          <div className="mt-10 text-center text-sm text-[#2a2d34]/60">
            Thanks for using NestLoop. We keep things simple, secure, and
            family-first.
          </div>
        </div>
      </section>
    </div>
  );
}
