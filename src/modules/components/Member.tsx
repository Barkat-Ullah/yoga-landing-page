"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Bird,
  Camera,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";

interface Coach {
  id: number;
  name: string;
  role: string;
  image: string;
}

const coaches: Coach[] = [
  {
    id: 1,
    name: "Daniel Rahman",
    role: "Transformation Coach",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%201.png",
  },
  {
    id: 2,
    name: "Ryan Ahmed",
    role: "Fitness Trainer",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%202.png",
  },
  {
    id: 3,
    name: "Michael Hossain",
    role: "Yoga Expert",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%203.png",
  },
  {
    id: 4,
    name: "Hannah Burress",
    role: "Wellness Specialist",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%204.png",
  },
  {
    id: 5,
    name: "Stefan Person",
    role: "Personal Coach",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%205.png",
  },
  {
    id: 6,
    name: "David Miller",
    role: "Strength Expert",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%201.png",
  },
  {
    id: 7,
    name: "Marcus Rivera",
    role: "Holistic Coach",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%202.png",
  },
  {
    id: 8,
    name: "Alex Rivera",
    role: "Mindfulness Expert",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%203.png",
  },
  {
    id: 9,
    name: "James Nolan",
    role: "Nutritionist",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%204.png",
  },
  {
    id: 10,
    name: "Daniel Rahman",
    role: "Endurance Trainer",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%205.png",
  },
  {
    id: 11,
    name: "Imran Hossain",
    role: "Flexibility Coach",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%201.png",
  },
  {
    id: 12,
    name: "Chris Evans",
    role: "Recovery Specialist",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%202.png",
  },
  {
    id: 13,
    name: "Ryan Gosling",
    role: "Performance Coach",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%203.png",
  },
  {
    id: 14,
    name: "Tom Hardy",
    role: "Boxing Instructor",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%204.png",
  },
  {
    id: 15,
    name: "Henry Cavill",
    role: "Weightlifting Expert",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%205.png",
  },
  {
    id: 16,
    name: "Liam Neeson",
    role: "Tactical Trainer",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%201.png",
  },
  {
    id: 17,
    name: "Christian Bale",
    role: "Body Specialist",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%202.png",
  },
  {
    id: 18,
    name: "Hugh Jackman",
    role: "Agility Coach",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%203.png",
  },
  {
    id: 19,
    name: "Robert Downey",
    role: "Focus Expert",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%204.png",
  },
  {
    id: 20,
    name: "Chris Pratt",
    role: "Energy Coach",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%205.png",
  },
  {
    id: 21,
    name: "Paul Rudd",
    role: "Vitality Coach",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%201.png",
  },
  {
    id: 22,
    name: "Mark Ruffalo",
    role: "Balance Expert",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%202.png",
  },
  {
    id: 23,
    name: "Jeremy Renner",
    role: "Precision Coach",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%203.png",
  },
  {
    id: 24,
    name: "Benedict Cumberbatch",
    role: "Mental Coach",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%204.png",
  },
];

interface CoachCardProps {
  coach: Coach;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function CoachCard({ coach, isActive, onHover, onLeave }: CoachCardProps) {
  return (
    <div
      className="flex flex-col items-start w-full md:w-[274px] transition-all duration-300 ease-in-out"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <h3
        className="text-[24px] font-semibold leading-[32px] tracking-[-0.2px] mb-5 text-[#093600] font-serif"
        style={{ fontFamily: '"Crimson Pro", serif' }}
      >
        {coach.name}
      </h3>

      <div
        className={
          "relative w-full overflow-hidden transition-all duration-300 ease-in-out rounded-[4px] " +
          (isActive ? "h-[360px] scale-[1.03]" : "h-[260px] scale-100")
        }
      >
        <motion.img
          src={coach.image}
          alt={coach.name}
          className="w-full h-full object-cover"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut" as const,
            repeat: Infinity as number,
          }}
          referrerPolicy="no-referrer"
        />
        <AnimatePresence>
          {isActive && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6"
            >
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#85FA6D] hover:text-[#093600] transition-all duration-200"
                >
                  <ThumbsUp size={14} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#85FA6D] hover:text-[#093600] transition-all duration-200"
                >
                  <Bird size={14} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#85FA6D] hover:text-[#093600] transition-all duration-200"
                >
                  <Camera size={14} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        className={
          "transition-all duration-300 overflow-hidden " +
          (isActive ? "h-auto opacity-70 mt-3" : "h-0 opacity-0 mt-0")
        }
      >
        <p className="text-[#093600] text-[16px] font-normal font-sans">
          {coach.role}
        </p>
      </div>
    </div>
  );
}

