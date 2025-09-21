import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { toast } from 'react-toastify';
import { submitContactForm } from '@/services/contact';

const placeholderTexts = {
  name: "John Doe",
  email: "john@example.com",
  subject: "How can we help you?",
  message: "Please provide details about your inquiry..."
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [displayedPlaceholders, setDisplayedPlaceholders] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    // Typewriter effect for placeholders
    const typePlaceholders = async () => {
      for (const field in placeholderTexts) {
        const text = placeholderTexts[field];
        for (let i = 0; i <= text.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 50));
          setDisplayedPlaceholders(prev => ({
            ...prev,
            [field]: text.substring(0, i)
          }));
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    };
    
    typePlaceholders();
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        toast.success(result.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
      console.error('Contact form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container px-4 py-12 mx-auto md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <motion.h1 
          className="mb-4 text-4xl font-bold md:text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Contact Us
        </motion.h1>
        <motion.p 
          className="mx-auto text-xl text-muted-foreground max-w-prose"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Get in touch with our team and let us help bring your ideas to life
        </motion.p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Contact Information Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-1"
        >
          <div className="space-y-6">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="p-6">
                <div className="flex items-start">
                  <motion.div 
                    className="p-3 rounded-full bg-primary/10"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                  >
                    <FiMail className="text-primary" />
                  </motion.div>
                  <div className="ml-4">
                    <h3 className="mb-1 font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:darrelmucheri@gmail.com" className="hover:text-primary">
                        darrelmucheri@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="p-6">
                <div className="flex items-start">
                  <motion.div 
                    className="p-3 rounded-full bg-primary/10"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                  >
                    <FiPhone className="text-primary" />
                  </motion.div>
                  <div className="ml-4">
                    <h3 className="mb-1 font-medium">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+263719647303" className="hover:text-primary">
                        +263 (719) 647-303
                      </a>
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="p-6">
                <div className="flex items-start">
                  <motion.div 
                    className="p-3 rounded-full bg-primary/10"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                  >
                    <FiMapPin className="text-primary" />
                  </motion.div>
                  <div className="ml-4">
                    <h3 className="mb-1 font-medium">Office</h3>
                    <p className="text-muted-foreground">
                      Harare, Zimbabwe<br />
                      Available for Remote Work<br />
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-lg bg-muted/30"
            >
              <h3 className="mb-3 text-lg font-medium">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <motion.div 
                  className="flex justify-between"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 10:00 PM</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span>Saturday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <span>Sunday:</span>
                  <span>Closed</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="p-6 md:p-8">
            <motion.h2 
              className="mb-6 text-2xl font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Send Us a Message
            </motion.h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={displayedPlaceholders.name}
                    required
                  />
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={displayedPlaceholders.email}
                    required
                  />
                </motion.div>
              </div>
              
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={displayedPlaceholders.subject}
                  required
                />
              </motion.div>
              
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={displayedPlaceholders.message}
                  rows={5}
                  required
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <motion.button
                  type="submit"
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ padding: 0, border: 'none', background: 'none' }}
                >
                  <Button
                    type="button"
                    size="lg"
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    <motion.span
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.span>
                  </Button>
                </motion.button>
              </motion.div>
            </form>
          </Card>
        </motion.div>
      </div>
      
      {/* Map */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12"
      >
        <div className="overflow-hidden rounded-lg h-96 bg-muted/50">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119493.69000969073!2d30.924854695312504!3d-17.841754500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a3bb0df2ce3f%3A0x4c6b9b5dfa1e0610!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2szw!4v1645372463327!5m2!1sen!2szw"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dynamic Tech Office Location"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;