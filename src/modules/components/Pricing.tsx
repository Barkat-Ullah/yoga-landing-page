"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Variants } from "framer-motion";
import Link from "next/link";

interface PricingPlan {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  features: { text: string; included: boolean }[];
  buttonText: string;
  isActive?: boolean;
}

const plans: PricingPlan[] = [
  {
    id: 1,
    title: "Online Transformation",
    subtitle: "Perfect to start your transformation",
    price: "$49",
    buttonText: "Get Started Today",
    features: [
      { text: "Full access to online fitness", included: true },
      { text: "Guided mindfulness practices", included: true },
      { text: "Structured weekly program", included: true },
      { text: "Community access", included: true },
      { text: "Progress tracking", included: false },
    ],
  },
  {
    id: 2,
    title: "Community Plan",
    subtitle: "Perfect for support and motivation.",
    price: "$79",
    buttonText: "Join Community",
    isActive: true,
    features: [
      { text: "Full access to online fitness", included: true },
      { text: "Guided mindfulness practices", included: true },
      { text: "Structured weekly program", included: true },
      { text: "Community access", included: true },
      { text: "Progress tracking", included: false },
    ],
  },
  {
    id: 3,
    title: "1:1 Personal Coaching",
    subtitle: "Perfect for committed goal achievers",
    price: "$149",
    buttonText: "Get Started Today",
    features: [
      { text: "Full access to online fitness", included: true },
      { text: "Guided mindfulness practices", included: true },
      { text: "Structured weekly program", included: true },
      { text: "Community access", included: true },
      { text: "Progress tracking", included: false },
    ],
  },
];

export default function Pricing({ className }: { className?: string }) {
  const [activeCardId, setActiveCardId] = React.useState(2);

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
        href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        id="pricing-05-section"
        className={
          "w-full flex items-center justify-center bg-white py-[120px] px-4 md:px-[135px] overflow-hidden " +
          (className || "")
        }
      >
        <motion.div
          id="pricing-05-container"
          className="w-full max-w-[1440px] flex flex-col items-center gap-[80px]"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <div
            id="pricing-05-header"
            className="flex flex-col items-center gap-4 max-w-[720px]"
          >
            <motion.h2
              id="pricing-05-heading"
              variants={itemVariants}
              className="text-[#093600] text-[48px] font-bold leading-[120%] text-center tracking-[-0.3px]"
              style={{ fontFamily: '"Crimson Pro", serif' }}
            >
              Commit to Your Mind
              <br />
              and Body Growth
            </motion.h2>
            <motion.p
              id="pricing-05-subheading"
              variants={itemVariants}
              className="text-[#093600] text-[18px] leading-[28px] opacity-80 text-center font-normal font-sans"
            >
              Transparent pricing with no hidden fees and full support.
            </motion.p>
          </div>

          {/* Cards Container */}
          <div
            id="pricing-05-cards"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1170px]"
            onMouseLeave={() => setActiveCardId(2)}
          >
            {plans.map((plan: PricingPlan) => {
              const isActive = activeCardId === plan.id;

              return (
                <motion.div
                  key={plan.id}
                  id={"pricing-card-" + plan.id}
                  variants={itemVariants}
                  onMouseEnter={() => setActiveCardId(plan.id)}
                  whileHover={{
                    y: -6,
                    boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1] as const,
                  }}
                  className={
                    "flex flex-col justify-between p-8 rounded-[24px] transition-all duration-500 ease-in-out border " +
                    (isActive
                      ? "bg-[#093600] text-white border-transparent"
                      : "bg-white text-[#093600] border-[#E5E7EB]")
                  }
                >
                  <div className="flex flex-col gap-6">
                    {/* Card Header */}
                    <div className="flex flex-col gap-2">
                      <h3
                        className="text-[22px] font-semibold"
                        style={{ fontFamily: '"Crimson Pro", serif' }}
                      >
                        {plan.title}
                      </h3>
                      <p className="text-[16px] opacity-80 font-sans">
                        {plan.subtitle}
                      </p>
                    </div>

                    <div
                      className={
                        "h-[1px] w-full transition-colors duration-500 " +
                        (isActive ? "bg-white/10" : "bg-black/10")
                      }
                    />

                    {/* Included Section */}
                    <div className="flex flex-col gap-3">
                      <h4 className="text-[16px] font-semibold font-sans">
                        Included:
                      </h4>
                      <ul className="flex flex-col gap-4">
                        {plan.features.map(
                          (
                            feature: { text: string; included: boolean },
                            idx: number,
                          ) => (
                            <li key={idx} className="flex items-center gap-3">
                              {feature.included ? (
                                <CheckCircle2
                                  size={20}
                                  className={
                                    "transition-colors duration-500 " +
                                    (isActive
                                      ? "text-[#85FA6D]"
                                      : "text-[#093600]")
                                  }
                                />
                              ) : (
                                <XCircle size={20} className="opacity-40" />
                              )}
                              <span
                                className={
                                  "text-[16px] font-sans transition-opacity duration-500 " +
                                  (!feature.included
                                    ? "opacity-40"
                                    : "opacity-100")
                                }
                              >
                                {feature.text}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Price and Button */}
                  <div className="flex flex-col gap-6 mt-8">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[14px] opacity-60 font-sans">
                        Start from
                      </span>
                      <span
                        className="text-[36px] font-semibold"
                        style={{ fontFamily: '"Crimson Pro", serif' }}
                      >
                        {plan.price}
                      </span>
                      <span className="text-[14px] opacity-60 font-sans">
                        /month
                      </span>
                    </div>

                    <motion.a
                      href={plan.id === 2 ? "#login" : "#contact"}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: isActive
                          ? "0px 12px 24px rgba(133, 250, 109, 0.4)"
                          : "0px 12px 24px rgba(0,0,0,0.12)",
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" as const }}
                      whileTap={{ scale: 0.98 }}
                      className={
                        "group flex items-center justify-center gap-2 py-[14px] px-6 rounded-full text-[16px] font-medium transition-all duration-500 ease-in-out cursor-pointer " +
                        (isActive
                          ? "bg-[#85FA6D] text-[#093600]"
                          : "bg-[#EDFBEA] text-[#093600]")
                      }
                    >
                      {plan.buttonText}
                      {isActive ? (
                        <ArrowUpRight
                          size={18}
                          className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      ) : (
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-500 group-hover:translate-x-1"
                        />
                      )}
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </>
  );
}
