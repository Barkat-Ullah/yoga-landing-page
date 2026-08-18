"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MoveRight, Menu, X } from "lucide-react";

// Navbar sub-component
function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-6"
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-black/5 bg-white/80 px-4 py-3 shadow-[0_12px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl md:px-6">
        <div className="flex-shrink-0">
          <div className="relative h-[26px] w-[80px] md:h-[32px] md:w-[96px]">
            <Image
              src="https://cdn.jiro.build/Solra/Svg%20icon/Solra%20logo%20Primary.svg"
              alt="Solra Logo"
              fill
              priority
              loading="eager"
              sizes="(max-width: 768px) 80px, 96px"
              className="object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(11%) sepia(98%) saturate(1633%) hue-rotate(85deg) brightness(92%) contrast(106%)",
              }}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium text-[#1b1b1b] md:flex">
          <a href="#" className="transition-opacity hover:opacity-70">
            Home
          </a>
          <a href="#" className="transition-opacity hover:opacity-70">
            About
          </a>
          <a href="#" className="transition-opacity hover:opacity-70">
            Contact
          </a>
          <a href="#" className="transition-opacity hover:opacity-70">
            Programs
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden bg-[#99ff66] px-5 py-2.5 text-sm font-semibold text-[#1b1b1b] transition-all hover:shadow-lg active:scale-95 sm:block sm:rounded-full">
            Book a Call
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white text-[#1b1b1b] transition-colors hover:bg-black/5 md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10, scaleY: 0.96 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -10, scaleY: 0.96 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 top-[calc(100%+0.75rem)] overflow-hidden rounded-2xl border border-black/5 bg-white/95 p-4 shadow-2xl md:hidden"
            >
              <div className="flex flex-col gap-3 text-[#1b1b1b] font-medium">
                {["Home", "About", "Contact", "Programs"].map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-xl border border-black/5 px-3 py-3 text-base transition-colors hover:bg-black/5"
                  >
                    {item}
                  </motion.a>
                ))}
                <button className="mt-1 rounded-full bg-[#99ff66] px-5 py-3 text-base font-bold text-[#1b1b1b] shadow-lg">
                  Book a Call
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

// CoachCard sub-component
function CoachCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="md:absolute md:bottom-8 md:right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 w-full md:max-w-xs shadow-2xl group cursor-pointer hover:bg-white/20 transition-all mt-8 md:mt-0"
    >
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop"
          alt="William Johnson"
          fill
          sizes="(max-width: 768px) 64px, 64px"
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="text-white font-semibold text-sm">William Johnson</h4>
        <p className="text-white/70 text-xs mb-2">
          Certified fitness &amp; yoga coach
        </p>
        <div className="flex items-center gap-1 text-[#99ff66] text-xs font-bold">
          <span>Lets talk</span>
          <MoveRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}

// LogoMarquee sub-component
function LogoMarquee() {
  const logos = [
    <span key="1" className="text-xl font-bold text-[#1b1b1b] tracking-tight">
      converse.ai
    </span>,
    <div
      key="2"
      className="flex items-center gap-1 text-xl font-bold text-[#1b1b1b]"
    >
      Linktree<span className="text-[#1b1b1b] text-2xl leading-none">*</span>
    </div>,
    <div
      key="3"
      className="flex items-center gap-1.5 text-xl font-bold text-[#1b1b1b]"
    >
      <div className="flex gap-0.5">
        <div className="w-1 h-4 bg-[#1b1b1b]" />
        <div className="w-1 h-4 bg-[#1b1b1b]" />
      </div>
      ElevenLabs
    </div>,
    <div
      key="4"
      className="flex items-center gap-2 text-xl font-bold text-[#1b1b1b]"
    >
      <svg
        width="20"
        height="12"
        viewBox="0 0 20 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-80"
      >
        <path
          d="M2 10C3.5 10 4.5 2 6 2C7.5 2 8.5 10 10 10C11.5 10 12.5 2 14 2C15.5 2 16.5 10 18 10"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      RIPPLING
    </div>,
  ];

  const tripled = [...logos, ...logos, ...logos];

  return (
    <div className="overflow-hidden w-full relative group">
      <motion.div
        className="flex items-center gap-12 md:gap-20 whitespace-nowrap py-2"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          ease: "linear" as const,
          repeat: Infinity as number,
        }}
        style={{ width: "fit-content" }}
      >
        {tripled.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 opacity-60 grayscale hover:grayscale-0 transition-all hover:opacity-100"
          >
            {logo}
          </div>
        ))}
      </motion.div>
      {/* Gradient masks for smooth fade edges */}
      <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    </div>
  );
}

export default function Header05Solra({ className }: { className?: string }) {
  return (
    <>
      <section className={"w-full bg-white font-sans " + (className || "")}>
        <Navbar />

        <main className="mx-auto max-w-7xl px-4 pb-20 pt-28 md:px-8 md:pt-32">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex min-h-[600px] w-full flex-col justify-end overflow-hidden rounded-[32px] p-6 shadow-2xl md:min-h-[700px] md:rounded-[40px] md:p-12"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="https://cdn.jiro.build/Solra/background%20image/BG%20Header%2005.png"
                alt="Yoga and fitness hero background"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 53.43%, rgba(0, 0, 0, 0.52) 100%), linear-gradient(236deg, rgba(0, 0, 0, 0.00) 58.28%, rgba(0, 0, 0, 0.80) 96.47%)",
                }}
              />
            </div>
            {/* Hero Content */}
            <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
              <div className="flex flex-col gap-4 md:gap-6 max-w-3xl">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="text-[#FFF] text-4xl sm:text-5xl md:text-[68px] leading-tight md:leading-[72px] tracking-tight md:tracking-[-1.6px]"
                  style={{
                    fontFamily: "var(--font-crimson-pro)",
                    fontWeight: 600,
                  }}
                >
                  Stronger Every Day and <br className="hidden sm:block" />
                  <span className="italic">Calmer Every Moment</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-white opacity-80 text-base md:text-xl leading-relaxed md:leading-[28px] max-w-[600px]"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                  }}
                >
                  Online programs live community sessions and 1-on-1 coaching to
                  help you build lasting strength and inner clarity.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 mt-4"
                >
                  <button className="group bg-[#99ff66] text-[#1b1b1b] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(153,255,102,0.4)] transition-all active:scale-95">
                    Start Your Journey
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <button className="bg-white text-[#1b1b1b] px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all active:scale-95">
                    Join Member
                  </button>
                </motion.div>
              </div>

              <CoachCard />
            </div>
          </motion.div>

          {/* About Section Preview */}
          <section className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-3">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#1b1b1b] uppercase">
                <div className="w-1.5 h-1.5 rounded-full bg-[#99ff66]" />
                About Us
              </div>
            </div>
            <div className="md:col-span-9 flex flex-col gap-12">
              <h4
                className="text-[#0A0D12] max-w-4xl text-xl sm:text-2xl md:text-[30px] leading-snug md:leading-[36px] tracking-tight"
                style={{
                  fontFamily: "var(--font-crimson-pro)",
                  fontWeight: 600,
                }}
              >
                From our studio to your home, we deliver personalized coaching
                online programs and community sessions to help you build
                strength reduce stress and transform your lifestyle.
              </h4>

              {/* Brands Row - Continuous Marquee */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full overflow-hidden">
                <span className="text-sm font-medium text-[#71717a] whitespace-nowrap flex-shrink-0">
                  as seen in
                </span>
                <LogoMarquee />
              </div>
            </div>
          </section>
        </main>
      </section>
    </>
  );
}
