import { useParams, Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowLeft, CheckCircle2, Activity, Shield, Database, Plus, Stethoscope, HeartPulse } from "lucide-react";
import { systemsList } from "./Systems";
import { useEffect } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import elmisDashboardImg from "figma:asset/94afdb7e1abf4d34f979c27748cbf0a9d0f32920.png";

export function SystemDetail() {
  const { id } = useParams();
  const system = systemsList.find(s => s.name.toLowerCase() === id?.toLowerCase());

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 400]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -300]);
  
  // Slower parallax for the hero image and content
  const heroTextY = useTransform(scrollY, [0, 600], [0, 150]);
  const heroImageY = useTransform(scrollY, [0, 800], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  if (!system) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FBFBFD]">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-[#1D1D1F]">System Not Found</h1>
          <Link to="/systems" className="text-[#007AFF] hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft size={16} /> Back to Systems
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBFBFD] relative overflow-hidden">
      {/* Background Gradient Animation Parallax */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.4, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[10%] -left-[10%] w-[50rem] h-[50rem] bg-gradient-to-br from-[#007AFF]/20 to-transparent rounded-full blur-[100px] mix-blend-multiply" 
        />
        <motion.div 
          style={{ y: y2 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[30%] -right-[20%] w-[60rem] h-[60rem] bg-gradient-to-bl from-[#34C759]/15 to-transparent rounded-full blur-[120px] mix-blend-multiply" 
        />
        <motion.div 
          style={{ y: y3 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.4, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[70%] left-[10%] w-[40rem] h-[40rem] bg-gradient-to-tr from-[#AF52DE]/15 to-transparent rounded-full blur-[90px] mix-blend-multiply" 
        />
      </div>

      <div className="relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block"
          >
            <Link to="/systems" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-[#E5E5EA] text-[#86868B] hover:text-[#1D1D1F] hover:bg-white transition-all text-sm font-medium shadow-sm">
              <ArrowLeft size={16} /> Back to Systems Overview
            </Link>
          </motion.div>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              style={{ y: heroTextY, opacity: heroOpacity }}
              className="space-y-6"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-4"
              >
                <div className={`w-16 h-16 rounded-[24px] ${system.color} flex items-center justify-center shrink-0 shadow-sm border border-black/5`}>
                  {system.icon}
                </div>
                <span className="px-4 py-1.5 rounded-full bg-white border border-[#E5E5EA] text-[#515154] text-xs font-semibold tracking-wider uppercase shadow-sm">
                  {system.category} System
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-[#1D1D1F] leading-[1.1]"
              >
                {system.name}
              </motion.h1>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-[#86868B] font-medium"
              >
                {system.fullName}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-[#515154] leading-relaxed max-w-xl"
              >
                {system.description}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="pt-6"
              >
                <button className="px-8 py-4 rounded-full bg-[#1D1D1F] text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/10 flex items-center gap-2">
                  Access Portal <ArrowLeft size={18} className="rotate-180" />
                </button>
              </motion.div>
            </motion.div>

            <motion.div 
              style={{ y: heroImageY }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              {/* Main Photo Placeholder */}
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-white border border-[#E5E5EA] shadow-2xl relative group">
                {system.name.toLowerCase() === 'elmis' ? (
                  <ImageWithFallback 
                    src={elmisDashboardImg} 
                    alt={`${system.name} Dashboard Interface`} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <img 
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80" 
                      alt={`${system.name} Dashboard Interface`} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 mix-blend-luminosity opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-end p-8 text-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 border border-white/30 text-white">
                        <Plus size={24} />
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-1">System Dashboard</h3>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Supporting Healthcare Services Section */}
        <div className="bg-white border-y border-[#E5E5EA] py-32 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-6">
                Advancing Healthcare Delivery
              </h2>
              <p className="text-[#86868B] text-lg max-w-2xl mx-auto leading-relaxed">
                Discover how {system.name} is transforming the daily operations of medical facilities and improving patient outcomes nationwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Secondary Photo Placeholder */}
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#F5F5F7] border border-[#E5E5EA] shadow-xl relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80" 
                    alt="Healthcare Professionals" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 mix-blend-luminosity opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-end p-8 text-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 border border-white/30 text-white">
                      <Plus size={24} />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-1">Staff Photos</h3>
                  </div>
                </div>
                
                {/* Floating Stat Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -right-8 -bottom-8 bg-white p-6 rounded-2xl shadow-xl border border-[#E5E5EA] max-w-[200px] hidden md:block"
                >
                  <HeartPulse className="w-8 h-8 text-[#FF2D55] mb-3" />
                  <div className="text-3xl font-bold text-[#1D1D1F] mb-1">100%</div>
                  <div className="text-sm text-[#86868B] leading-tight">Improved patient data accuracy</div>
                </motion.div>
              </motion.div>

              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#007AFF]/10 flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6 text-[#007AFF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1D1D1F] mb-2">Real-time Data Capture</h3>
                    <p className="text-[#515154] leading-relaxed">
                      By eliminating paper-based forms, {system.name} ensures that medical data is recorded instantly, reducing errors and allowing for immediate access by authorized personnel across the network.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#34C759]/10 flex items-center justify-center shrink-0">
                    <Database className="w-6 h-6 text-[#34C759]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1D1D1F] mb-2">Centralized Continuity of Care</h3>
                    <p className="text-[#515154] leading-relaxed">
                      Patient histories are unified in a secure digital environment, meaning a patient can visit any facility in Eswatini and their clinician will have full context of their health background.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FF9500]/10 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-[#FF9500]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1D1D1F] mb-2">Robust Compliance</h3>
                    <p className="text-[#515154] leading-relaxed">
                      Built to meet rigorous national and international healthcare data privacy standards, guaranteeing that sensitive information is only accessible by verified healthcare professionals.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#AF52DE]/10 flex items-center justify-center shrink-0">
                    <Stethoscope className="w-6 h-6 text-[#AF52DE]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1D1D1F] mb-2">Resource Optimization</h3>
                    <p className="text-[#515154] leading-relaxed">
                      Automated reporting tools free up administrative time, allowing nurses and doctors to dedicate more of their working hours directly to patient consultation and treatment.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}