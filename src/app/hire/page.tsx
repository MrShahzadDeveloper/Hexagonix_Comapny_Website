"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaClock, FaEnvelopeOpenText } from "react-icons/fa";

const HirePage = () => {
  return (
    <section className="relative py-6 bg-gradient-to-tr from-[#57007B] via-[#7B2CBF] to-[#F76680] min-h-screen flex flex-col items-center justify-center text-center text-white px-6 sm:px-10">
      {/* Background glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl -z-10"></div>

      {/* Header Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-md p-6 rounded-full border border-white/20 shadow-lg mb-8"
      >
        <FaBriefcase className="text-5xl text-[#FEE140]" />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide mb-4"
      >
        We're Not <span className="text-[#FEE140]">Hiring</span> Right Now
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-2xl text-white/80 text-lg leading-relaxed mb-8"
      >
        Thank you for your interest in joining <span className="font-semibold text-white">Hexagonix</span>.
        We truly appreciate your enthusiasm!  
        At the moment, we don’t have any open positions — but new opportunities are always on the horizon.
      </motion.p>

      {/* Info Cards (Optimized Smooth Animation) */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
  {[
    {
      icon: <FaClock className="text-[#FEE140] text-3xl" />,
      title: "Stay Tuned",
      desc: "We’ll announce new roles soon. Follow our social channels for updates.",
    },
    {
      icon: <FaEnvelopeOpenText className="text-[#FEE140] text-3xl" />,
      title: "Keep in Touch",
      desc: "You can send us your portfolio or resume — we’ll reach out when a suitable position opens.",
    },
    {
      icon: <FaBriefcase className="text-[#FEE140] text-3xl" />,
      title: "Work with Us",
      desc: "We collaborate with freelancers and partners on exciting projects around the world.",
    },
  ].map((card, i) => (
    <motion.div
      key={i}
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.06,
        y: -6,
      }}
      className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 
                 hover:bg-white/20 transition-transform duration-300 ease-out
                 will-change-transform"
      style={{ transformPerspective: 1000 }}
    >
      <div className="mb-4 flex justify-center">{card.icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
      <p className="text-sm text-white/80 leading-relaxed">{card.desc}</p>
    </motion.div>
  ))}
</div>


    </section>
  );
};

export default HirePage;
