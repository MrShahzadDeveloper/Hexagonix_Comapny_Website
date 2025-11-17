"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Layers,
  Workflow,
  Cpu,
  Clock,
  Handshake,
  Award,
  Star,
  Heart,
} from "lucide-react";
import TeamSection from "@/sections/TeamSection";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// ======== Animation Variants ==========
const fadeUpStagger: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const fadeItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
// ======================================

// 🧩 Child component for Achievement Card
const AchievementCard = ({ icon, number, title }: any) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // ✅ Format large numbers to show k+
  const formatNumber = (num: number) => {
    if (num >= 1000) return `${num / 1000}k+`;
    return `${num}+`;
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeItem}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center text-center p-8 bg-gradient-to-tr from-[#FEE140]/10 to-[#FA709A]/10 rounded-2xl shadow-sm border border-[#E7DAED] hover:shadow-lg"
    >
      <div className="mb-4 text-[#57007B] text-5xl">{icon}</div>
      <h3 className="text-3xl font-bold text-[#57007B] mb-2">
        {mounted && inView ? (
          <>
            <CountUp
              end={number >= 1000 ? Math.floor(number / 1000) : number}
              duration={2}
              decimals={0}
              separator=","
            />
            {number >= 1000 ? "k+" : "+"}
          </>
        ) : (
          0
        )}
      </h3>

      <p className="text-[#4A5568] text-sm">{title}</p>
    </motion.div>
  );
};

// ======================================

