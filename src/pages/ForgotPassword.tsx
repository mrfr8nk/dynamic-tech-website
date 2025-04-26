
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiArrowLeft } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // This would typically call your password reset API
      // For demo purposes, we'll just show a success message
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('If an account exists with this email, you will receive password reset instructions.');
      setEmail('');
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-64px-300px)] px-4 py-8 mx-auto md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold">Forgot Password</h1>
          <p className="text-muted-foreground">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Reset Instructions'}
              </Button>

              <div className="text-center">
                <Button variant="link" asChild>
                  <Link to="/login" className="inline-flex items-center">
                    <FiArrowLeft className="mr-2" /> Back to Login
                  </Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
