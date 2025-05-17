import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  image?: string;
}

const BlogSlider = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 'remote-work',
      title: 'How do I facilitate hybrid and remote work?',
      summary: "No matter if your team is remote, hybrid or returning to the office, you need a plan for how to facilitate multiple styles of work to stay competitive and profitable.",
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080'
    },
    {
      id: 'cloud-data',
      title: 'Can I move my data to the cloud?',
      summary: "Moving your businesses data is not always a simple process. Our team specializes in getting your data from point A to point B while minimizing business disruption.",
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080'
    },
    {
      id: 'it-investment',
      title: 'How can I convince stakeholders to invest In IT?',
      summary: "Investing in IT can be difficult. Learn how we guide IT leaders and business stakeholders to effectively show the value their IT organization brings.",
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080'
    },
    {
      id: 'employee-risk',
      title: 'Are my employees putting us at risk?',
      summary: "Cyber attacks are becoming more effective at getting past digital defenses. Build a strategy to train your team members to be your greatest cybersecurity ally.",
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080'
    },
    {
      id: 'it-talent',
      title: 'How do I find the right IT talent?',
      summary: "Hiring the right talent for IT is a skill all of it's own, and not one that many HR professionals have learned. Take the guesswork out of the IT talent acquisition process.",
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080'
    },
    {
      id: 'ai-business',
      title: 'Does AI have a place in my business?',
      summary: "Don't let hype drive your business decisions. Let's assess if and where AI can be leveraged to empower your team and business to be successful.",
      image: 'https://images.unsplash.com/photo-1671493751220-9fac23521d31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visiblePosts = 3;
  const maxIndex = blogPosts.length - visiblePosts;

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const displayedPosts = blogPosts.slice(currentIndex, currentIndex + visiblePosts);

  return (
    <section className="py-16 bg-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-circuit opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-4">
            <span className="inline-block relative">
              Latest IT Insights
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500"></span>
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Stay updated with the latest trends and solutions in IT management and cybersecurity
          </p>
        </div>

        {/* Blog post slider */}
        <div className="relative">
          {/* Navigation arrows */}
          <div className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full bg-white shadow-md hover:bg-blue-50 transition-all ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              <ArrowLeft className="h-5 w-5 text-blue-600" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full bg-white shadow-md hover:bg-blue-50 transition-all ${
                currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
            >
              <ArrowRight className="h-5 w-5 text-blue-600" />
            </Button>
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
            {displayedPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
              >
                {/* Post image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                {/* Post content */}
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-heading font-bold mb-3 text-slate-800">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {post.summary}
                  </p>
                </div>
                
                {/* Read more link */}
                <div className="p-4 border-t border-gray-100">
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="link" className="w-full justify-start text-blue-600 hover:text-blue-700 p-0 flex items-center group">
                      <span>Read Full Article</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* View all button */}
        <div className="text-center mt-10">
          <Link href="/blog">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;