const AboutPage = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // Prevent hydration mismatch

  const whyChooseUs = [
    {
      title: "Full-Service Expertise",
      desc: "From UI/UX design to full-stack development, our team ensures every stage of your digital journey is handled seamlessly and effectively.",
      icon: <Layers size={28} className="text-white" />,
    },
    {
      title: "End-to-End Project Management",
      desc: "Clear communication, agile workflows, and transparent milestones to deliver results on time and beyond expectations.",
      icon: <Workflow size={28} className="text-white" />,
    },
    {
      title: "Modern Tech Stack",
      desc: "Using cutting-edge frameworks and technologies, we build fast, secure, and scalable solutions tailored to your business needs.",
      icon: <Cpu size={28} className="text-white" />,
    },
    {
      title: "On-Time Delivery",
      desc: "Our structured approach and disciplined execution ensure every project meets deadlines without compromising quality.",
      icon: <Clock size={28} className="text-white" />,
    },
    {
      title: "Long-Term Partnership",
      desc: "We don’t just complete projects — we build meaningful, lasting partnerships that help your business continue to grow.",
      icon: <Handshake size={28} className="text-white" />,
    },
    {
      title: "Proven Track Record",
      desc: "Trusted by startups and enterprises alike, our portfolio speaks for itself — delivering consistent quality and measurable results.",
      icon: <Award size={28} className="text-white" />,
    },
  ];

  const coreValues = [
    {
      title: "Innovation",
      desc: "We thrive on creativity and innovation, constantly pushing boundaries to deliver cutting-edge solutions.",
      icon: <Star size={28} className="text-white" />,
    },
    {
      title: "Integrity",
      desc: "Honesty, transparency, and ethical practices guide every decision we make.",
      icon: <Heart size={28} className="text-white" />,
    },
    {
      title: "Collaboration",
      desc: "We believe teamwork drives success, fostering strong partnerships internally and externally.",
      icon: <Handshake size={28} className="text-white" />,
    },
  ];

  const achievements = [
    { icon: <Award size={36} />, number: 150, title: "Projects Completed" },
    { icon: <Handshake size={36} />, number: 100, title: "Happy Clients" },
    { icon: <Cpu size={36} />, number: 200000, title: "Lines of Code" },
    { icon: <Clock size={36} />, number: 10, title: "Years of Experience" },
  ];

  return (
    <div className="overflow-hidden">
      {/* 🌟 HERO SECTION */}
      <motion.section
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative bg-gradient-to-tr from-[#57007B] via-[#7B2CBF] to-[#F76680] text-white py-28 px-6 sm:px-12 md:px-20 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl -z-10" />

        <motion.div
          variants={fadeUpStagger}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeItem}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEE140] to-[#FA709A] text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-wide"
          >
            Who We Are
          </motion.h2>

          <motion.h1
            variants={fadeItem}
            className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
          >
            Empowering Ideas Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEE140] to-[#FA709A]">
              Digital Innovation
            </span>
          </motion.h1>

          <motion.p
            variants={fadeItem}
            className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
          >
            At <span className="font-semibold text-white">Hexagonix</span>,
            we’re your strategic partner in building transformative digital
            experiences. From startups to enterprises, we turn vision into
            reality through creativity, technology, and innovation — one pixel
            at a time.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* 🎯 MISSION & VISION */}
      <motion.section
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#F8F7FC] py-20 px-6 sm:px-12 md:px-20"
      >
        <motion.div
          variants={fadeUpStagger}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeItem}
            className="text-4xl font-bold mb-12 text-[#1A202C]"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#57007B] to-[#F76680]">
              Mission & Vision
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 text-[#4A5568]">
            <motion.div
              variants={fadeItem}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-[#E7DAED] hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#57007B]">
                Mission
              </h3>
              <p className="text-lg leading-relaxed">
                To bridge the gap between imagination and execution by
                delivering high-performance digital products that redefine user
                experiences and accelerate business growth.
              </p>
            </motion.div>

            <motion.div
              variants={fadeItem}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-[#E7DAED] hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#57007B]">Vision</h3>
              <p className="text-lg leading-relaxed">
                To create a world where every business — big or small — has
                access to beautifully designed, technologically advanced, and
                intelligently built digital solutions that make a lasting
                impact.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* 🏗️ OUR STORY */}
      <motion.section
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-6 sm:px-12 md:px-20 bg-white border-y border-[#E7DAED]"
      >
        <motion.div
          variants={fadeUpStagger}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeItem}
            className="text-4xl font-bold mb-6 text-[#1A202C]"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#57007B] to-[#F76680]">
              Story
            </span>
          </motion.h2>

          <motion.p
            variants={fadeItem}
            className="text-[#4A5568] text-lg leading-relaxed max-w-3xl mx-auto"
          >
            <span className="font-semibold text-[#57007B]">Hexagonix</span>{" "}
            began with a vision — to unite creativity and technology to
            transform ideas into real-world digital experiences. What started as
            a small team of passionate designers and developers has evolved into
            a full-service digital agency serving clients worldwide.
            <br />
            Today, we continue to push boundaries, crafting modern, scalable,
            and future-ready solutions that empower businesses to grow, adapt,
            and succeed in the ever-changing digital landscape.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* 👥 TEAM SECTION */}
      <TeamSection />

      {/* 🤝 WHY CHOOSE US */}
      <motion.section
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-6 sm:px-12 md:px-20 bg-[#F8F7FC]"
      >
        <motion.div
          variants={fadeUpStagger}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeItem}
            className="text-4xl font-bold mb-12 text-[#1A202C]"
          >
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#57007B] to-[#F76680]">
              Choose Us
            </span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeItem}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center bg-white p-10 rounded-2xl border border-[#E7DAED] shadow-sm hover:shadow-xl min-h-[360px] justify-between"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#57007B] to-[#F76680] mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#57007B]">
                  {item.title}
                </h3>
                <p className="text-[#4A5568] text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* 🏆 ACHIEVEMENTS */}
      <motion.section
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-6 sm:px-12 md:px-20 bg-white border-t border-[#E7DAED]"
      >
        <motion.div
          variants={fadeUpStagger}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeItem}
            className="text-4xl font-bold mb-12 text-[#1A202C]"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#57007B] to-[#F76680]">
              Achievements
            </span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {achievements.map((item, i) => (
              <AchievementCard key={i} {...item} />
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* ⭐ CORE VALUES SECTION */}
      <motion.section
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-6 sm:px-12 md:px-20 bg-gradient-to-tr from-[#57007B] via-[#7B2CBF] to-[#F76680] text-white"
      >
        <motion.div
          variants={fadeUpStagger}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2 variants={fadeItem} className="text-4xl font-bold mb-12">
            Our <span className="text-yellow-300">Core Values</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {coreValues.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeItem}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 hover:shadow-2xl min-h-[300px] justify-between"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/90 text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
