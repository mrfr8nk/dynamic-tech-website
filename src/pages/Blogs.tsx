
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FiSearch } from 'react-icons/fi';
import blogData from '@/services/blogs.json';

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter blogs based on search query
  const filteredBlogs = blogData.filter(blog => 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container px-4 py-12 mx-auto md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Blog</h1>
        <p className="mx-auto mb-8 text-xl text-muted-foreground max-w-prose">
          Insights, tutorials, and updates from Dynamic Tech team
        </p>

        <div className="relative max-w-md mx-auto">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </motion.div>

      {/* Featured Blog Post */}
      {filteredBlogs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img 
                  src={filteredBlogs[0].image} 
                  alt={filteredBlogs[0].title} 
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                <div className="mb-2 text-sm text-muted-foreground">
                  {format(new Date(filteredBlogs[0].date), 'MMMM dd, yyyy')} | By {filteredBlogs[0].author}
                </div>
                <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                  {filteredBlogs[0].title}
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  {filteredBlogs[0].excerpt}
                </p>
                <Button asChild>
                  <Link to={`/blogs/${filteredBlogs[0].id}`}>Read More</Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Blog List */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.slice(1).map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <Card className="overflow-hidden transition-all h-full hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2 text-sm text-muted-foreground">
                  {format(new Date(blog.date), 'MMMM dd, yyyy')} | By {blog.author}
                </div>
                <h2 className="mb-2 text-xl font-semibold">{blog.title}</h2>
                <p className="mb-4 text-muted-foreground line-clamp-3">{blog.excerpt}</p>
                <Button variant="outline" asChild>
                  <Link to={`/blogs/${blog.id}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <div className="p-12 text-center rounded-lg bg-muted/30">
          <h2 className="mb-2 text-2xl font-semibold">No posts found</h2>
          <p className="mb-4 text-muted-foreground">
            We couldn't find any blog posts matching your search criteria.
          </p>
          <Button variant="outline" onClick={() => setSearchQuery('')}>
            Clear Search
          </Button>
        </div>
      )}

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="p-8 mt-16 text-center rounded-lg bg-muted/30"
      >
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">Subscribe to Our Newsletter</h2>
        <p className="mx-auto mb-6 text-lg text-muted-foreground max-w-prose">
          Get the latest articles, tutorials and updates from our team delivered directly to your inbox
        </p>
        <div className="flex flex-col items-center justify-center max-w-md gap-4 mx-auto md:flex-row">
          <Input
            type="email"
            placeholder="Your email address"
            className="max-w-sm"
          />
          <Button>Subscribe</Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Blogs;
