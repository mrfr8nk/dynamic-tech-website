
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import serviceData from '@/services/services.json';

const Services = () => {
  return (
    <div className="container px-4 py-12 mx-auto md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Services</h1>
        <p className="mx-auto text-xl text-muted-foreground max-w-prose">
          We offer a wide range of tech services to help businesses thrive in the digital world
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden transition-all h-full hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="mb-2 text-2xl font-semibold">{service.title}</h2>
                <p className="mb-4 text-muted-foreground">{service.shortDescription}</p>
                <Button asChild>
                  <Link to={`/services/${service.id}`}>Learn More</Link>
                </Button>
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
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">Need a Custom Solution?</h2>
        <p className="mx-auto mb-6 text-lg text-muted-foreground max-w-prose">
          We specialize in crafting tailored solutions to address your unique business challenges
        </p>
        <Button size="lg" asChild>
          <Link to="/contact">Contact Our Team</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Services;
