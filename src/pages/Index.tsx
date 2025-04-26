import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCopy, FiCheckCircle, FiArrowRight, FiMail, FiUser } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { IconsCloud } from '@/components/ui/IconsCloud';
import { useIsMobile } from '@/hooks/use-mobile';

// Services data
const featuredServices = [
  {
    id: 'web-development',
    title: "Web Development",
    shortDescription: "Custom websites and web applications tailored to your business needs.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    id: 'mobile-app-development',
    title: "Mobile App Development",
    shortDescription: "Cross-platform mobile applications for iOS and Android.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Regina Joel",
    position: "CTO, Gifted Tech",
    content: "From concept to execution, Gifted Tech delivered excellence at every step. Their dedication to quality made all the difference.",
    avatar: "https://zanalydpkhnbrjipfldc.supabase.co/storage/v1/object/public/juustgifted//Regina%20Joel.jpg",
  },
  {
    id: 2,
    name: "Dancan Ochieng",
    position: "CTO/CEO, DanTech Securenet",
    content: "Working with Gifted Tech transformed our digital presence. Their team delivered beyond our expectations with exceptional attention to detail.",
    avatar: "https://zanalydpkhnbrjipfldc.supabase.co/storage/v1/object/public/juustgifted//Dantech%20Securenet.jpg",
  },
  {
    id: 3,
    name: "Spencer Onyango",
    position: "Marketer, Elite Group",
    content: "The website they built for us has significantly increased our conversion rates. Their understanding of our vision was remarkable.",
    avatar: "https://zanalydpkhnbrjipfldc.supabase.co/storage/v1/object/public/juustgifted//Spencer%20Onyango.jpg",
  },
  {
    id: 4,
    name: "Hon Peter Rolland",
    position: "Founder/CEO, CBS CyberSpace",
    content: "Gifted Tech's expertise in cybersecurity is unmatched. They provided us with a robust solution that has kept our data safe and secure.",
    avatar: "https://zanalydpkhnbrjipfldc.supabase.co/storage/v1/object/public/juustgifted//CBS%20Rolland.jpg",
  }
  
];

// Founder code snippet
const founderCodeSnippet = `const founder = {
  name: "Maurice Gift",
  role: "Lead Developer & Founder",
  skills: ["React+Vite",", "Node.js", "TypeScript", "NextJs",  "Python", "MongoDB", "UI/UX Design"],
  experience: "1+ years",
  education: "Bachelor of Business Management",
  mission: "To create innovative digital solutions that transform businesses",
  contact: "contact@giftedtech.web.id"
};

// Passionate about combining creativity with technical excellence
console.log(\`Hello, I'm \${founder.name}! Let's build something amazing.\`);`;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

const bounceAnimation = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: "reverse"
  }
};

