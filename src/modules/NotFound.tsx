"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  MoveRight,
  Menu,
  X,
  Home,
  Wind,
  Sparkles,
  RefreshCw,
  Play,
  Pause,
  Users,
  CreditCard,
  MessageSquareQuote,
  Search,
} from "lucide-react";
import Footer from "@/modules/shared/Footer";

// Mindfulness quotes collection
const ZEN_QUOTES = [
  {
    quote: "Yoga is the journey of the self, through the self, to the self.",
    author: "The Bhagavad Gita",
  },
  {
    quote: "In the midst of movement and chaos, keep stillness inside of you.",
    author: "Deepak Chopra",
  },
  {
    quote: "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
    author: "Thich Nhat Hanh",
  },
  {
    quote: "Yoga does not just change the ways we see things, it transforms the person who sees.",
    author: "B.K.S. Iyengar",
  },
  {
    quote: "Quiet the mind, and the soul will speak.",
    author: "Ma Jaya Sati Bhagavati",
  },
  {
    quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha",
  },
];

// Quick recovery cards
const RECOVERY_CARDS = [
  {
    icon: Wind,
    title: "Mindful Programs",
    description:
      "Explore guided Vinyasa flows, breathwork sessions, and restorative evening rituals.",
    linkText: "Explore Classes",
    href: "/#programs",
    tag: "Programs",
    badgeColor: "bg-[#99ff66]/20 text-[#093600] border-[#99ff66]/40",
  },
  {
    icon: Users,
    title: "Master Guides & Coaches",
    description:
      "Connect with our certified wellness mentors and dedicated personal yoga instructors.",
    linkText: "Meet Our Team",
    href: "/#team",
    tag: "Coaching",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-200",
  },
  {
    icon: CreditCard,
    title: "Studio Memberships",
    description:
      "Discover flexible passes, private 1-on-1 sessions, and all-access digital tiers.",
    linkText: "View Pricing",
    href: "/#pricing",
    tag: "Plans",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
  },
  {
    icon: MessageSquareQuote,
    title: "Sanctuary Support",
    description:
      "Lost something specific or need tailored guidance? Reach out to our concierge.",
    linkText: "Contact Us",
    href: "/#contact",
    tag: "Support",
    badgeColor: "bg-sky-100 text-sky-900 border-sky-200",
  },
];

// Quick search tags
const QUICK_TAGS = [
  { label: "Vinyasa Flow", href: "/#programs" },
  { label: "Mindfulness & Calm", href: "/#programs" },
  { label: "1-on-1 Coaching", href: "/#team" },
  { label: "Membership Pricing", href: "/#pricing" },
  { label: "Studio Location", href: "/#contact" },
];

