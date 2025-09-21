import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Pricing = () => {
        const pricingPlans = [
          {
            title: "Web Development",
            tiers: [
              {
                name: "Basic Website",
                price: "$40 - $115",
                features: [
                  "1-5 Pages Website",
                  "Responsive Design",
                  "Basic SEO Setup",
                  "Contact Form",
                  "SSL Certificate",
                  "Basic Analytics",
                  "Social Media Integration"
                ],
                technologies: ["HTML", "CSS", "JavaScript", "React"]
              },
              {
                name: "Business Website",
                price: "$115 - $270",
                features: [
                  "5-10 Pages Website",
                  "CMS Integration",
                  "Advanced SEO",
                  "Custom Design",
                  "User Accounts Auth",
                  "Database Integration",
                  "Blog Section",
                  "Analytics Setup",
                  "SSL Certificate"
                ],
                technologies: ["React+Vite", "Node.js", "MongoDB", "Next.js"]
              },
              {
                name: "E-commerce Website",
                price: "$270 - $770",
                features: [
                  "Product Catalog",
                  "Payment Gateway(Stripe/PayPal)",
                  "User Accounts",
                  "Admin Dashboard",
                  "Inventory Management",
                  "Order Tracking",
                  "Responsive Design",
                  "SEO Optimization",
                  "Analytics Integration",
                  "Social Media Integration",
                  "Custom Design",
                  "SSL Certificate"
                ],
                technologies: ["React+Vite", "Express", "PostgreSQL/Mongo", "Stripe", "PayPal", "Next.js", "Tailwind CSS"]
              }
            ],
            range: "$40 - $770"
          },
          {
            title: "Bot Services",
            tiers: [
              {
                name: "Whatsapp Bot",
                price: "$1.15 - $2.30/3months",
                features: [
                  "User Commands",
                  "Quick Responses",
                  "Basic Automation",
                  "Single Platform",
                  "Group Management",
                  "Auto Reply",
                  "AutoFollow WaChannel",
                  "AutoJoin WaGroup",
                  "Social Media Downloaders",
                  "AutoView Status",
                  "AutoLike Status",
                  "Anticall",
                  "Antidelete",
                  "Autoblue...etc",
                ],
                technologies: ["Javascript", "BaileysApi", "Node.js", "MongoDB", "Express"]
              },
                {
                name: "Telegram Bot",
                price: "$1.15 - $2.30/3months",
                features: [
                  "Custom Commands",
                  "Single Platform",
                  "Group Management",
                  "Channel Management",
                  "Social Media Downloaders...etc"
                ],
                technologies: ["Javascript", "TelegramApi", "Node.js", "MongoDB", "Express"]
              }
            ],
            range: "$1.15 - $7.70"
          },
          {
            title: "App Designing",
            tiers: [
              {
                name: "Basic Design",
                price: "$40 - $77",
                features: [
                  "Wireframes",
                  "UI Mockups",
                  "3 Screens",
                  "Basic Prototype",
                  "1 Revision"
                ],
                technologies: ["Figma", "Adobe XD"]
              },
              {
                name: "Standard Design",
                price: "$77 - $115",
                features: [
                  "Full UI/UX",
                  "Interactive Prototype",
                  "10+ Screens",
                  "Style Guide",
                  "3 Revisions"
                ],
                technologies: ["Figma", "Sketch", "Adobe CC"]
              },
              {
                name: "Premium Design",
                price: "$155 - $230",
                features: [
                  "Custom Illustrations",
                  "Animations",
                  "Full Design System",
                  "User Testing",
                  "Unlimited Revisions"
                ],
                technologies: ["Figma", "After Effects", "Blender"]
              }
            ],
            range: "$40 - $230"
          },
          {
            title: "UI/UX Design",
            tiers: [
              {
                name: "Basic Package",
                price: "$77 - $195",
                features: [
                  "User Research",
                  "Wireframing",
                  "Basic Prototype",
                  "Usability Testing",
                  "1 Platform Design"
                ],
                technologies: ["Figma", "Miro"]
              },
              {
                name: "Professional Package",
                price: "$195 - $270",
                features: [
                  "Competitor Analysis",
                  "High-Fidelity Design",
                  "Interactive Prototype",
                  "User Personas",
                  "2 Platforms"
                ],
                technologies: ["Figma", "Adobe XD", "UserTesting"]
              },
              {
                name: "Enterprise Package",
                price: "$270 - $345",
                features: [
                  "Full UX Audit",
                  "Design System",
                  "Micro-interactions",
                  "Accessibility Compliance",
                  "Multi-platform"
                ],
                technologies: ["Figma", "ProtoPie", "Webflow"]
              }
            ],
            range: "$77 - $345"
          },
          {
            title: "Cloud Services",
            tiers: [
              {
                name: "Starter Plan",
                price: "$15 - $77/month",
                features: [
                  "Basic Hosting",
                  "10GB Storage",
                  "100GB Bandwidth",
                  "Email Setup",
                  "Basic Security"
                ],
                technologies: ["AWS", "DigitalOcean"]
              },
              {
                name: "Business Plan",
                price: "$77 - $385/month",
                features: [
                  "Scalable Infrastructure",
                  "Load Balancing",
                  "CDN Integration",
                  "Database Management",
                  "Advanced Security"
                ],
                technologies: ["AWS", "Google Cloud", "Cloudflare"]
              },
              {
                name: "Enterprise Plan",
                price: "$385 - $2,310/month",
                features: [
                  "Dedicated Servers",
                  "24/7 Monitoring",
                  "Disaster Recovery",
                  "Custom Solutions",
                  "Premium Support"
                ],
                technologies: ["AWS", "Azure", "Kubernetes"]
              }
            ],
            range: "$15 - $2,310/month"
          },
          {
            title: "AI & Machine Learning",
            tiers: [
              {
                name: "Basic Model",
                price: "$40 - $155",
                features: [
                  "Pre-trained Model",
                  "Basic Integration",
                  "Limited Dataset",
                  "Simple Predictions",
                  "Documentation"
                ],
                technologies: ["Python", "Scikit-learn"]
              },
              {
                name: "Custom Model",
                price: "$155 - $770",
                features: [
                  "Custom Training",
                  "Data Processing",
                  "API Integration",
                  "Performance Optimization",
                  "Technical Support"
                ],
                technologies: ["TensorFlow", "PyTorch", "OpenCV"]
              },
              {
                name: "Advanced AI Solution",
                price: "$770 - $1,540",
                features: [
                  "Deep Learning",
                  "Computer Vision",
                  "Natural Language Processing",
                  "Continuous Learning",
                  "Enterprise Integration"
                ],
                technologies: ["TensorFlow", "GPT", "BERT"]
              }
            ],
            range: "$40 - $1,540"
          },
          {
            title: "Enterprise Solutions",
            tiers: [
              {
                name: "Custom Project",
                price: "Contact for Quote",
                features: [
                  "Tailored Solutions",
                  "Dedicated Team",
                  "Priority Support",
                  "Enterprise Security",
                  "Long-term Partnership"
                ],
                technologies: ["Custom Stack", "Any Technology"]
              }
            ],
            range: "Custom Pricing"
          }
        ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    },
    shake: {
      x: [0, -2, 2, -2, 2, 0],
      transition: { 
        duration: 0.8,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  };

  return (
    <div className="container px-4 py-12 mx-auto md:py-16">
      {/* Navigation Breadcrumb */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-center mb-8"
      >
        <nav className="flex items-center space-x-2 text-sm font-medium">
          <Link 
            to="/" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link 
            to="/pricing" 
            className="text-primary underline decoration-blue-500 underline-offset-4"
          >
            Pricing
          </Link>
        </nav>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Pricing</h1>
        <p className="mx-auto text-xl text-muted-foreground max-w-prose">
          Our pricing is competitive and varies based on project scope. 
          We offer flexible payment plans and transparent quotes. 
          We believe in delivering value for your investment.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pricingPlans.map((service, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={["visible", "shake"]}
            whileHover="hover"
            variants={cardVariants}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col"
          >
            <Card className="flex-1 transition-all">
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-semibold text-center">{service.title}</h2>
                <p className="mb-4 text-sm text-center text-muted-foreground">Range: {service.range}</p>
                
                <div className="space-y-4">
                  {service.tiers.map((tier, tierIndex) => (
                    <motion.div 
                      key={tierIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: tierIndex * 0.2 + index * 0.1 }}
                      className="p-4 mb-4 border rounded-lg"
                    >
                      <h3 className="mb-2 font-medium">{tier.name}</h3>
                      <p className="mb-3 text-lg font-bold text-primary">{tier.price}</p>
                      
                      <ul className="mb-4 space-y-2">
                        {tier.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 + tierIndex * 0.2 }}
                          >
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tier.technologies.map((tech, techIndex) => (
                          <motion.span 
                            key={techIndex} 
                            className="px-2 py-1 text-xs rounded bg-muted/50"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: techIndex * 0.1 + tierIndex * 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Contact Us Button for each tier */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ 
                          scale: [1, 1.03, 1],
                          transition: { 
                            duration: 2, 
                            repeat: Infinity,
                            repeatType: "reverse"
                          } 
                        }}
                        className="mt-2"
                      >
                        <Button className="w-full" asChild>
                          <a href="/contact">Contact Us</a>
                        </Button>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="p-8 mt-16 text-center rounded-lg bg-muted/30"
      >
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">Need Custom Solutions?</h2>
        <p className="mx-auto mb-6 text-lg text-muted-foreground max-w-prose">
          We can tailor our services to meet your specific business requirements
        </p>
        <Button size="lg" asChild>
          <a href="/contact">Get a Custom Quote</a>
        </Button>
      </motion.div>
    </div>
  );
};

export default Pricing;