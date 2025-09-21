import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AboutUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const sectionVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const staggerItem = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        ref={ref}
        style={{ y: yBg, opacity: opacityBg }}
        className="relative h-[60vh] md:h-[80vh] bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            About Dynamic Tech
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto"
          >
            Innovating the future through technology and creativity
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Company Overview */}
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="mb-20"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800"
            variants={staggerItem}
          >
            Who We Are
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <motion.div variants={staggerItem}>
              <p className="text-lg text-gray-600 mb-4">
                Dynamic Tech is a cutting-edge technology company founded by 17-year-old visionary Darrell Mucheri from Harare, Zimbabwe, dedicated to delivering innovative solutions that transform businesses and empower communities.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2023, we've quickly established ourselves as a trusted partner for businesses worldwide, helping them navigate the digital landscape with confidence and innovative solutions.
              </p>
              <p className="text-lg text-gray-600">
                Our young, passionate team combines fresh perspectives with technical excellence to create products that not only meet but exceed expectations.
              </p>
            </motion.div>
            <motion.div variants={staggerItem} className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-90"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800"
              variants={staggerItem}
            >
              Our Mission
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div 
                variants={staggerItem}
                className="bg-white p-6 rounded-xl shadow-md mb-6"
              >
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Empower Through Technology</h3>
                    <p className="text-gray-600">
                      To democratize access to cutting-edge technology solutions, enabling businesses of all sizes to compete in the digital age.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                variants={staggerItem}
                className="bg-white p-6 rounded-xl shadow-md mb-6"
              >
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Deliver Excellence</h3>
                    <p className="text-gray-600">
                      To consistently deliver high-quality, reliable, and scalable solutions that exceed client expectations and stand the test of time.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                variants={staggerItem}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Foster Innovation</h3>
                    <p className="text-gray-600">
                      To cultivate a culture of continuous innovation, pushing boundaries to solve complex problems with elegant, user-centric solutions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Vision Section */}
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="mb-20"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800"
            variants={staggerItem}
          >
            Our Vision
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={staggerItem}
              className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-2xl text-white shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl font-bold mb-4">01</div>
              <h3 className="text-xl font-semibold mb-4">Technological Leadership</h3>
              <p>
                To be recognized as a global leader in innovative technology solutions, setting industry standards for excellence and reliability.
              </p>
            </motion.div>
            <motion.div 
              variants={staggerItem}
              className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-2xl text-white shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl font-bold mb-4">02</div>
              <h3 className="text-xl font-semibold mb-4">Sustainable Growth</h3>
              <p>
                To build a sustainable, future-proof organization that grows responsibly while making a positive impact on society and the environment.
              </p>
            </motion.div>
            <motion.div 
              variants={staggerItem}
              className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-2xl text-white shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl font-bold mb-4">03</div>
              <h3 className="text-xl font-semibold mb-4">Global Impact</h3>
              <p>
                To empower millions of businesses worldwide with our technology, bridging gaps and creating opportunities across industries and borders.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="mb-20"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800"
            variants={staggerItem}
          >
            Our Core Values
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Innovation",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                description: "We challenge the status quo and embrace creative problem-solving."
              },
              {
                title: "Integrity",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                description: "We do what's right, even when no one is watching."
              },
              {
                title: "Collaboration",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                description: "We believe the best solutions come from teamwork and diverse perspectives."
              },
              {
                title: "Excellence",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                description: "We pursue mastery in everything we do, never settling for mediocrity."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-purple-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800"
            variants={staggerItem}
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12"
          >
            A diverse group of talented individuals united by a passion for technology and innovation.
          </motion.p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                name: "Darrell Mucheri",
                role: "CEO & Founder",
                image: null,
                initials: "DM"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                className="text-center"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl aspect-square">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-6xl font-bold">
                      {member.initials}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white text-left">
                      <p className="font-semibold">{member.name}</p>
                      <p className="text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutUs;