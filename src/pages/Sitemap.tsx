import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sitemap = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "Blogs", path: "/blogs" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", path: "/services/web-development" },
        { name: "Mobile App Development", path: "/services/mobile-app-development" },
        { name: "UI/UX Design", path: "/services/ui-ux-design" },
        { name: "Cloud Services", path: "/services/cloud-services" },
        { name: "Cybersecurity", path: "/services/cybersecurity" },
        { name: "AI & Machine Learning", path: "/services/ai-solutions" },
      ]
    },
   /* {
      title: "User Account",
      links: [
        { name: "Login", path: "/login" },
        { name: "Register", path: "/register" },
        { name: "Profile", path: "/profile" },
        { name: "Dashboard", path: "/dashboard" },
        { name: "Forgot Password", path: "/forgot-password" },
      ]
    },*/
    {
      title: "Legal & Support",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "FAQ", path: "/#faq" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <motion.h1 
        className="text-3xl md:text-4xl font-bold mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Sitemap
      </motion.h1>

      <p className="text-lg text-muted-foreground mb-12">
        Find all the pages available on our website organized by category.
      </p>

      <motion.div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {sitemapSections.map((section, index) => (
          <motion.div key={index} variants={itemVariants}>
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Sitemap;
