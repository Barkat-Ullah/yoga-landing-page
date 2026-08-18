"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProgramData {
  tag: string;
  title: string;
  img: string;
  alt: string;
  price: string;
  label: string;
}

const programs: ProgramData[] = [
  {
    tag: "Mind & Body Strength",
    title: "Building Your Mind<br />& Body Strength",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=80",
    alt: "Mind & Body Strength",
    price: "99",
    label: "Online Program Start From",
  },
  {
    tag: "Mindfulness & Calm",
    title: "Find Peace &<br />Mental Clarity",
    img: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=900&q=80",
    alt: "Mindfulness Sessions",
    price: "79",
    label: "Session Start From",
  },
  {
    tag: "1-on-1 Coaching",
    title: "Personalized<br />Coaching Plans",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80",
    alt: "Personal Coaching",
    price: "149",
    label: "Per Month, Start From",
  },
  {
    tag: "Community & Group",
    title: "Train Together,<br />Grow Stronger",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80",
    alt: "Community Classes",
    price: "49",
    label: "Monthly Access From",
  },
  {
    tag: "Full Transformation",
    title: "Transform Body<br />& Mindset",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80",
    alt: "Transformation Workshop",
    price: "199",
    label: "Workshop Start From",
  },
  {
    tag: "Yoga & Flexibility",
    title: "Flow, Breathe<br />& Restore",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80",
    alt: "Yoga Sessions",
    price: "59",
    label: "Yoga Plan Start From",
  },
];

const features = [
  {
    title: "Always Supported",
    desc: "Stay consistent with a community that motivates you and coaching.",
  },
  {
    title: "Total Life Balance",
    desc: "Build strength reduce stress and stay consistent with expert guidance.",
  },
  {
    title: "Guided Every Step",
    desc: "Clear plans smart training and support to keep you moving forward.",
  },
];

export default function Services({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <Link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        className={
          "w-full py-20 md:py-[120px] px-6 md:px-[120px] bg-white flex flex-col items-center gap-16 md:gap-[80px] self-stretch " +
          (className || "")
        }
        aria-label="Wellness Programs"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-5 max-w-[680px] text-center"
        >
          <h2 className="text-[#093600] font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold leading-tight tracking-tight">
            Discover a Range of Holistic
            <br className="hidden sm:block" /> Wellness Programs
          </h2>
          <p className="text-[#093600]/60 font-sans text-base sm:text-lg leading-relaxed tracking-tight">
            Structured coaching community support and mindful training to
            <br className="hidden sm:block" /> help you achieve lasting mind and
            body transformation.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-[1170px] bg-[#EDFBEA] rounded-[30px] p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6"
        >
          {/* Left: Tab list */}
          <nav
            className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide w-full lg:w-auto lg:flex-1 items-center lg:items-start"
            aria-label="Program categories"
          >
            {programs.map((p: ProgramData, i: number) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={
                  "flex items-center justify-center lg:justify-start px-5 py-3.5 rounded-full font-sans text-sm sm:text-base font-semibold transition-all whitespace-nowrap text-center lg:text-left " +
                  (activeTab === i
                    ? "bg-[#85FA6D] text-[#093600]"
                    : "bg-transparent text-[#093600] hover:bg-[#85FA6D]/25")
                }
              >
                {p.tag}
              </button>
            ))}
          </nav>

          {/* Center: Program image */}
          <div className="relative rounded-[20px] overflow-hidden min-h-[340px] w-full lg:w-[473px] bg-[#1a2e16] group flex flex-col justify-between py-8 px-6 self-stretch">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.22 }}
                className="absolute inset-0"
              >
                <Image
                  src={programs[activeTab].img}
                  alt={programs[activeTab].alt}
                  fill
                  sizes="(min-width: 1024px) 473px, (min-width: 768px) calc(100vw - 304px), calc(100vw - 96px)"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 z-[1]" />
              </motion.div>
            </AnimatePresence>

            <span className="relative z-[2] text-white/90 font-sans text-sm font-medium tracking-tight">
              {programs[activeTab].tag}
            </span>
            <h3
              className="relative z-[2] text-[#EDFBEA] font-serif text-[30px] font-semibold leading-[36px] tracking-[-0.2px] w-full max-w-[264px]"
              dangerouslySetInnerHTML={{ __html: programs[activeTab].title }}
            />
          </div>

          {/* Right: Price panel */}
          <div className="bg-white rounded-[30px] py-8 px-6 flex flex-col justify-between items-end flex-[1_0_0] self-stretch">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-[#093600]/15 flex items-center justify-center transition-all hover:bg-[#85FA6D] hover:border-[#85FA6D] hover:rotate-45 group"
              aria-label="View program"
            >
              <ArrowUpRight className="w-[18px] h-[18px] text-[#093600]" />
            </a>
            <div className="flex flex-col gap-1.5 mt-6 lg:mt-0 w-full text-left">
              <p className="font-serif text-[52px] font-semibold leading-[56px] text-[#093600] tracking-[-0.8px] self-stretch">
                <span className="text-[32px] font-semibold align-super">$</span>
                {programs[activeTab].price}
              </p>
              <p className="font-sans text-sm text-[#093600]/55 leading-relaxed">
                {programs[activeTab].label}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Row */}
        <div className="flex w-full max-w-[1170px] items-start content-center gap-[24px] flex-wrap justify-center">
          {features.map((f: { title: string; desc: string }, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
              className="flex items-start gap-6 w-full sm:max-w-[374px] group"
            >
              <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                <Image
                  src="https://cdn.jiro.build/Solra/Svg%20icon/check-verified-02.svg"
                  alt="Verified"
                  width={36}
                  height={36}
                  className="w-9 h-9 flex-shrink-0 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <p className="self-stretch text-[#093600] font-serif text-[20px] font-semibold leading-[28px] tracking-[-0.04px]">
                  {f.title}
                </p>
                <p className="font-sans text-[15px] text-[#093600]/55 leading-relaxed tracking-tight">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
