"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaFileAlt,
  FaBalanceScale,
  FaChild,
  FaUsers,
  FaGlobe,
  FaLock,
  FaCookie,
  FaSyncAlt,
  FaClock,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <section className="pt-16 sm:pt-20 pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm mb-5">
              <FaShieldAlt className="w-4 h-4" />
              Privacy & Safety
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2a2d34] leading-tight">
              NestLoop Privacy Policy
            </h1>
            <div className="mt-3 inline-flex items-center gap-2 text-[#2a2d34]/70 text-sm">
              <FaClock className="w-4 h-4" />
              <span>Last updated: 19th August 2025</span>
            </div>
          </motion.div>
          <div className="mt-10 text-center text-sm text-[#2a2d34]/60">
            We care about your privacy. If anything is unclear, please contact
            us.
          </div>
        </div>
      </section>
      {/* Body */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* 1. Introduction */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaFileAlt className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  1. Introduction
                </h2>
              </div>
              <div className="space-y-3 text-[#2a2d34]/80 leading-relaxed">
                <p>
                  NestLoop (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) is
                  a UK-based platform designed to help families, carers, and
                  support providers coordinate care, connect with trusted
                  services, and manage their child’s developmental and everyday
                  needs.
                </p>
                <p>
                  We take your privacy very seriously and are committed to
                  protecting personal data in accordance with the UK GDPR, the
                  Data Protection Act 2018, and the Children’s Code
                  (Age-Appropriate Design Code).
                </p>
                <p>
                  This policy explains what personal information we collect, how
                  we use it, who we share it with, and your rights.
                </p>
              </div>
            </motion.div>

            {/* 2. Data We Collect */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaUsers className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  2. Data We Collect
                </h2>
              </div>
              <p className="text-[#2a2d34]/80 leading-relaxed mb-4">
                We may collect the following categories of personal data:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[#2a2d34] mb-2">
                    (a) Account &amp; Profile Information
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                    <li>Name, email, phone number.</li>
                    <li>
                      Family details (parent/guardian, child, carer roles).
                    </li>
                    <li>
                      Login details (username, password – securely hashed).
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2a2d34] mb-2">
                    (b) Child &amp; Care-Related Information (Special Category
                    Data)
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                    <li>Age, date of birth, educational stage.</li>
                    <li>
                      Health and care needs (e.g., allergies, dietary
                      restrictions, accessibility requirements).
                    </li>
                    <li>Support plans, schedules, and care preferences.</li>
                    <li>
                      Communications between families and carers within the app.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2a2d34] mb-2">
                    (c) Usage &amp; Technical Data
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                    <li>Device type, browser, operating system.</li>
                    <li>IP address and log-in metadata.</li>
                    <li>
                      In-app activity (e.g., messages sent, features used).
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2a2d34] mb-2">
                    (d) Optional Data
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                    <li>
                      Feedback, surveys, and participation in beta testing.
                    </li>
                    <li>
                      Uploaded documents (care notes, reports, school
                      information).
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* 3. How We Use Your Data */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaSyncAlt className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  3. How We Use Your Data
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                <li>Provide and personalise our services.</li>
                <li>
                  Enable secure communication between parents, carers, and
                  trusted professionals.
                </li>
                <li>
                  Support safeguarding obligations (e.g., flagging inappropriate
                  use or safety risks).
                </li>
                <li>
                  Improve app functionality, user experience, and accessibility.
                </li>
                <li>
                  Send service updates, notifications, or (with consent)
                  marketing messages.
                </li>
                <li>
                  Comply with legal obligations (e.g., child safeguarding, data
                  protection laws).
                </li>
              </ul>
            </motion.div>

            {/* 4. Legal Basis for Processing */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaBalanceScale className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  4. Legal Basis for Processing
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                <li>
                  Consent – when parents/guardians provide information about
                  their child or agree to optional communications.
                </li>
                <li>
                  Contract – to deliver NestLoop’s core services to registered
                  users.
                </li>
                <li>
                  Legal obligation – where safeguarding or regulatory reporting
                  is required.
                </li>
                <li>
                  Legitimate interests – for analytics, app security, and
                  service improvements (balanced against user rights).
                </li>
                <li>
                  Special Category Data (Health &amp; Care) – processed only
                  with explicit consent or where strictly necessary for
                  safeguarding.
                </li>
              </ul>
            </motion.div>

            {/* 5. Children’s Data */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaChild className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  5. Children’s Data
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                <li>
                  NestLoop is designed for use by adults (parents/guardians and
                  carers).
                </li>
                <li>Children under 16 should not register independently.</li>
                <li>
                  All child data must be provided and managed by a
                  parent/guardian.
                </li>
                <li>
                  We apply the Children’s Code principles (transparency, data
                  minimisation, security, and parental control).
                </li>
                <li>
                  If we become aware of unauthorised accounts created by a
                  child, we will delete them.
                </li>
              </ul>
            </motion.div>

            {/* 6. Sharing Your Data */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaUsers className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  6. Sharing Your Data
                </h2>
              </div>
              <div className="space-y-3 text-[#2a2d34]/80">
                <p>We only share personal data with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Service providers (hosting, analytics, customer support),
                    bound by strict confidentiality agreements.
                  </li>
                  <li>
                    Schools, carers, or local services, but only where you
                    explicitly connect and consent to sharing.
                  </li>
                  <li>
                    Legal authorities if required by law or safeguarding
                    concerns.
                  </li>
                  <li>
                    Successors in the event of a merger, acquisition, or
                    restructuring.
                  </li>
                </ul>
                <p className="font-medium text-[#2a2d34]">
                  We will never sell your data to third parties.
                </p>
              </div>
            </motion.div>

            {/* 7. Data Transfers Outside the UK */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaGlobe className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  7. Data Transfers Outside the UK
                </h2>
              </div>
              <p className="text-[#2a2d34]/80">
                If data is transferred outside the UK, we ensure equivalent
                protection using:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-[#2a2d34]/80">
                <li>
                  Adequacy decisions (countries recognised by the UK government
                  as providing adequate protection), or
                </li>
                <li>Standard Contractual Clauses (SCCs).</li>
              </ul>
            </motion.div>

            {/* 8. Data Retention */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaSyncAlt className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  8. Data Retention
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                <li>
                  Account information: kept for as long as you maintain an
                  account.
                </li>
                <li>
                  Care notes and child data: retained only while necessary for
                  the purpose collected.
                </li>
                <li>
                  Deleted accounts: securely erased within 90 days, unless
                  retention is required by law.
                </li>
              </ul>
            </motion.div>

            {/* 9. Security Measures */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaLock className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  9. Security Measures
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                <li>End-to-end encryption of communications.</li>
                <li>Secure UK/EU-based servers.</li>
                <li>Regular penetration testing and monitoring.</li>
                <li>Access controls limiting who can view sensitive data.</li>
                <li>Mandatory data protection training for staff.</li>
              </ul>
            </motion.div>

            {/* 10. Your Rights */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaBalanceScale className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  10. Your Rights
                </h2>
              </div>
              <div className="space-y-3 text-[#2a2d34]/80">
                <p>Under UK GDPR, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access a copy of your data.</li>
                  <li>Correct inaccurate or incomplete information.</li>
                  <li>Request deletion (&quot;right to be forgotten&quot;).</li>
                  <li>Restrict processing in certain cases.</li>
                  <li>Receive your data in a portable format.</li>
                  <li>
                    Object to certain types of processing (e.g., marketing).
                  </li>
                  <li>Withdraw consent at any time.</li>
                </ul>
                <div className="mt-4 p-4 rounded-xl border border-gray-200 bg-gradient-to-r from-[#f4b75a]/10 to-[#c5d4c1]/10">
                  <p className="font-medium text-[#2a2d34] mb-1">
                    To exercise your rights, contact:
                  </p>
                  <p>support@nestloop.org.uk</p>
                </div>
                <p className="text-sm">
                  You also have the right to complain to the Information
                  Commissioner’s Office (ICO):{" "}
                  <a
                    className="underline text-[#2a2d34] hover:text-[#9f6b99]"
                    href="https://www.ico.org.uk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.ico.org.uk
                  </a>
                  .
                </p>
              </div>
            </motion.div>

            {/* 11. Cookies & Tracking */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaCookie className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  11. Cookies &amp; Tracking
                </h2>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-[#2a2d34]/80">
                <li>
                  We use cookies to support log-in sessions, security, and
                  analytics.
                </li>
                <li>
                  Non-essential cookies (e.g., for analytics) are only used with
                  your consent.
                </li>
                <li>
                  You can manage preferences via your browser or in-app settings
                </li>
              </ul>
            </motion.div>

            {/* 12. Changes to this Policy */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f8845b] to-[#9f6b99] flex items-center justify-center text-white shadow">
                  <FaSyncAlt className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2d34]">
                  12. Changes to this Policy
                </h2>
              </div>
              <p className="text-[#2a2d34]/80 leading-relaxed">
                We may update this policy from time to time. Updates will be
                posted in-app and on our website with a revised “last updated”
                date. Significant changes will be notified directly to users.
              </p>
            </motion.div>
          </motion.div>
          <div className="mt-10 text-center text-sm text-[#2a2d34]/60">
            We care about your privacy. If anything is unclear, please contact
            us.
          </div>
        </div>
      </section>
    </div>
  );
}
