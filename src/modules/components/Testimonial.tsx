"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TestimonialData {
  id: number;
  image: string;
  name: string;
  role: string;
  rating: number;
  headline: string;
  text: string;
  avatar: string;
  activeRole: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 0,
    image:
      "https://cdn.jiro.build/Solra/All%20Images/Testimonial%20img%201%20solra.png",
    name: "Marcus Chen",
    role: "Entrepreneur",
    rating: 5.0,
    headline:
      "\u201cA complete shift in my daily energy levels and focus.\u201d",
    text: "\u201cThe holistic approach helped me regain peak performance. I feel more centered and productive than ever before in my career.\u201d",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
    activeRole: "Entrepreneur",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    name: "David Miller",
    role: "Student",
    rating: 5.0,
    headline:
      "\u201cThe perfect balance between academic life and health.\u201d",
    text: "\u201cBalancing studies was a struggle until I joined. The workouts are efficient and fit perfectly into my busy schedule.\u201d",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop",
    activeRole: "University Student",
  },
  {
    id: 2,
    image:
      "https://cdn.jiro.build/Solra/All%20Images/Feature%2004%20img%203.png",
    name: "James Wilson",
    role: "Director",
    rating: 5.0,
    headline:
      "\u201cIncredible results that speak for themselves every day.\u201d",
    text: "\u201cI've tried many programs, but none offered this depth. My physical health has never been better at this stage of my life.\u201d",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2570&auto=format&fit=crop",
    activeRole: "Creative Director",
  },
  {
    id: 3,
    image:
      "https://cdn.jiro.build/Solra/All%20Images/Feature%2004%20img%202.png",
    name: "Alex Rivera",
    role: "Engineer",
    rating: 5.0,
    headline:
      "\u201cTechnical precision meets mindful movement perfectly.\u201d",
    text: "\u201cAs an engineer, I appreciate the structured approach. The program is logically sound and delivers consistent progress.\u201d",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
    activeRole: "Software Engineer",
  },
];

