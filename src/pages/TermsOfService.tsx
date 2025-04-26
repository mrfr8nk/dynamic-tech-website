
import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <motion.h1 
        className="text-3xl md:text-4xl font-bold mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Terms of Service
      </motion.h1>

      <div className="prose prose-lg max-w-none">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using our website and services, you agree to be bound by these Terms of Service. 
              If you do not agree with any part of these terms, you may not access the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are and will remain the exclusive 
              property of Gifted Tech. Our services are protected by copyright, trademark, and other laws.
            </p>
            <p className="mt-4">
              Unless specifically stated, you may not modify, reproduce, distribute, create derivative works of, 
              publicly display, or publicly perform any materials from our website without prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Content</h2>
            <p>
              By submitting content to our website or services, you grant us a worldwide, non-exclusive, royalty-free 
              license to use, reproduce, adapt, publish, and distribute such content for the purpose of providing 
              and promoting our services.
            </p>
            <p className="mt-4">
              You represent and warrant that you own or control all rights in the content you provide, and that 
              such content does not violate these Terms or any applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Services and Payment</h2>
            <p>
              We may offer various services that are subject to separate agreements. Any payment terms will be 
              specified in those agreements. For ongoing services, we reserve the right to change pricing with 
              reasonable notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Gifted Tech shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, or any loss of profits or revenue, whether incurred 
              directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Gifted Tech and its employees, contractors, agents, 
              officers, and directors from and against any claims, liabilities, damages, losses, and expenses, 
              arising out of or in any way connected with your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of the jurisdiction in which Gifted Tech is established, 
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes 
              by posting an updated version on our website. Your continued use of our services after such modifications 
              constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice or liability, 
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:{" "}
              <a href="mailto:legal@giftedtech.web.id" className="text-primary hover:underline">
                legal@giftedtech.web.id
              </a>
            </p>
          </section>
        </motion.div>

        <div className="mt-8 text-sm text-muted-foreground">Last Updated: April 22, 2025</div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;
