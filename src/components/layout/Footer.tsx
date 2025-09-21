import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiMail, FiArrowUp } from 'react-icons/fi';
import { FaTiktok, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Logo } from '@/components/ui/logo';

const socialLinks = [
  { name: 'GitHub', icon: FiGithub, url: 'https://github.com/mauricegift' },
  { name: 'Twitter', icon: FiTwitter, url: 'https://twitter.com/GiftedMauriceKe' },
  { name: 'Whatsapp', icon: FaWhatsapp, url: 'https://whatsapp.com/channel/0029Vb3hlgX5kg7G0nFggl0Y' },
  { name: 'Instagram', icon: FiInstagram, url: 'https://instagram.com/giftedtechnexus' },
  { name: 'Email', icon: FiMail, url: 'mailto:contact@giftedtech.web.id' }   
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'About', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { name: 'Web Development', path: '/services/web-development' },
  { name: 'Mobile App Development', path: '/services/mobile-app-development' },
  { name: 'UI/UX Design', path: '/services/ui-ux-design' },
  { name: 'Cloud Services', path: '/services/cloud-services' },
  { name: 'Cybersecurity', path: '/services/cybersecurity' },
  { name: 'AI & Machine Learning', path: '/services/ai-solutions' },
];

// Animation variants
const footerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScroll = docHeight - windowHeight;
      const progress = (scrollTop / totalScroll) * 100;
      
      setScrollProgress(progress);
      setShowScrollButton(scrollTop > windowHeight / 4);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <motion.footer 
        className="bg-muted/30 relative"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Wavy top border with gradient */}
        <div className="absolute top-0 left-0 right-0 h-4 overflow-hidden">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="absolute top-0 left-0 w-full h-full"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              fill="url(#waveGradient)" 
              opacity=".25" 
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1EAEDB" />
                <stop offset="100%" stopColor="#1EAEDB00" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto py-12 px-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <Logo />
              <p className="text-muted-foreground text-sm mt-4">
                Dynamic tech solutions and services to help businesses thrive in the digital world.
              </p>
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
                    aria-label={social.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="font-medium text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <motion.li 
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="font-medium text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <motion.li 
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h3 className="font-medium text-lg mb-4">Contact Us</h3>
              <address className="not-italic text-sm text-muted-foreground space-y-2">
                <p>Harare, Zimbabwe</p>
                <p>Available for Remote Work</p>
                <p className="mt-4">
                  <motion.a 
                    href="tel:+263719647303" 
                    className="hover:text-foreground transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    +263 (719) 647-303
                  </motion.a>
                </p>
                <p>
                  <motion.a 
                    href="mailto:darrelmucheri@gmail.com" 
                    className="hover:text-foreground transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    darrelmucheri@gmail.com
                  </motion.a>
                </p>
              </address>
            </motion.div>
          </div>

          <motion.div 
            className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-6 py-4"
            variants={itemVariants}
          >
            <p className="text-sm text-muted-foreground">
              © 2024 - {currentYear} Dynamic Tech. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Sitemap
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.footer>

      {/* Scroll to top button */}
      {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#1EAEDB] text-white flex items-center justify-center shadow-lg z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <div className="relative w-full h-full">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="100"
                strokeDashoffset={100 - scrollProgress}
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
              />
            </svg>
            <FiArrowUp className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </motion.button>
      )}
    </>
  );
}