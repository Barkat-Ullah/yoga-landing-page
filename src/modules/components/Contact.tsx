"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Facebook, Instagram, Youtube, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ContactUs({
  className,
}: {
  className?: string;
}) {
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

  const contactInfo = [
    {
      label: "Office",
      value: "11022 South 51st Street Suite 105 Phoenix, AZ 85044",
    },
    { label: "Email", value: "hello@yscale.studio" },
    { label: "Phone", value: "(008)1234 4859" },
  ];

  const socialIcons = [Facebook, Instagram, Youtube];

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
        id="contact-01-section"
        className={
          "w-full bg-[#EDFBEA] flex justify-center " + (className || "")
        }
      >
        <motion.div
          id="contact-01-container"
          className="w-full max-w-[1440px] px-6 md:px-[135px] py-[80px] md:py-[120px] flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-[80px]"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left Content */}
          <div
            id="contact-01-left"
            className="flex flex-col gap-6 w-full lg:max-w-[520px]"
          >
            <motion.h2
              id="contact-01-heading"
              variants={itemVariants}
              className="text-[#093600] text-[36px] md:text-[48px] font-bold leading-[120%] tracking-[-0.3px]"
              style={{ fontFamily: '"Crimson Pro", serif' }}
            >
              Let&apos;s Start Your
              <br />
              Transformation Journey
            </motion.h2>
            <motion.p
              id="contact-01-description"
              variants={itemVariants}
              className="text-[#093600] text-[16px] leading-[24px] opacity-80 font-sans"
            >
              We would love to hear about your goals your fitness level and how
              we can help you build strength balance and lasting wellness.
            </motion.p>

            <motion.div
              id="contact-01-info-list"
              variants={itemVariants}
              className="flex flex-col mt-4"
            >
              {contactInfo.map(
                (item: { label: string; value: string }, idx: number) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-[#DDEBDD] border-b"
                  >
                    <span className="text-[#093600] text-[16px] font-medium opacity-60 font-sans">
                      {item.label}
                    </span>
                    <span className="text-[#093600] text-[16px] font-normal font-sans text-left sm:text-right sm:max-w-[300px]">
                      {item.value}
                    </span>
                  </div>
                ),
              )}
            </motion.div>

            <motion.div
              id="contact-01-follow"
              variants={itemVariants}
              className="flex items-center gap-4 mt-4"
            >
              <span className="text-[#093600] text-[16px] font-bold font-sans">
                Follow:
              </span>
              <div className="flex gap-3">
                {socialIcons.map((Icon, idx: number) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.1, opacity: 0.7 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#093600]"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Form */}
          <motion.div
            id="contact-01-form-card"
            variants={itemVariants}
            className="w-full lg:w-[520px] bg-white p-6 md:p-8 rounded-[24px] flex flex-col gap-5 shadow-sm"
          >
            <h3
              className="text-[#093600] text-[24px] font-semibold"
              style={{ fontFamily: '"Crimson Pro", serif' }}
            >
              Let&apos;s talk!
            </h3>

            <form className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-[#093600] text-[14px] font-medium font-sans">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-[14px] bg-[#EDFBEA] rounded-[12px] outline-none text-[14px] font-sans placeholder:opacity-60"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-[#093600] text-[14px] font-medium font-sans">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone"
                    className="w-full px-4 py-[14px] bg-[#EDFBEA] rounded-[12px] outline-none text-[14px] font-sans placeholder:opacity-60"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#093600] text-[14px] font-medium font-sans">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-[14px] bg-[#EDFBEA] rounded-[12px] outline-none text-[14px] font-sans placeholder:opacity-60"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#093600] text-[14px] font-medium font-sans">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your space, goals, or anything you'd like us to know"
                  className="w-full px-4 py-[14px] bg-[#EDFBEA] rounded-[12px] outline-none text-[14px] font-sans placeholder:opacity-60 h-[120px] resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  boxShadow: "0px 10px 24px rgba(0,0,0,0.12)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" as const }}
                className="group w-full bg-[#85FA6D] text-[#093600] py-4 rounded-full font-semibold flex items-center justify-center gap-2 mt-2"
              >
                Submit Your Query
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
