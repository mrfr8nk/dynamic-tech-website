import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiSun, FiMoon, FiUser, FiMenu, FiX, FiHome, FiMail, FiPackage, FiFileText, FiGithub, FiTwitter, FiInstagram, FiChevronDown, FiChevronRight, FiPhone } from 'react-icons/fi';
import { FaTiktok, FaFacebook, FaWhatsapp, FaDollarSign } from "react-icons/fa";
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { logout } from '@/services/auth';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const logoImage = 'https://i.postimg.cc/Jng46x5S/Chat-GPT-Image-Sep-21-2025-07-48-37-AM.png';

type NavLink = {
  name: string;
  path: string;
  icon: React.ElementType;
  children?: { name: string; path: string }[];
};

const navLinks: NavLink[] = [
  { 
    name: 'Home', 
    path: '/', 
    icon: FiHome,
  },
  { 
    name: 'Services', 
    path: '/services', 
    icon: FiPackage,
    children: [
      { name: 'Web Development', path: '/services/web-development' },
      { name: 'Mobile App Development', path: '/services/mobile-app-development' },
      { name: 'UI/UX Design', path: '/services/ui-ux-design' },
      { name: 'Cloud Services', path: '/services/cloud-services' },
      { name: 'Cybersecurity', path: '/services/cybersecurity' },
      { name: 'AI & Machine Learning', path: '/services/ai-solutions' },
    ] 
  },
  { 
    name: 'Projects', 
    path: '/projects', 
    icon: FiGithub 
  },
  { 
    name: 'Blogs', 
    path: '/blogs', 
    icon: FiFileText 
  },
  { 
    name: 'About',
    path: '/about',
    icon: FiPhone
  },
  { 
    name: 'Pricing',
    path: '/pricing',
    icon: FaDollarSign
  },
  { 
    name: 'Contact', 
    path: '/contact', 
    icon: FiMail 
  },
];

const socialLinks = [
  { name: 'GitHub', icon: FiGithub, url: 'https://github.com/mrfr8nk' },
  { name: 'Twitter', icon: FiTwitter, url: 'https://twitter.com/mrfr4nk' },
  { name: 'Whatsapp', icon: FaWhatsapp, url: 'https://wa.me/263719647303' },
  { name: 'Instagram', icon: FiInstagram, url: 'https://instagram.com/mrfrankofc' },
  { name: 'Email', icon: FiMail, url: 'mailto:darrelmucheri@gmail.com' }   
];

// Animation variants
const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  hover: { scale: 1.05 }
};

const menuVariants = {
  closed: { opacity: 0, x: "-100%" },
  open: { opacity: 1, x: 0 }
};

const blinkVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "reverse" as const,
      duration: 1.5
    }
  }
};

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <motion.header 
  variants={headerVariants}
  initial="hidden"
  animate="visible"
  className={`fixed top-2 left-2 right-2 z-50 w-[calc(100%-16px)] transition-all duration-800 ${
    scrolled 
      ? 'bg-background/40 backdrop-blur-md shadow-lg'  // Changed from 90% to 40% opacity
      : 'bg-background/40'  // Added transparency even when not scrolled
  } rounded-full border border-blue-500/50`}  // Added transparency to border
