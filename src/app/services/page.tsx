"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";

// 🧩 Sections
import OurProcess from "@/sections/OurProcess";
import ServicesSection from "@/sections/ServicesSection";

// 🎨 Icons
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaMobileAlt,
  FaCloud,
  FaHtml5,
  FaCss3Alt,
  FaLaptopCode,
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
  SiFirebase,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiExpo,
  SiGraphql,
  SiNginx,
  SiPrisma,
  SiSupabase,
} from "react-icons/si";

// 🎬 Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Page = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="overflow-hidden">
      {/* 🟣 HERO SECTION */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-tr from-[#57007B] via-[#7B2CBF] to-[#F76680] text-white py-24 px-6 sm:px-12 md:px-20 overflow-hidden"
      >
        {" "}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -z-10" />{" "}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl -z-10" />{" "}
        <div className="max-w-4xl mx-auto text-center">
          {" "}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={mounted && heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide mb-6"
          >
            {" "}
            OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEE140] to-[#FA709A]">
              {" "}
              SERVICES{" "}
            </span>{" "}
          </motion.h1>{" "}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={mounted && heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl text-white/90 leading-relaxed"
          >
            {" "}
            At <span className="font-semibold text-white">Hexagonix</span>, we
            build scalable, secure, and cutting-edge digital products — from
            design to deployment.{" "}
          </motion.p>{" "}
          <motion.hr
            initial={{ scaleX: 0 }}
            animate={mounted && heroInView ? { scaleX: [0, 1] } : {}}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
            className="mt-10 w-20 h-[3px] mx-auto bg-gradient-to-r from-[#FEE140] to-[#FA709A] border-0 rounded-full origin-left"
          />{" "}
        </div>{" "}
      </section>

      {/* 🧩 SERVICES OVERVIEW */}
      <ServicesSection />

      {/* ⚙️ OUR PROCESS */}
      <OurProcess />

      {/* 🧠 OUR EXPERTISE */}
      <section className="bg-[#F8F7FC] py-24 px-4 md:px-10 lg:px-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-[#1A202C]">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#57007B] to-[#F76680]">
                Expertise
              </span>
            </h2>
            <p className="text-[#4A5568] text-lg leading-relaxed mb-6">
              We specialize in crafting digital experiences that combine
              technology and creativity.
            </p>
            <p className="text-[#4A5568] text-lg leading-relaxed">
              From frontend precision to backend power — our experts deliver
              seamless solutions across all layers of the stack.
            </p>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 gap-8"
          >
            {[
              {
                icon: <FaReact className="text-[#61DBFB] text-4xl" />,
                title: "Frontend Development",
                desc: "React, Next.js & Tailwind — blazing fast interfaces.",
              },
              {
                icon: <FaNodeJs className="text-[#539E43] text-4xl" />,
                title: "Backend Development",
                desc: "Scalable APIs using Node.js, Express & Django.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0px 10px 20px rgba(87,0,123,0.2)",
                }}
                transition={{ duration: 0.3 }}
                className="p-8 bg-white border border-[#E7DAED] rounded-2xl shadow-sm flex flex-col items-center text-center"
              >
                <div className="bg-gradient-to-tr from-[#57007B] to-[#F76680] w-14 h-14 flex items-center justify-center rounded-full mb-4 text-white shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#57007B] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 💻 TECH STACK */}
      <section className="py-24 px-4 md:px-10 lg:px-28 bg-white border-t border-[#E7DAED]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-12 text-[#1A202C]">
            Technologies{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#57007B] to-[#F76680]">
              We Work With.
            </span>
          </h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center"
          >
            {[
              { icon: <FaHtml5 />, name: "HTML5" },
              { icon: <FaCss3Alt />, name: "CSS3" },
              { icon: <FaReact />, name: "React" },
              { icon: <SiNextdotjs />, name: "Next.js" },
              { icon: <SiTailwindcss />, name: "Tailwind CSS" },
              { icon: <SiFramer />, name: "Framer Motion" },
              { icon: <SiRedux />, name: "Redux" },
              { icon: <SiJavascript />, name: "JavaScript" },
              { icon: <SiTypescript />, name: "TypeScript" },
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
              { icon: <FaAws />, name: "AWS" },
              { icon: <SiVercel />, name: "Vercel" },
              { icon: <SiDocker />, name: "Docker" },
              { icon: <SiKubernetes />, name: "Kubernetes" },
              { icon: <FaCloud />, name: "Cloudflare" },
              { icon: <SiExpo />, name: "React Native / Expo" },
              { icon: <FaMobileAlt />, name: "Mobile Apps" },
              { icon: <SiGraphql />, name: "GraphQL" },
              { icon: <SiNginx />, name: "Nginx" },
              { icon: <FaGitAlt />, name: "Git" },
              { icon: <FaGithub />, name: "GitHub" },
            ].map((tech, i) => (
              <motion.div
                key={i}
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
                <p className="text-sm font-medium text-[#4A5568]">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 🌍 INDUSTRIES WE SERVE */}
      <section className="bg-gray-50 py-24 px-4 md:px-10 lg:px-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#57007B] to-[#F76680] bg-clip-text text-transparent">
                Industries We Serve
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We collaborate with forward-thinking companies across industries,
              delivering technology that accelerates business growth.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <FaReact className="text-[#57007B] text-3xl" />,
                title: "E-commerce",
              },
              {
                icon: <FaMobileAlt className="text-[#F76680] text-3xl" />,
                title: "Healthcare",
              },
              {
                icon: <FaLaptopCode className="text-[#7B2CBF] text-3xl" />,
                title: "Education",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{
                  scale: 1.08,
                  y: -5,
                  boxShadow: "0px 10px 20px rgba(87,0,123,0.2)",
                }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 shadow-md flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 mb-4 rounded-full bg-gradient-to-tr from-[#57007B] to-[#F76680] flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#57007B]">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 💎 WHY CHOOSE US */}
      <section className="py-24 bg-gradient-to-tr from-[#57007B] via-[#7B2CBF] to-[#F76680] text-white text-center px-4 md:px-10 lg:px-28">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Why Choose <span className="text-[#FEE140]">Hexagonix?</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        >
          {[
            {
              icon: FaLaptopCode,
              title: "Expert Developers",
              desc: "Our seasoned engineers deliver optimized, scalable, and robust code across platforms.",
            },
            {
              icon: FaCloud,
              title: "Cloud-Native Architecture",
              desc: "We build solutions ready for global scale — with AWS, Vercel, and Docker deployment pipelines.",
            },
          ].map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 hover:shadow-2xl"
            >
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#FEE140] to-[#FA709A] text-[#57007B] text-3xl shadow-md">
                <Icon />
              </div>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-white/85 leading-relaxed text-sm">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Page;