export default function NotFoundModule() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isQuoteSpinning, setIsQuoteSpinning] = useState(false);

  // Breathing Visualizer State
  const [isBreathingActive, setIsBreathingActive] = useState(true);
  const [breathPhase, setBreathPhase] = useState<"Inhale" | "Hold" | "Exhale" | "Rest">("Inhale");
  const [breathCount, setBreathCount] = useState(1);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);

  // Cycle mindful quotes
  const handleNextQuote = () => {
    setIsQuoteSpinning(true);
    setTimeout(() => {
      setQuoteIndex((prev) => (prev + 1) % ZEN_QUOTES.length);
      setIsQuoteSpinning(false);
    }, 200);
  };

  // Breathing Box Timer effect (4s inhale, 4s hold, 4s exhale, 4s rest)
  useEffect(() => {
    if (!isBreathingActive) return;

    const interval = setInterval(() => {
      setBreathCount((prev) => {
        if (prev >= 4) {
          setBreathPhase((currentPhase) => {
            if (currentPhase === "Inhale") return "Hold";
            if (currentPhase === "Hold") return "Exhale";
            if (currentPhase === "Exhale") return "Rest";
            // Rest -> Inhale
            setCyclesCompleted((c) => c + 1);
            return "Inhale";
          });
          return 1;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isBreathingActive]);

  const currentQuote = ZEN_QUOTES[quoteIndex];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f6f1ea] text-[#0f172a] selection:bg-[#99ff66] selection:text-[#093600]">
      {/* Floating Glassmorphism Navbar */}
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-6"
      >
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-black/5 bg-white/85 px-4 py-3 shadow-[0_12px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl md:px-6">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="relative h-[26px] w-[80px] md:h-[32px] md:w-[96px] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="https://cdn.jiro.build/Solra/Svg%20icon/Solra%20logo%20Primary.svg"
                alt="Solra Logo"
                fill
                priority
                sizes="(max-width: 768px) 80px, 96px"
                className="object-contain"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(11%) sepia(98%) saturate(1633%) hue-rotate(85deg) brightness(92%) contrast(106%)",
                }}
                referrerPolicy="no-referrer"
              />
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-[#1b1b1b] md:flex">
            <Link href="/" className="transition-all hover:text-[#093600] hover:font-semibold">
              Home
            </Link>
            <Link href="/#programs" className="transition-all hover:text-[#093600] hover:font-semibold">
              Programs
            </Link>
            <Link href="/#team" className="transition-all hover:text-[#093600] hover:font-semibold">
              Coaches
            </Link>
            <Link href="/#pricing" className="transition-all hover:text-[#093600] hover:font-semibold">
              Pricing
            </Link>
            <Link href="/#contact" className="transition-all hover:text-[#093600] hover:font-semibold">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#99ff66] px-5 py-2.5 text-sm font-semibold text-[#1b1b1b] shadow-sm transition-all hover:shadow-[0_0_20px_rgba(153,255,102,0.5)] hover:bg-[#85fa6d] active:scale-95"
            >
              <Home className="w-4 h-4" />
              <span>Back to Sanctuary</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-label="Toggle navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white text-[#1b1b1b] transition-colors hover:bg-black/5 md:hidden"
            >
              {isNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isNavOpen && (
              <motion.div
                key="mobile-nav"
                initial={{ opacity: 0, y: -10, scaleY: 0.96 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -10, scaleY: 0.96 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute left-0 right-0 top-[calc(100%+0.75rem)] overflow-hidden rounded-2xl border border-black/5 bg-white/95 p-4 shadow-2xl backdrop-blur-xl md:hidden"
              >
                <div className="flex flex-col gap-2.5 text-[#1b1b1b] font-medium">
                  {[
                    { name: "Home Sanctuary", href: "/" },
                    { name: "Yoga & Breath Programs", href: "/#programs" },
                    { name: "Meet The Coaches", href: "/#team" },
                    { name: "Membership Pricing", href: "/#pricing" },
                    { name: "Studio Contact", href: "/#contact" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsNavOpen(false)}
                      className="rounded-xl border border-black/5 px-4 py-3 text-base transition-colors hover:bg-[#99ff66]/15 hover:text-[#093600]"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/"
                    onClick={() => setIsNavOpen(false)}
                    className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#99ff66] px-5 py-3 text-base font-bold text-[#1b1b1b] shadow-md transition-all active:scale-95"
                  >
                    <Home className="w-4 h-4" />
                    <span>Return to Home</span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Main Content Body */}
      <main className="relative flex-1 w-full overflow-hidden pt-28 pb-20 md:pt-36 md:pb-24">
        {/* Ambient Decorative Backdrops */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-b from-[#85FA6D]/15 via-[#99ff66]/10 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />
        <div className="absolute top-80 -right-20 w-[350px] h-[350px] bg-amber-200/20 blur-3xl pointer-events-none -z-10 rounded-full" />
        <div className="absolute bottom-20 -left-20 w-[350px] h-[350px] bg-emerald-200/20 blur-3xl pointer-events-none -z-10 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Hero 404 Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 md:mb-24">
            {/* Left Column: Heading & Context */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Mindful Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-black/5 shadow-xs backdrop-blur-md mb-6">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5fdb48] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#093600]" />
                </span>
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#093600]">
                  404 • Lost in Stillness
                </span>
              </div>

              {/* Big Editorial 404 Display */}
              <div className="relative mb-4">
                <span
                  className="font-serif text-[84px] sm:text-[110px] md:text-[136px] font-bold text-[#093600]/10 leading-none select-none absolute -top-8 -left-2 sm:-top-12 sm:-left-4 pointer-events-none"
                  aria-hidden="true"
                >
                  404
                </span>
                <h1
                  className="relative font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-semibold text-[#0f172a] leading-[1.12] tracking-tight"
                  style={{ fontFamily: "var(--font-crimson-pro)" }}
                >
                  Take a Deep Breath, <br />
                  <span className="italic text-[#093600] font-normal">
                    You’ve Wandered Off The Mat
                  </span>
                </h1>
              </div>

              <p
                className="font-sans text-base sm:text-lg md:text-xl text-[#0f172a]/75 leading-relaxed max-w-2xl mb-8"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                The page you are looking for has dissolved into stillness or shifted along a new path.
                Release the tension, anchor your thoughts in the present moment, and let us guide you back home.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#99ff66] text-[#093600] font-bold text-base shadow-[0_8px_25px_rgba(153,255,102,0.4)] transition-all hover:bg-[#85fa6d] hover:shadow-[0_12px_32px_rgba(153,255,102,0.6)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Home className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  <span>Return to Sanctuary</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <a
                  href="#breathing-zone"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/80 border border-black/10 text-[#0f172a] font-semibold text-base shadow-xs backdrop-blur-md transition-all hover:bg-white hover:border-[#093600]/20 hover:shadow-md active:scale-95"
                >
                  <Wind className="w-5 h-5 text-[#093600]" />
                  <span>Try 1-Min Breathwork</span>
                </a>
              </div>

              {/* Quick Search Suggestions */}
              <div className="mt-8 pt-6 border-t border-black/5 w-full flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-black/50 mr-1 flex items-center gap-1">
                  <Search className="w-3.5 h-3.5" /> Quick paths:
                </span>
                {QUICK_TAGS.map((tag) => (
                  <Link
                    key={tag.label}
                    href={tag.href}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/70 border border-black/5 text-[#1b1b1b] hover:bg-[#99ff66]/30 hover:border-[#99ff66] hover:text-[#093600] transition-all"
                  >
                    {tag.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Interactive Mindful Breathing Visualizer */}
            <motion.div
              id="breathing-zone"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px] border border-black/5 bg-gradient-to-b from-white/90 to-white/70 p-6 sm:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                {/* Visualizer Top Bar */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#99ff66] flex items-center justify-center text-[#093600] shadow-xs">
                      <Wind className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="font-serif text-lg font-bold text-[#0f172a] leading-tight">
                        Mindful Pause
                      </h2>
                      <p className="text-xs text-black/50 font-sans">
                        Box Breathing Flow • {cyclesCompleted} cycles
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsBreathingActive(!isBreathingActive)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-black/5 hover:bg-black/10 transition-colors text-[#0f172a]"
                    aria-label={isBreathingActive ? "Pause breathing exercise" : "Start breathing exercise"}
                  >
                    {isBreathingActive ? (
                      <>
                        <Pause className="w-3.5 h-3.5 text-[#093600]" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 text-[#093600]" />
                        <span>Resume</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Concentric Animated Breathing Circle */}
                <div className="relative flex flex-col items-center justify-center py-6 sm:py-8">
                  {/* Outer Pulsing Glow */}
                  <motion.div
                    animate={{
                      scale:
                        breathPhase === "Inhale"
                          ? [1, 1.35]
                          : breathPhase === "Hold"
                          ? 1.35
                          : breathPhase === "Exhale"
                          ? [1.35, 1]
                          : 1,
                      opacity: breathPhase === "Hold" ? 0.35 : [0.15, 0.3, 0.15],
                    }}
                    transition={{
                      duration: 4,
                      ease: "easeInOut",
                    }}
                    className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-[#99ff66] via-[#85FA6D] to-emerald-300 blur-2xl pointer-events-none"
                  />

                  {/* Mid Animated Ring */}
                  <motion.div
                    animate={{
                      scale:
                        breathPhase === "Inhale"
                          ? [1, 1.22]
                          : breathPhase === "Hold"
                          ? 1.22
                          : breathPhase === "Exhale"
                          ? [1.22, 1]
                          : 1,
                      borderColor:
                        breathPhase === "Inhale"
                          ? "rgba(153, 255, 102, 0.8)"
                          : breathPhase === "Hold"
                          ? "rgba(9, 54, 0, 0.3)"
                          : "rgba(133, 250, 109, 0.5)",
                    }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                    className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border-2 border-dashed border-[#99ff66] pointer-events-none"
                  />

                  {/* Core Breathing Orb */}
                  <motion.div
                    animate={{
                      scale:
                        breathPhase === "Inhale"
                          ? [1, 1.15]
                          : breathPhase === "Hold"
                          ? 1.15
                          : breathPhase === "Exhale"
                          ? [1.15, 1]
                          : 1,
                    }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                    className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-[#093600] to-[#124b05] text-white flex flex-col items-center justify-center p-4 text-center shadow-xl"
                  >
                    <span className="text-[11px] uppercase tracking-widest text-[#99ff66] font-mono font-semibold mb-1">
                      {breathPhase}
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                      {breathCount}s
                    </span>
                    <span className="text-[10px] text-white/70 mt-1 font-sans">
                      {breathPhase === "Inhale" && "Draw in calm"}
                      {breathPhase === "Hold" && "Retain peace"}
                      {breathPhase === "Exhale" && "Let go of tension"}
                      {breathPhase === "Rest" && "Be still & centered"}
                    </span>
                  </motion.div>
                </div>

                {/* Breathing Phases Guide Steps */}
                <div className="grid grid-cols-4 gap-2 mt-4 pt-4 border-t border-black/5 text-center">
                  {[
                    { name: "Inhale", desc: "4s In" },
                    { name: "Hold", desc: "4s Hold" },
                    { name: "Exhale", desc: "4s Out" },
                    { name: "Rest", desc: "4s Still" },
                  ].map((step) => {
                    const isActive = breathPhase === step.name;
                    return (
                      <div
                        key={step.name}
                        className={`py-2 px-1 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-[#99ff66]/30 border border-[#99ff66] shadow-xs"
                            : "bg-black/[0.02] border border-transparent opacity-60"
                        }`}
                      >
                        <p
                          className={`text-xs font-bold ${
                            isActive ? "text-[#093600]" : "text-black/60"
                          }`}
                        >
                          {step.name}
                        </p>
                        <p className="text-[10px] text-black/50 font-mono">
                          {step.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Recovery Cards Grid (Where would you like to go?) */}
          <section className="mb-16 md:mb-24">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#093600] uppercase mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#99ff66]" />
                  Find Your Way Back
                </div>
                <h2
                  className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0f172a]"
                  style={{ fontFamily: "var(--font-crimson-pro)" }}
                >
                  Explore Our Sanctuary Portals
                </h2>
              </div>
              <p className="text-sm text-black/65 max-w-md font-sans">
                Choose any destination below to resume your wellness journey and re-align with our community.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {RECOVERY_CARDS.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ y: -6 }}
                    className="group relative flex flex-col justify-between rounded-[28px] border border-black/5 bg-white/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-md transition-all hover:bg-white hover:shadow-[0_20px_40px_rgba(15,23,42,0.09)] hover:border-[#99ff66]/60"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#f6f1ea] border border-black/5 flex items-center justify-center text-[#093600] transition-colors group-hover:bg-[#99ff66] group-hover:text-[#093600]">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span
                          className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${card.badgeColor}`}
                        >
                          {card.tag}
                        </span>
                      </div>

                      <h3
                        className="font-serif text-xl font-bold text-[#0f172a] mb-2 group-hover:text-[#093600] transition-colors"
                        style={{ fontFamily: "var(--font-crimson-pro)" }}
                      >
                        {card.title}
                      </h3>
                      <p className="text-sm text-black/65 font-sans leading-relaxed mb-6">
                        {card.description}
                      </p>
                    </div>

                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#093600] group-hover:text-[#124b05] no-underline transition-transform group-hover:translate-x-1"
                    >
                      <span>{card.linkText}</span>
                      <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Daily Zen Reflection / Philosophy Quote */}
          <section className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative overflow-hidden rounded-[32px] border border-black/5 bg-gradient-to-r from-[#093600] via-[#0d4702] to-[#093600] p-8 md:p-12 text-white shadow-2xl"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#85FA6D]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#99ff66] uppercase mb-4">
                    <Sparkles className="w-4 h-4" />
                    Mindful Reflection of the Moment
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={quoteIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <blockquote
                        className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal italic text-white/95 leading-snug mb-4"
                        style={{ fontFamily: "var(--font-crimson-pro)" }}
                      >
                        “{currentQuote.quote}”
                      </blockquote>
                      <cite className="font-sans text-sm text-[#99ff66] font-semibold not-italic tracking-wide">
                        — {currentQuote.author}
                      </cite>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex-shrink-0">
                  <button
                    type="button"
                    onClick={handleNextQuote}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold backdrop-blur-md transition-all active:scale-95 shadow-md"
                  >
                    <RefreshCw
                      className={`w-4 h-4 text-[#99ff66] ${
                        isQuoteSpinning ? "animate-spin" : ""
                      }`}
                    />
                    <span>New Reflection</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      {/* Branded Studio Footer */}
      <Footer />
    </div>
  );
}
