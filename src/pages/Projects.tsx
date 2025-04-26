import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import projectData from '@/services/projects.json';

const Projects = () => {
  return (
    <div className="container px-4 py-12 mx-auto md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Projects</h1>
        <p className="mx-auto text-xl text-muted-foreground max-w-prose">
          Explore our portfolio of successful projects and creative solutions
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
            whileHover={{ scale: 1.03 }}
          >
            <Card className="overflow-hidden transition-all h-full hover:shadow-lg">
              <motion.div 
                className="h-48 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </motion.div>
              <CardContent className="p-6">
                <motion.h2 
                  className="mb-2 text-2xl font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {project.title}
                </motion.h2>
                <motion.p 
                  className="mb-6 text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {project.description}
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {project.tech && project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded bg-muted/50">
                      {tech}
                    </span>
                  ))}
                </motion.div>
                <motion.div 
                  className="flex gap-3 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                >
                  {project.link && (
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" /> Live
                        </a>
                      </Button>
                    </motion.div>
                  )}
                  {project.source && (
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    >
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={project.source} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <FiGithub className="mr-1" /> Source
                        </a>
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
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
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">Have a Project in Mind?</h2>
        <p className="mx-auto mb-6 text-lg text-muted-foreground max-w-prose">
          We're always excited to take on new challenges and create amazing digital solutions
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" asChild>
            <a href="/contact">Start a Project</a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;