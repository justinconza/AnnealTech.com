import React from 'react';
import { motion } from 'framer-motion';

interface ServicePageBannerProps {
  title: string;
  subtitle: string;
  backgroundClass?: string;
}

export const ServicePageBanner: React.FC<ServicePageBannerProps> = ({ 
  title, 
  subtitle,
  backgroundClass = "bg-gradient-to-b from-blue-950 to-blue-900"
}) => {
  return (
    <section className={`relative py-24 ${backgroundClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-blue-100"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};