export default function Team({ className }: { className?: string }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_isMobile, setIsMobile] = useState(false);
  const totalPages = 6;
  const coachesPerPage = 4;
  const autoSlideInterval = 5000;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentPage((prev) => (prev + newDirection + totalPages) % totalPages);
      setHoveredIndex(null);
    },
    [totalPages],
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      paginate(1);
    }, autoSlideInterval);
  }, [paginate]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer, currentPage]);

  const handleManualNav = (newDirection: number) => {
    paginate(newDirection);
  };

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

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const currentCoaches = coaches.slice(
    currentPage * coachesPerPage,
    (currentPage + 1) * coachesPerPage,
  );

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
          "w-full flex items-center justify-center bg-[#EDFBEA] py-[120px] px-4 md:px-[135px] overflow-hidden " +
          (className || "")
        }
      >
        <motion.div
          className="w-full max-w-[1440px] flex flex-col items-center gap-[80px]"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="flex flex-col items-center gap-4 max-w-[800px]">
            <motion.h2
              variants={itemVariants}
              className="text-[#093600] text-[48px] font-bold leading-[120%] text-center font-serif"
              style={{ fontFamily: '"Crimson Pro", serif' }}
            >
              Meet Your Expert Coaches
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-[#093600] text-[18px] leading-[28px] opacity-80 text-center font-normal font-sans"
            >
              Certified trainers dedicated to your strength balance and lasting
              transformation.
            </motion.p>
          </div>

          <div className="relative w-full max-w-[1170px] flex flex-col items-center gap-[48px]">
            <div className="relative w-full h-[448px] overflow-visible">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentPage}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring" as const, stiffness: 300, damping: 30 },
                    opacity: { duration: 0.5 },
                  }}
                  className="absolute inset-0 flex flex-row items-start justify-start md:justify-between gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide"
                >
                  {currentCoaches.map((coach: Coach, index: number) => (
                    <div
                      key={coach.id}
                      className="min-w-[80%] md:min-w-0 snap-center"
                    >
                      <CoachCard
                        coach={coach}
                        isActive={
                          hoveredIndex === null
                            ? index === 0
                            : hoveredIndex === index
                        }
                        onHover={() => setHoveredIndex(index)}
                        onLeave={() => setHoveredIndex(null)}
                      />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleManualNav(-1)}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-transparent text-[#093600] opacity-50 transition-all duration-[0.25s] ease-in-out hover:opacity-100 hover:scale-[1.05]"
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  onClick={() => handleManualNav(1)}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#093600] shadow-[0px_6px_16px_rgba(0,0,0,0.08)] transition-all duration-[0.25s] ease-in-out hover:scale-[1.05]"
                >
                  <ArrowRight size={20} />
                </button>
              </div>

              <div className="flex-1 max-w-[800px] h-[2px] bg-[#093600]/10 overflow-hidden relative">
                <motion.div
                  key={currentPage}
                  className="absolute left-0 top-0 h-full bg-[#093600]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" as const }}
                />
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-[#093600] text-[18px] font-semibold leading-[26px] tracking-[-0.18px] font-sans">
                  {(currentPage + 1) * 4}
                </span>
                <span className="text-[#093600] text-[14px] font-normal leading-[22px] opacity-70 font-sans">
                  / 24
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
