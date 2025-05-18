import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Animated Particles component
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particles = useRef<any[]>([]);
  const animationFrameId = useRef<number | null>(null);
  
  // Initialize particles
  const initParticles = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear existing particles
    particles.current = [];
    
    // Create particles
    const particleCount = Math.min(Math.max(Math.floor(dimensions.width / 10), 50), 150);
    
    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        radius: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.2,
        directionX: Math.random() * 0.6 - 0.3,
        directionY: Math.random() * 0.6 - 0.3,
        color: `rgba(90, 142, 197, ${Math.random() * 0.5 + 0.1})`,
      });
    }
  };
  
  // Animate particles
  const animate = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);
    
    // Update particles
    particles.current.forEach(particle => {
      // Check influence of mouse position (if mouse is active)
      if (mousePosition.x > 0 || mousePosition.y > 0) {
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Apply small attraction to mouse position
        if (distance < 100) {
          const forceX = dx / distance * 0.1;
          const forceY = dy / distance * 0.1;
          particle.directionX = (particle.directionX + forceX) * 0.98;
          particle.directionY = (particle.directionY + forceY) * 0.98;
        }
      }
      
      // Move particle
      particle.x += particle.directionX * particle.speed;
      particle.y += particle.directionY * particle.speed;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > dimensions.width) {
        particle.directionX *= -1;
      }
      
      if (particle.y < 0 || particle.y > dimensions.height) {
        particle.directionY *= -1;
      }
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    });
    
    // Connect nearby particles
    particles.current.forEach((particleA, indexA) => {
      for (let indexB = indexA + 1; indexB < particles.current.length; indexB++) {
        const particleB = particles.current[indexB];
        const dx = particleA.x - particleB.x;
        const dy = particleA.y - particleB.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(90, 142, 197, ${0.15 * (1 - distance / 100)})`; // Fade out with distance
          ctx.lineWidth = 0.5;
          ctx.moveTo(particleA.x, particleA.y);
          ctx.lineTo(particleB.x, particleB.y);
          ctx.stroke();
        }
      }
    });
    
    // Continue animation
    animationFrameId.current = requestAnimationFrame(animate);
  };
  
  // Handle mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
  
  // Reset mouse position when leaving
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };
  
  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const { width, height } = canvasRef.current.parentElement.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    
    // Initial setup
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Initialize and start animation when dimensions change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      initParticles();
      animate();
    }
    
    // Clean up animation
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [dimensions]);
  
  // Add mouse event listeners
  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.addEventListener('mousemove', handleMouseMove);
      canvasRef.current.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        if (canvasRef.current) {
          canvasRef.current.removeEventListener('mousemove', handleMouseMove);
          canvasRef.current.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }
  }, [canvasRef.current]);
  
  return (
    <canvas 
      ref={canvasRef} 
      width={dimensions.width} 
      height={dimensions.height} 
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

const CTA = () => {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-[#0d4f86] to-black text-white overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>
      
      {/* Subtle circuit pattern overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Glowing orbs */}
      <motion.div 
        className="absolute left-1/4 bottom-1/4 w-64 h-64 rounded-full bg-[#0d4f86]/20 blur-[100px]"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-hidden="true"
      />
      
      <motion.div 
        className="absolute right-1/4 top-1/4 w-48 h-48 rounded-full bg-[#0d4f86]/20 blur-[100px]"
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        aria-hidden="true"
      />
      
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Strengthen Your IT Security Posture?</h2>
          <p className="mt-4 text-slate-200 max-w-2xl">
            Take our complimentary <strong>Security Culture Maturity Assessment</strong> to discover how your people, policies, and technology stack up against modern cyber threats.
          </p>
        </motion.div>
        
        <motion.a 
          href="https://security-culture.replit.app/assessment" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-[#0d4f86] px-6 py-3 rounded-md font-semibold hover:bg-[#0d4f86] hover:text-white transition-all shadow-lg hover:shadow-blue-500/30 relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 inline-flex items-center">
            Begin Your Assessment 
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="absolute inset-0 z-0 bg-white group-hover:bg-[#0d4f86] transition-colors"></span>
          
          {/* Pulsing border effect */}
          <motion.span 
            className="absolute inset-0 -z-10 rounded-md opacity-0 border border-white/50"
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.9, 1.1, 0.9]
            }} 
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.span>
        </motion.a>
      </div>
    </section>
  );
};

export default CTA;
