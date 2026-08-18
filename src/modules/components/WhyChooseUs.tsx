"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { Variants } from "framer-motion";
import Link from "next/link";

const stats = [
  {
    number: "20K+",
    text: "Trusted by individuals and professionals on their wellness journey.",
  },
  {
    number: "35K+",
    text: "Empowering members with structured coaching and supportive community.",
  },
  {
    number: "2M+",
    text: "Training sessions completed helping people stay consistent focused.",
  },
  {
    number: "500K+",
    text: "Hours of guided training meditation and coaching delivered with results.",
  },
];

const features = [
  "Personalized Coaching",
  "Flexible Online Access",
  "Community Support System",
  "Safe and Guided Training",
  "Structured Training Plans",
  "Balanced Wellness System",
  "Goal Focused Approach",
];

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 32 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function WhyUs({ className }: { className?: string }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <Link
        href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        className={
          "w-full bg-[#EDFBEA] py-16 md:py-20 px-6 md:px-10 lg:px-0 " +
          (className || "")
        }
      >
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          {/* Header */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-10 md:mb-[80px]"
          >
            <motion.h2
              variants={itemVariants}
              className="text-[#093600] text-[32px] md:text-[48px] font-bold leading-[120%] tracking-[-0.04em] mb-4"
              style={{ fontFamily: '"Crimson Pro", serif' }}
            >
              Why Train and <br className="hidden md:block" /> Transform With Us
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-[#093600]/80 text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[26px] tracking-[-0.18px] max-w-[554px] mx-auto text-center"
            >
              Expert coaching structured programs and real accountability to{" "}
              <br className="hidden md:block" /> help you build strength balance
              and consistency.
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="w-full flex flex-col lg:flex-row gap-10 lg:gap-[56px] mb-12 md:mb-16"
          >
            {/* Left: Image Card */}
            <motion.div
              variants={itemVariants}
              className="flex-1 w-full lg:max-w-[540px] aspect-[4/3] lg:aspect-auto lg:self-stretch rounded-[24px] md:rounded-[30px] overflow-hidden relative group"
            >
              <motion.img
                src="https://cdn.jiro.build/Solra/All%20Images/Feature%2004%20img%203.png"
                alt="Training Session"
                className="w-full h-full object-cover"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{
                  duration: 8,
                  repeat: Infinity as number,
                  ease: "easeInOut" as const,
                }}
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Right: Statistics Cards */}
            <div className="flex-1 flex flex-col gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 p-5 md:px-8 md:py-5 bg-white rounded-[16px] border border-[#EDFBEA] shadow-sm"
                >
                  <h3
                    className="text-[#093600] text-[28px] md:text-[30px] font-semibold leading-[36px] tracking-[-0.2px] w-full sm:w-[100px]"
                    style={{ fontFamily: '"Crimson Pro", serif' }}
                  >
                    {stat.number}
                  </h3>
                  <p className="text-[#093600]/80 text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[26px] tracking-[-0.18px] max-w-full sm:max-w-[340px]">
                    {stat.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Feature Tags */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="flex justify-center flex-wrap gap-x-6 md:gap-x-8 gap-y-3 md:gap-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#093600]" />
                <span className="text-[#093600] text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px] tracking-[-0.4px] font-sans">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