// Staggered animation container for sections
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Index = () => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [showOur, setShowOur] = useState(true);
  const [showConnect, setShowConnect] = useState(true);
  const [showPortfolioIcon, setShowPortfolioIcon] = useState(true);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const isMobile = useIsMobile();

  const heroText = "We build cutting-edge web and mobile applications that drive business growth with modern technologies like React, Vite, Node.js, and Flutter among others. We are committed to innovation, performance quality, and customer satisfaction.";

  // Typing effect for hero paragraph
  useEffect(() => {
    let i = 0;
    let direction = 1; // 1 for typing, -1 for erasing
    let timeoutId;
    let intervalId;

    const typeWriter = () => {
      setTypedText(heroText.substring(0, i));
      
      if (direction === 1) {
        // Typing forward
        if (i < heroText.length) {
          i++;
        } else {
          // Finished typing, pause then start erasing
          clearInterval(intervalId);
          timeoutId = setTimeout(() => {
            direction = -1;
            intervalId = setInterval(typeWriter, 30); // Faster erase speed
          }, 1500);
        }
      } else {
        // Erasing backward
        if (i > 0) {
          i--;
        } else {
          // Finished erasing, immediately start typing again
          clearInterval(intervalId);
          direction = 1;
          intervalId = setInterval(typeWriter, 50); // Normal typing speed
        }
      }
    };

    // Start initial typing
    intervalId = setInterval(typeWriter, 50);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []); 

  const handleCopyCode = () => {
    navigator.clipboard.writeText(founderCodeSnippet.trim());
    setCopied(true);
    toast.success("Code Copied!");
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      toast.success("Thanks for Subscribing!");
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  // Blinking animations
  useEffect(() => {
    const ourInterval = setInterval(() => setShowOur(prev => !prev), 1000);
    const connectInterval = setInterval(() => setShowConnect(prev => !prev), 1500);
    const portfolioInterval = setInterval(() => setShowPortfolioIcon(prev => !prev), 1200);
    
    return () => {
      clearInterval(ourInterval);
      clearInterval(connectInterval);
      clearInterval(portfolioInterval);
    };
  }, []);

  // Testimonial auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Syntax highlighting for code snippet
  const renderHighlightedCode = () => {
    const lines = founderCodeSnippet.split('\n');
    return lines.map((line, i) => {
      if (line.includes('const founder')) {
        return (
          <div key={i}>
            <span className="text-purple-500">const</span>{' '}
            <span className="text-yellow-300">founder</span>{' '}
            <span className="text-white">=</span>{' '}
            <span className="text-yellow-500">{'{'}</span>
          </div>
        );
      }
      if (line.includes('//')) {
        return <div key={i} className="text-gray-400">{line}</div>;
      }
      if (line.includes('console.log')) {
        return (
          <div key={i}>
            <span className="text-blue-400">console</span>
            <span className="text-white">.</span>
            <span className="text-yellow-200">log</span>
            <span className="text-white">(</span>
            <span className="text-green-400">{line.match(/`.*`/)?.[0]}</span>
            <span className="text-white">);</span>
          </div>
        );
      }
      if (line.trim() === '') {
        return <div key={i}>&nbsp;</div>;
      }
      if (line.includes('}')) {
        return <div key={i}><span className="text-yellow-500">{line}</span>;</div>;
      }
      
      // Property lines
      const [prop, value] = line.split(':').map(s => s.trim());
      return (
        <div key={i}>
          {'  '}
          <span className="text-cyan-300">{prop}</span>
          <span className="text-white">: </span>
          {value?.startsWith('[') ? (
            <span className="text-yellow-300">{value}</span>
          ) : (
            <span className="text-green-400">{value?.replace(/,$/, '')}</span>
          )}
          {value?.endsWith(',') && <span className="text-white">,</span>}
        </div>
      );
    });
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        className="relative py-12 md:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container px-4 mx-auto w-full">
          <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft}
            >
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                <span className="block text-primary">Crafting</span>
                <span className="block">
                  <motion.span 
                    animate={{ 
                      opacity: [0, 1, 0],
                      transition: { 
                        duration: 1.5, 
                        repeat: Infinity,
                        repeatType: "loop"
                      }
                    }}
                    className={theme === 'dark' ? 'text-white' : 'text-black'}
                  >
                    Tech
                  </motion.span>{' '}
                  <span className="text-primary">Solutions</span>
                </span>
                <span className="block">for the <span className="text-primary">Modern</span>{' '}
                  <motion.span 
                    animate={{ 
                      opacity: [0, 1, 0],
                      transition: { 
                        duration: 1.5, 
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: 0.5
                      }
                    }}
                    className={theme === 'dark' ? 'text-white' : 'text-black'}
                  >
                    Era
                  </motion.span>
                </span>
              </h1>

              <div className={`mb-6 ${isMobile ? 'min-h-[100px]' : 'min-h-[80px]'}`}>
                <p className="text-lg text-muted-foreground md:text-xl">
                  {typedText}
                  <span className={`inline-block w-1 h-6 ml-1 bg-primary ${typedText.length > 0 ? 'animate-pulse' : 'opacity-0'}`}></span>
                </p>
              </div>

              <motion.div 
                className="flex flex-wrap gap-3 w-full justify-start md:gap-4 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Button 
                  size="lg" 
                  asChild 
                  className="flex-1 min-w-[120px] rounded-full"
                >
                  <Link to="/services">
                    Explore Services <FiArrowRight className="ml-2 animate-[pulse_1.5s_infinite]" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild
                  className="flex-1 min-w-[120px] rounded-full"
                >
                  <Link to="/contact">
                    Contact Us <FiMail className="ml-2 animate-[pulse_1.5s_infinite]" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromRight}
              className="flex justify-center"
            >
              <IconsCloud />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Founder Section */}
      <motion.section 
        className="py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container px-4 mx-auto w-full">
          <motion.div 
            className="flex flex-col items-center justify-center mb-6 text-center md:mb-8"
            variants={fadeInUp}
          >
            <motion.div 
              className="flex justify-center mb-4 p-1 rounded-full border-4 border-primary"
              variants={fadeInUp}
            >
              <img 
                src="https://zanalydpkhnbrjipfldc.supabase.co/storage/v1/object/public/juustgifted//mygifted2.png" 
                alt="Founder" 
                className="object-cover w-32 h-32 rounded-full shadow-xl md:w-40 md:h-40"
                loading="lazy"
              />
            </motion.div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Meet <span className={showOur ? 'text-primary' : 'text-transparent'}>The</span> Founder
            </h2>
            
            <motion.div
              animate={{ opacity: showPortfolioIcon ? 1 : 0.7, scale: [1, 1.03, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-4"
            >
              <Button variant="default" size="sm" asChild className="rounded-full">
                <Link to="https://portfolio.giftedtech.web.id">
                  <FiUser className={`mr-2 ${showPortfolioIcon ? 'opacity-100' : 'opacity-70'}`} /> View Portfolio
                </Link>
              </Button>
            </motion.div>
            
            <p className="mx-auto mt-4 text-lg text-muted-foreground max-w-2xl md:text-xl">
              He is passionate about technology and creating solutions that make differences.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="w-full max-w-3xl mx-auto"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className={`p-4 mb-6 rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} md:p-6`}>
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <span className="font-mono text-sm text-green-500 md:text-base">founder.ts</span>
                <button 
                  onClick={handleCopyCode}
                  className="flex items-center text-xs md:text-sm"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <FiCheckCircle className="text-green-500" />
                  ) : (
                    <FiCopy />
                  )}
                </button>
              </div>
              <pre className={`p-3 overflow-x-auto text-xs rounded font-mono ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-900 text-gray-100'} md:p-4 md:text-sm`}>
                <code>{renderHighlightedCode()}</code>
              </pre>
            </div>
            
            <motion.div 
              className="flex justify-center"
              animate={{ opacity: showConnect ? 1 : 0.7 }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Button asChild className="mx-auto rounded-full">
                <Link to="/contact">
                  Connect With Us <FiArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Preview Section */}
      <motion.section 
        className="py-12 bg-muted/30 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container px-4 mx-auto w-full">
          <motion.div 
            className="mb-8 text-center md:mb-12"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">Our <span className="text-primary">Services</span></h2>
            <p className="mx-auto text-lg text-muted-foreground max-w-prose md:text-xl">
              Comprehensive tech solutions tailored to both your personal and business needs.
            </p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {featuredServices.map((service, index) => (
              <motion.div 
                key={service.id}
                variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden transition-all h-full shadow-lg hover:shadow-xl">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="mb-2 text-lg font-semibold md:text-xl">{service.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground md:text-base">{service.shortDescription}</p>
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Button variant="default" className="w-full bg-primary rounded-full" asChild>
                        <Link to={`/services/${service.id}`}>Learn More</Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-8 text-center md:mt-12"
            variants={fadeInUp}
            viewport={{ once: true }}
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Button size="lg" asChild className="rounded-full">
              <Link to="/services">
                View All Services <FiArrowRight className="ml-2 animate-[bounceRight_1s_infinite]" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="py-12 bg-muted/30 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container px-4 mx-auto w-full">
          <motion.div 
            className="mb-8 text-center md:mb-12"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">Client <span className="text-primary">Testimonials</span></h2>
            <p className="mx-auto text-lg text-muted-foreground max-w-prose md:text-xl">
              What our clients say about working with us
            </p>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <div className="flex items-center">
              <button 
                onClick={() => setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2 mr-2 rounded-full hover:bg-muted md:mr-4"
              >
                <FiArrowRight className="transform rotate-180" />
              </button>
              
              <div className="flex-1 overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}>
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full px-2 shrink-0 md:px-4">
                      <Card className="max-w-2xl mx-auto">
                        <CardContent className="flex flex-col h-full p-4 md:p-6">
                          <div className="flex items-center mb-3 md:mb-4">
                            <div className="w-10 h-10 mr-3 overflow-hidden rounded-full md:w-12 md:h-12 md:mr-4">
                              <img 
                                src={testimonial.avatar} 
                                alt={testimonial.name} 
                                className="object-cover w-full h-full"
                                loading="lazy"
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold md:text-base">{testimonial.name}</h4>
                              <p className="text-xs text-muted-foreground md:text-sm">{testimonial.position}</p>
                            </div>
                          </div>
                          <p className="mb-0 text-sm italic flex-grow md:text-base">{testimonial.content}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                className="p-2 ml-2 rounded-full hover:bg-muted md:ml-4"
              >
                <FiArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* FAQ Section */}
      <motion.section 
        className="py-12 md:py-16"
        id="faq"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container px-4 mx-auto w-full">
          <motion.div 
            className="mb-8 text-center md:mb-12"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="mb-2 text-3xl font-bold md:text-4xl"><span className="text-primary">Frequently</span> Asked <span className="text-primary">Questions</span></h2>
            <p className="mx-auto text-lg text-muted-foreground max-w-prose md:text-xl">
              Get answers to common questions about our services
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="italic">What services does Gifted Tech offer?</AccordionTrigger>
                <AccordionContent>
                  We provide comprehensive digital solutions including custom web development, mobile applications, 
                  UI/UX design, cloud services, and cybersecurity solutions tailored to your business needs.
                  You can refer to our <Link to="/services" className="text-primary underline">Services</Link> page for more details.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="italic">How long does a typical project take?</AccordionTrigger>
                <AccordionContent>
                  Project timelines vary based on complexity. Simple websites take 1-4 weeks, while complex 
                  applications may require 2-6 months. We provide detailed timelines after initial consultation.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="italic">Do you provide ongoing support?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer maintenance packages including updates, bug fixes, security patches, and 
                  technical support to ensure your application runs smoothly post-launch.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="italic">What's your development approach?</AccordionTrigger>
                <AccordionContent>
                  We follow agile methodologies with iterative development, regular client check-ins, and 
                  continuous feedback to ensure transparency and flexibility throughout the project.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="italic">How do you ensure quality?</AccordionTrigger>
                <AccordionContent>
                  Our process includes rigorous testing at each stage, code reviews, performance optimization, 
                  and user testing to deliver high-quality, reliable solutions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="italic">What are your charges?</AccordionTrigger>
                <AccordionContent>
                  Our pricing is competitive and varies based on project scope. We offer flexible payment plans
                  and transparent quotes. We believe in delivering value for your investment.
                  Please refer to our <Link to="/pricing" className="text-primary underline">Pricing</Link> page for more details.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        className="py-12 bg-primary/10 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container px-4 mx-auto w-full">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Subscribe to Our Newsletter</h2>
            <p className="mb-6 text-muted-foreground">
              Stay updated with our latest projects, tech insights, general updates and special offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <motion.button
                type="submit"
                className={`px-6 py-2 font-medium rounded-full ${isSubscribed ? 'bg-green-500' : 'bg-primary'} text-white`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={isSubscribed ? {} : { scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className={`py-12 text-center md:py-16 ${theme === 'dark' ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-primary to-accent'}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container px-4 mx-auto w-full">
          <motion.h2 
            className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl"
            variants={slideInFromRight}
            viewport={{ once: true }}
          >
            Ready to Transform Your Ideas or Business?
          </motion.h2>
          <motion.p 
            className="mx-auto mb-6 text-lg text-white/90 max-w-prose md:text-xl md:mb-8"
            variants={slideInFromLeft}
            viewport={{ once: true }}
          >
            Get in touch with us today and let's discuss how we can help you achieve your goals or if you have something we can collaborate on.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Button size="lg" variant="secondary" asChild className="rounded-full">
              <Link to="/contact">
                <FiMail className="mr-2 animate-[pulse_1.5s_infinite]" /> Contact Us Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;