
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiSun, FiMoon, FiUser, FiMenu, FiX, FiHome, FiMail, FiPackage, FiFileText, FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { Logo } from '@/components/ui/logo';
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
    name: 'Contact', 
    path: '/contact', 
    icon: FiMail 
  },
];

const socialLinks = [
  { name: 'GitHub', icon: FiGithub, url: 'https://github.com/mauricegift' },
  { name: 'Twitter', icon: FiTwitter, url: 'https://twitter.com/giftedtech' },
  { name: 'LinkedIn', icon: FiLinkedin, url: 'https://linkedin.com/in/gifted-maurice' },
  { name: 'Instagram', icon: FiInstagram, url: 'https://instagram.com/gifted.tech' },
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
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleLogout = () => {
    logout();
    // Can add toast notification here
  };

  return (
    <motion.header 
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`sticky top-0 z-50 w-full transition-all duration-300 m-2 sm:m-3 md:m-4 rounded-full ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md border-b shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="z-10"
        >
          <Link to="/">
            <Logo />
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
                      location.pathname === link.path ? 'text-primary' : 'text-foreground'
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
                          className="w-full"
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
                    location.pathname === link.path ? 'text-primary' : 'text-foreground'
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
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/login" className="hidden sm:block">
                <Button variant="ghost" size="sm">
                  <FiUser className="h-5 w-5 mr-2" />
                  Login
                </Button>
              </Link>
            </motion.div>
          )}

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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 top-[57px] bg-background/80 backdrop-blur-md border-t z-40 md:hidden"
          >
            <div 
              className="container mx-auto py-8 px-6 flex flex-col h-full"
              style={{
                backgroundImage: `radial-gradient(
                  circle at center,
                  rgba(var(--primary-rgb), 0.1) 0%,
                  rgba(var(--primary-rgb), 0.05) 50%,
                  transparent 100%
                )`
              }}
            >
              <nav className="flex flex-col space-y-6 mb-8">
                {navLinks.map((link, index) => (
                  <motion.div 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {link.children ? (
                      <details className="group">
                        <summary className="flex cursor-pointer items-center justify-between font-medium">
                          <div className="flex items-center">
                            <link.icon className="h-5 w-5 mr-3" />
                            <span>{link.name}</span>
                          </div>
                          <FiChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                        </summary>
                        <motion.div 
                          className="pl-8 mt-4 space-y-3"
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
                                className="flex items-center text-muted-foreground hover:text-foreground"
                              >
                                <FiChevronRight className="h-4 w-4 mr-2" />
                                {child.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      </details>
                    ) : (
                      <Link 
                        to={link.path} 
                        className={`flex items-center font-medium ${
                          location.pathname === link.path ? 'text-primary' : 'text-foreground'
                        }`}
                      >
                        <link.icon className="h-5 w-5 mr-3" />
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <motion.div 
                className="mt-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <p className="text-sm text-muted-foreground mb-4">Follow us</p>
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
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {!user && (
                <motion.div 
                  className="mt-8 grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Link to="/login" className="w-full">
                    <Button variant="outline" className="w-full">Login</Button>
                  </Link>
                  <Link to="/register" className="w-full">
                    <Button className="w-full">Register</Button>
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
