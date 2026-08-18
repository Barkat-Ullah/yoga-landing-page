"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    navigate: [
      { name: "Services", href: "#" },
      { name: "About", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Reviews", href: "#" },
    ],
    solution: [
      { name: "Latest News", href: "#" },
      { name: "Career", href: "#" },
      { name: "Gain Profession", href: "#" },
      { name: "Blogs", href: "#" },
    ],
    followUs: [
      { name: "Facebook", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "Youtube", href: "#" },
      { name: "LinkedIn", href: "#" },
    ],
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#093600]">
      {/* Background Image & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.jiro.build/Solra/background%20image/BG%20Footer%2002.png"
          alt="Footer Background"
          fill
          sizes="100vw"
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(9, 54, 0, 0.00) 0%, #093600 80%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-[1440px] mx-auto px-6 md:px-[135px] pt-[130px] pb-0">
        {/* Top CTA Area */}
        <div className="flex flex-col items-center text-center w-full mb-[130px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-[42px] md:text-[52px] font-semibold text-white leading-[1.2] md:leading-[56px] tracking-[-0.8px] mb-4"
          >
            Train With Expert Coaches Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-[16px] md:text-[18px] text-white/70 max-w-[520px] leading-[1.5] mb-8"
          >
            Schedule your coaching session and begin your mind and body
            transformation journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="#"
              className="group flex px-7 py-3 md:py-4 justify-center items-center gap-3 rounded-full bg-[#85FA6D] text-[#0f1a0e] text-[15px] font-bold no-underline transition-all hover:bg-[#5fdb48] hover:shadow-[0_8px_28px_rgba(133,250,109,0.30)] w-full sm:w-auto overflow-hidden"
            >
              Get Started Today
              <span
                className="flex flex-col items-center h-4 overflow-hidden"
                aria-hidden="true"
              >
                <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-full" />
                <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-full" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Footer Content Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[64px] w-full mb-[64px]">
          {/* Left (Logo+Text) */}
          <div className="flex flex-col items-start gap-4 w-full lg:w-[275px] shrink-0">
            <div className="flex items-center w-[175px] h-10">
              <div className="relative h-full flex items-center justify-start">
                <Image
                  src="https://cdn.jiro.build/Solra/Svg%20icon/Logo%201.svg"
                  alt="FitZen Logo"
                  width={175}
                  height={40}
                  className="w-auto h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <p className="font-sans text-[16px] text-white/60 leading-[1.6]">
              A complete mind and body transformation ecosystem designed to
              deliver measurable results lasting habits.
            </p>
          </div>

          {/* Right 3 Column */}
          <div className="flex flex-1 flex-col sm:flex-row justify-start lg:justify-end items-start gap-12 sm:gap-[64px] w-full">
            {/* Navigate & Solution Row */}
            <div className="flex flex-row gap-8 sm:gap-[64px]">
              {/* Column 1 - Navigate */}
              <div className="flex w-[164px] flex-col items-start gap-4 shrink-0">
                <h4 className="font-serif text-[20px] font-bold text-white">
                  Navigate
                </h4>
                <ul className="flex flex-col items-start gap-3">
                  {footerLinks.navigate.map(
                    (link: { name: string; href: string }) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="font-sans text-[16px] text-white/70 hover:text-[#85FA6D] transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Column 2 - Solution */}
              <div className="flex w-[164px] flex-col items-start gap-4 shrink-0">
                <h4 className="font-serif text-[20px] font-bold text-white">
                  Solution
                </h4>
                <ul className="flex flex-col items-start gap-3">
                  {footerLinks.solution.map(
                    (link: { name: string; href: string }) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="font-sans text-[16px] text-white/70 hover:text-[#85FA6D] transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            {/* Column 3 - Follow Us */}
            <div className="flex w-[164px] flex-col items-start gap-4 shrink-0">
              <h4 className="font-serif text-[20px] font-bold text-white">
                Follow Us
              </h4>
              <ul className="flex flex-col items-start gap-3">
                {footerLinks.followUs.map(
                  (link: { name: string; href: string }) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="font-sans text-[16px] text-white/70 hover:text-[#85FA6D] transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="w-full max-w-[1280px] mt-auto">
          <div className="w-full h-[1px] bg-white/10 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 md:mb-[130px]">
            <p className="font-sans text-[12px] md:text-[14px] text-white/40 text-center md:text-left tracking-wide">
              ©Copyright Yscale.studio | All rights reserved. 2026
            </p>
            <div className="flex items-center gap-6 md:gap-12">
              <Link
                href="#"
                className="font-sans text-[12px] md:text-[14px] text-white/40 hover:text-white transition-colors tracking-wide"
              >
                Privacy & Policy
              </Link>
              <Link
                href="#"
                className="font-sans text-[12px] md:text-[14px] text-white/40 hover:text-white transition-colors tracking-wide"
              >
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>

        {/* Large Logo Section */}
        <div className="w-full max-w-[1170px] pointer-events-none select-none flex justify-center items-center mx-auto overflow-hidden">
          {/* Mobile Logo */}
          <div className="flex md:hidden w-[350px] h-[90px] justify-center items-center shrink-0">
            <Image
              src="https://cdn.jiro.build/Solra/Svg%20icon/Footer%20logo%20Text%20Solra%20mobile.svg"
              alt="Solra Logo"
              width={350}
              height={90}
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Desktop/Tablet Logo */}
          <div className="hidden md:flex w-full max-w-[1170px] h-auto aspect-[1170/298] justify-center items-center shrink-0">
            <Image
              src="https://cdn.jiro.build/Solra/Svg%20icon/Footer%20logo%20Text%20Solra%20mobile.svg"
              alt="Solra Logo"
              width={1170}
              height={298}
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