function TestimonialCard({
  testimonial,
  isActive,
  onHover,
}: {
  testimonial: TestimonialData;
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <motion.div
      onMouseEnter={onHover}
      layout
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className={
        "relative flex flex-col flex-1 min-w-0 transition-all duration-700 h-[350px] " +
        (isActive
          ? "bg-[#093600] rounded-[20px] p-5 shadow-[0px_12px_30px_rgba(0,0,0,0.08)] z-10"
          : "items-start opacity-90 hover:opacity-100 hover:-translate-y-1")
      }
    >
      <AnimatePresence mode="wait" initial={false}>
        {isActive ? (
          <motion.div
            key="active"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="flex flex-col h-full"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-[10px] mb-5">
                <div className="flex items-center gap-[5px]">
                  {[...Array(5)].map((_: unknown, i: number) => (
                    <Star key={i} size={16} fill="#F8933A" stroke="#F8933A" />
                  ))}
                </div>
                <span
                  className="text-[#85FA6D] text-[20px] font-bold leading-[28px]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {testimonial.rating.toFixed(1)}
                </span>
              </div>
              <h3
                className="text-white text-[20px] font-semibold leading-[28px] mb-3 line-clamp-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {testimonial.headline}
              </h3>
              <p
                className="text-white text-[16px] font-normal leading-[24px] tracking-[-0.4px] opacity-90 line-clamp-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {testimonial.text}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-auto">
              <div className="relative w-12 h-12 rounded-full border-[1.2px] border-[#EDFBEA] overflow-hidden bg-gray-200 shrink-0">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-white text-[16px] font-semibold leading-[24px]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {testimonial.name}
                </span>
                <span
                  className="text-white text-[16px] font-normal leading-[24px] tracking-[-0.4px] opacity-80"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {testimonial.activeRole}
                </span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="inactive"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="flex flex-col gap-4 w-full h-full"
          >
            <div className="relative h-[310px] w-full">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                sizes="(min-width: 1440px) 274px, calc((100vw - 342px)/4)"
                className="rounded-[20px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <span
                className="text-[#093600] text-[16px] font-semibold leading-[24px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {testimonial.name}
              </span>
              <span
                className="text-[#093600] text-[14px] font-normal leading-[22px] opacity-80"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {testimonial.role}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Testimonials({
  className,
}: {
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(1);

  const containerVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <Link
        href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        className={
          "w-full max-w-[1440px] mx-auto py-[120px] px-6 md:px-[135px] flex flex-col items-center gap-[80px] bg-white overflow-hidden " +
          (className || "")
        }
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center md:items-end gap-10 md:gap-[96px] w-full max-w-[1170px]"
        >
          <motion.h2
            variants={itemVariants}
            className="text-[#093600] text-[40px] md:text-[52px] font-semibold leading-[48px] md:leading-[56px] tracking-[-0.8px] w-full md:w-[605px] shrink-0 text-center md:text-left"
            style={{ fontFamily: '"Crimson Pro", serif' }}
          >
            Committed to Change <br className="hidden md:block" /> Proven by
            Results
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[#093600] text-[18px] font-normal leading-[26px] tracking-[-0.18px] opacity-80 flex-1 text-center md:text-left"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Authentic experiences from people who trusted the process and
            transformed their lifestyle.
          </motion.p>
        </motion.div>

        <div className="flex flex-col items-center gap-[48px] w-full">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            onMouseLeave={() => setActiveIndex(1)}
            className="hidden md:flex gap-6 w-full max-w-[1170px]"
          >
            {testimonials.map((testimonial: TestimonialData, index: number) => (
              <div key={testimonial.id} className="flex-1 min-w-0">
                <TestimonialCard
                  testimonial={testimonial}
                  isActive={activeIndex === index}
                  onHover={() => setActiveIndex(index)}
                />
              </div>
            ))}
          </motion.div>

          <div className="flex md:hidden w-full overflow-x-auto gap-4 snap-x snap-mandatory px-4">
            {testimonials.map((testimonial: TestimonialData) => (
              <div
                key={testimonial.id}
                className="w-[calc(100%-32px)] flex-shrink-0 snap-start bg-[#093600] rounded-[20px] p-5 flex flex-col gap-12"
              >
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-[10px]">
                    <div className="flex items-center gap-[5px]">
                      {[...Array(5)].map((_: unknown, i: number) => (
                        <Star
                          key={i}
                          size={16}
                          fill="#F8933A"
                          stroke="#F8933A"
                        />
                      ))}
                    </div>
                    <span
                      className="text-[#85FA6D] text-[20px] font-bold leading-[28px]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {testimonial.rating.toFixed(1)}
                    </span>
                  </div>
                  <h3
                    className="text-white text-[20px] font-semibold leading-[28px] line-clamp-2"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {testimonial.headline}
                  </h3>
                  <p
                    className="text-white text-[16px] font-normal leading-[24px] tracking-[-0.4px] opacity-90 line-clamp-4"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {testimonial.text}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full border-[1.2px] border-[#EDFBEA] overflow-hidden shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="text-white text-[16px] font-semibold leading-[24px]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {testimonial.name}
                    </span>
                    <span
                      className="text-white text-[16px] font-normal leading-[24px] tracking-[-0.4px] opacity-80"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {testimonial.activeRole}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <motion.button
            variants={itemVariants}
            whileHover={{
              backgroundColor: "#74E05D",
              boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
            }}
            className="group flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#85FA6D] transition-all duration-250 ease-in-out"
          >
            <span
              className="text-[#093600] text-[18px] font-semibold"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Read more Reviews
            </span>
            <motion.div className="transition-transform duration-250 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight size={20} color="#093600" strokeWidth={2.5} />
            </motion.div>
          </motion.button>
        </div>
      </section>
    </>
  );
}