>
        <div className="container mx-auto px-3 py-2 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="z-10 flex items-center"
          >
            <Link to="/" className="flex items-center">
              <motion.img
                src={logoImage}
                alt="Logo"
                className="h-10 w-10 rounded-full object-cover border-2 border-blue-500"
                whileHover={{ scale: 1.1 }}
              />
              <span className="ml-2 text-xl font-bold">
                <span className="text-blue-600">Dynamic</span>
                <span className={theme === 'light' ? 'text-black' : 'text-white'}> Tech</span>
              </span>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link, index) => (
              <motion.div 
                key={link.name} 
                className="relative group"
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index}
                transition={{ delay: index * 0.1 }}
              >
                {link.children ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className={`flex items-center space-x-1 text-sm font-medium hover:text-primary transition-colors ${
                        location.pathname === link.path || 
                        (link.children && link.children.some(child => location.pathname === child.path)) 
                          ? 'text-primary underline decoration-blue-500 underline-offset-8' 
                          : 'text-foreground'
                      }`}>
                        <span>{link.name}</span>
                        <FiChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-56">
                      {link.children.map((child) => (
                        <DropdownMenuItem key={child.path} asChild>
                          <Link 
                            to={child.path}
                            className={`w-full ${
                              location.pathname === child.path ? 'text-primary' : ''
                            }`}
                          >
                            {child.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link 
                    to={link.path}
                    className={`text-sm font-medium hover:text-primary transition-colors ${
                      location.pathname === link.path 
                        ? 'text-primary underline decoration-blue-500 underline-offset-8' 
                        : 'text-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Button 
                variant="ghost" 
                size="icon"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              >
                {theme === 'light' ? (
                  <FiMoon className="h-5 w-5" />
                ) : (
                  <FiSun className="h-5 w-5" />
                )}
              </Button>
            </motion.div>

            {user ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="rounded-full"
                    >
                      {user.avatar ? (
                        <img 
                          src={user.avatar} 
                          alt={user.name} 
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      ) : (
                        <FiUser className="h-5 w-5" />
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="rounded-full bg-primary/10 p-1">
                        {user.avatar ? (
                          <img 
                            src={user.avatar} 
                            alt={user.name} 
                            className="h-8 w-8 rounded-full object-cover"
                          />
                        ) : (
                          <FiUser className="h-5 w-5" />
                        )}
                      </div>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <Separator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/settings">Settings</Link>
                    </DropdownMenuItem>
                    <Separator />
                    <DropdownMenuItem 
                      onClick={handleLogout}
                      className="text-destructive focus:text-destructive"
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
            ) : null}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:hidden"
            >
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? (
                  <FiX className="h-5 w-5" />
                ) : (
                  <FiMenu className="h-5 w-5" />
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 top-0 z-40 bg-background/95 backdrop-blur-lg"
          >
            <div className="absolute top-8 right-8">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <FiX className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="flex flex-col items-center justify-center h-full w-full px-6">
              <nav className="flex flex-col items-center space-y-8 w-full max-w-md">
                {navLinks.map((link, index) => (
                  <motion.div 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="w-full"
                  >
                    {link.children ? (
                      <details className="group w-full">
                        <summary className="flex cursor-pointer items-center justify-between font-medium w-full">
                          <div className="flex items-center">
                            <motion.span
                              variants={blinkVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              <link.icon className="h-6 w-6 mr-3" />
                            </motion.span>
                            <span className={`text-lg ${location.pathname === link.path ? 'text-primary' : ''}`}>
                              {link.name}
                            </span>
                          </div>
                          <motion.span
                            variants={blinkVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            <FiChevronDown className="h-6 w-6 transition-transform group-open:rotate-180" />
                          </motion.span>
                        </summary>
                        <motion.div 
                          className="pl-12 mt-4 space-y-4 w-full"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                        >
                          {link.children.map((child, childIndex) => (
                            <motion.div
                              key={child.path}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: childIndex * 0.05, duration: 0.3 }}
                            >
                              <Link 
                                to={child.path}
                                className={`flex items-center text-lg ${
                                  location.pathname === child.path 
                                    ? 'text-primary' 
                                    : 'text-muted-foreground hover:text-foreground'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <motion.span
                                  variants={blinkVariants}
                                  initial="hidden"
                                  animate="visible"
                                >
                                  <FiChevronRight className="h-5 w-5 mr-2" />
                                </motion.span>
                                {child.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      </details>
                    ) : (
                      <Link 
                        to={link.path} 
                        className={`flex items-center text-lg font-medium w-full ${
                          location.pathname === link.path 
                            ? 'text-primary underline decoration-blue-500 underline-offset-4' 
                            : 'text-foreground'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.span
                          variants={blinkVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <link.icon className="h-6 w-6 mr-3" />
                        </motion.span>
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <p className="text-sm text-muted-foreground mb-4 text-center">Follow us</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a 
                      key={social.name} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                      aria-label={social.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + (index * 0.1), duration: 0.3 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.span
                        variants={blinkVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <social.icon className="h-6 w-6" />
                      </motion.span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
}
