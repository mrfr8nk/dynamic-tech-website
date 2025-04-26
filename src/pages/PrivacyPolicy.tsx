
import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
        Privacy Policy
      </motion.h1>

      <div className="prose prose-lg max-w-none">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              At Gifted Tech, we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you 
              visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p>
              As of now we do not collect any data but in future we plan to collect personal information that you voluntarily provide when interacting with our 
              website, including but not limited to:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Contact information (name, email address, phone number)</li>
              <li>Company details</li>
              <li>Project requirements</li>
              <li>Communications and correspondence with us</li>
            </ul>
            <p>
              Additionally, we automatically collect certain information when you visit our website, such 
              as IP address, browser type, referring/exit pages, operating system, date/time stamp, and 
              clickstream data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>We use the collected information for various purposes, including:</p>
            <ul className="list-disc pl-6 my-4">
              <li>Providing and maintaining our services</li>
              <li>Responding to your inquiries and communication</li>
              <li>Improving our website and services</li>
              <li>Sending promotional communications with your consent</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized 
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
              or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
            <p>
              We may use third-party services (such as analytics or payment processors) that collect, monitor, 
              and analyze information to improve our services' functionality. These third parties have their own 
              privacy policies addressing how they use such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
            <p>
              Our website uses cookies to enhance user experience. You can instruct your browser to refuse all 
              cookies or to indicate when a cookie is being sent. However, some features of our website may not 
              function properly without cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul className="list-disc pl-6 my-4">
              <li>Access personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:privacy@giftedtech.web.id" className="text-primary hover:underline">
                privacy@giftedtech.web.id
              </a>
            </p>
          </section>
        </motion.div>

        <div className="mt-8 text-sm text-muted-foreground">Last Updated: April 22, 2025</div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
