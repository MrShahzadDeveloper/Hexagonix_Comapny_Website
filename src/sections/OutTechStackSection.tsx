"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DiJava } from "react-icons/di";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaGithub,
  FaCloud,
  FaMobileAlt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiSupabase,
  SiDjango,
  SiFirebase,
  SiVercel,
  SiDocker,
  SiKubernetes,
  SiExpo,
  SiGraphql,
  SiNginx,
  SiPostman,
  SiFigma,
  SiJira,
  SiWebpack,
  SiBabel,
} from "react-icons/si";

// Motion variants
const cardVariants = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: 0 },
};

const OutTechStackSection = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "Front-End" | "Back-End" | "DevOps / Cloud" | "Mobile / Cross-Platform" | "Other Tools"
  >("Front-End");

  useEffect(() => {
    setMounted(true);
  }, []);

  const techStackData = {
    "Front-End": [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiFramer />, name: "Framer Motion" },
      { icon: <SiRedux />, name: "Redux" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiVercel />, name: "Vercel" },
      { icon: <SiWebpack />, name: "Webpack" },
      { icon: <SiBabel />, name: "Babel" },
    ],
    "Back-End": [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPrisma />, name: "Prisma" },
      { icon: <SiSupabase />, name: "Supabase" },
      { icon: <FaPython />, name: "Python" },
      { icon: <SiDjango />, name: "Django" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <SiGraphql />, name: "GraphQL" },
      { icon: <DiJava />, name: "Java" },
    ],
    "DevOps / Cloud": [
      { icon: <FaAws />, name: "AWS" },
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiKubernetes />, name: "Kubernetes" },
      { icon: <SiNginx />, name: "Nginx" },
      { icon: <FaCloud />, name: "Cloudflare" },
      { icon: <SiFirebase />, name: "Firebase" },
    ],
    "Mobile / Cross-Platform": [
      { icon: <SiExpo />, name: "React Native / Expo" },
      { icon: <FaMobileAlt />, name: "Mobile Apps" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiRedux />, name: "Redux" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiFirebase />, name: "Firebase" },
    ],
    "Other Tools": [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiFigma />, name: "Figma" },
      { icon: <SiJira />, name: "Jira" },
      { icon: <SiVercel />, name: "Vercel" },
    ],
  };

  if (!mounted) return null;

  return (
    <section className="py-24 px-4 md:px-10 lg:px-28 bg-white border-t border-[#E7DAED]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#1A202C]">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#57007B] to-[#F76680]">
            Tech Stack
          </span>
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.keys(techStackData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as keyof typeof techStackData)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#57007B] to-[#F76680] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Icons Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center">
            {techStackData[activeTab].map((tech) => (
              <motion.div
                key={tech.name}
                initial="initial"
                animate="animate"
                variants={cardVariants}
                whileHover={{
                  scale: 1.12,
                  rotate: 3,
                  y: -5,
                  boxShadow: "0px 12px 24px rgba(87, 0, 123, 0.25)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="flex flex-col items-center justify-center p-5 bg-[#F8F7FC] rounded-2xl shadow-sm hover:shadow-lg border border-[#E7DAED] w-32 h-32"
              >
                <div className="text-4xl text-[#57007B] mb-2">{tech.icon}</div>
                <p className="text-sm font-medium text-[#4A5568]">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutTechStackSection;
