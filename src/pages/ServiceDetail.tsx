
import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import serviceData from '@/services/services.json';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const service = serviceData.find(s => s.id === id);
  
  if (!service) {
    return (
      <div className="container px-4 py-12 mx-auto text-center md:py-16">
        <h1 className="mb-4 text-3xl font-bold">Service Not Found</h1>
        <p className="mb-8 text-muted-foreground">The service you're looking for doesn't seem to exist.</p>
        <Button asChild>
          <Link to="/services">Back to Services</Link>
        </Button>
      </div>
    );
  }

  // Get related services (excluding current one)
  const relatedServices = serviceData
    .filter(s => s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="container px-4 py-12 mx-auto md:py-16">
      {/* Back Button */}
      <Button 
        variant="outline" 
        className="mb-6"
        onClick={() => navigate(-1)}
      >
        <FiArrowLeft className="mr-2" /> Back
      </Button>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Service Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={service.image} 
            alt={service.title} 
            className="object-cover w-full rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Service Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">{service.title}</h1>
          <div className="mb-6 prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground">{service.shortDescription}</p>
          </div>

          <h2 className="mt-8 mb-4 text-2xl font-semibold">Features</h2>
          <ul className="mb-8 space-y-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <FiCheckCircle className="w-5 h-5 mt-1 mr-3 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button size="lg" asChild>
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </motion.div>
      </div>

      {/* Full Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 prose prose-lg dark:prose-invert max-w-none"
      >
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>{service.description}</p>

        {/* Removed approach and benefits sections since they don't exist in the data */}
      </motion.div>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Related Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedServices.map((relService) => (
              <Card key={relService.id} className="transition-all hover:shadow-lg">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={relService.image} 
                    alt={relService.title} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2 text-lg font-semibold">{relService.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{relService.shortDescription}</p>
                  <Button variant="outline" asChild size="sm">
                    <Link to={`/services/${relService.id}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="p-8 mt-16 text-center rounded-lg bg-muted/30">
        <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
        <p className="mx-auto mb-6 text-lg text-muted-foreground max-w-prose">
          Contact us today to discuss how our {service.title} can benefit your business
        </p>
        <Button size="lg" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceDetail;
