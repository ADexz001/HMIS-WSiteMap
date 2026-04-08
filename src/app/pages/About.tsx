import { Target, Eye, Layers, Server, ShieldCheck, HeadphonesIcon } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";

export function About() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const targetX = clientX - window.innerWidth / 2;
    const targetY = clientY - window.innerHeight / 2;
    mouseX.set(targetX);
    mouseY.set(targetY);
  };

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const orb1X = useTransform(smoothMouseX, [-500, 500], [-30, 30]);
  const orb1Y = useTransform(smoothMouseY, [-500, 500], [-30, 30]);
  
  const orb2X = useTransform(smoothMouseX, [-500, 500], [40, -40]);
  const orb2Y = useTransform(smoothMouseY, [-500, 500], [40, -40]);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div onMouseMove={handleMouseMove} className="min-h-screen bg-[#FBFBFD] pb-24 relative overflow-hidden">
      
      {/* Background Gradient Animation & Parallax Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          style={{ x: orb1X, y: orb1Y }}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-400/15 rounded-full blur-[100px] mix-blend-multiply"
        />
        <motion.div 
          style={{ x: orb2X, y: orb2Y }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-400/15 rounded-full blur-[100px] mix-blend-multiply"
        />
        <motion.div 
          style={{ y: yBg }}
          className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] bg-emerald-400/10 rounded-full blur-[100px] mix-blend-multiply"
        />
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="pt-20 pb-16 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1D1D1F] mb-6">About HMIS Eswatini</h1>
            <p className="text-xl text-[#86868B] max-w-3xl mx-auto font-light leading-relaxed">
              We are the digital backbone of Eswatini's healthcare system, dedicated to developing, deploying, and maintaining world-class technological solutions that save lives.
            </p>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section id="mission" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 scroll-mt-24">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E5EA]/50"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#007AFF] mb-6">
                <Target size={28} />
              </div>
              <h2 className="text-3xl font-bold text-[#1D1D1F] mb-4">Our Mission</h2>
              <p className="text-lg text-[#515154] leading-relaxed">
                To provide robust, secure, and user-centric health information systems that empower healthcare professionals with real-time data, ultimately enhancing patient care and operational efficiency across the Kingdom of Eswatini.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="bg-[#1D1D1F]/95 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-lg text-white border border-white/10"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-md">
                <Eye size={28} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-[#A1A1A6] leading-relaxed">
                To be the premier standard for digital health innovation in Africa, creating a seamless ecosystem where data flows securely to optimize health outcomes for every citizen.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Departments */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4">Our Departments</h2>
            <p className="text-[#86868B] text-lg max-w-2xl mx-auto">Four specialized pillars working in unison to deliver excellence.</p>
          </motion.div>

          <div className="space-y-12">
            {/* Applications */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              id="applications" 
              className="scroll-mt-24 flex flex-col md:flex-row gap-8 items-center bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E5EA]/50"
            >
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-blue-50/80 rounded-full flex items-center justify-center text-[#007AFF]">
                  <Layers size={64} strokeWidth={1.5} />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-[#1D1D1F] mb-3">Applications</h3>
                <p className="text-[#515154] text-lg leading-relaxed mb-4">
                  The creative force behind our software. This team develops, tests, and refines the core systems like CMIS and eLMIS. They focus on UI/UX design, ensuring that healthcare workers have intuitive tools that reduce administrative burden.
                </p>
                <ul className="flex flex-wrap gap-4 text-sm font-medium text-[#86868B]">
                   <li className="bg-[#F5F5F7] px-3 py-1 rounded-lg">Frontend Dev</li>
                   <li className="bg-[#F5F5F7] px-3 py-1 rounded-lg">Backend API</li>
                   <li className="bg-[#F5F5F7] px-3 py-1 rounded-lg">UI/UX Design</li>
                </ul>
              </div>
            </motion.div>

            {/* Database */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              id="database" 
              className="scroll-mt-24 flex flex-col md:flex-row-reverse gap-8 items-center bg-[#F5F5F7]/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-[#E5E5EA]/30"
            >
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-purple-100/80 rounded-full flex items-center justify-center text-[#AF52DE]">
                  <Server size={64} strokeWidth={1.5} />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-[#1D1D1F] mb-3">Database & Analytics</h3>
                <p className="text-[#515154] text-lg leading-relaxed mb-4">
                  The custodians of truth. This department manages massive relational databases, ensuring data integrity, performance tuning, and complex migrations. They also power our business intelligence tools, transforming raw data into actionable epidemiological insights.
                </p>
                <ul className="flex flex-wrap gap-4 text-sm font-medium text-[#86868B]">
                   <li className="bg-white px-3 py-1 rounded-lg shadow-sm">Data Warehousing</li>
                   <li className="bg-white px-3 py-1 rounded-lg shadow-sm">BI Dashboards</li>
                   <li className="bg-white px-3 py-1 rounded-lg shadow-sm">Data Security</li>
                </ul>
              </div>
            </motion.div>

            {/* Networking */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              id="networking" 
              className="scroll-mt-24 flex flex-col md:flex-row gap-8 items-center bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E5EA]/50"
            >
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-green-50/80 rounded-full flex items-center justify-center text-[#34C759]">
                  <ShieldCheck size={64} strokeWidth={1.5} />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-[#1D1D1F] mb-3">Networking & Infrastructure</h3>
                <p className="text-[#515154] text-lg leading-relaxed mb-4">
                  The silent enablers. Responsible for the physical and cloud infrastructure that keeps HMIS online 24/7. They deploy servers to rural clinics, manage nationwide VPNs, and implement rigorous cybersecurity protocols to protect patient data from threats.
                </p>
                <ul className="flex flex-wrap gap-4 text-sm font-medium text-[#86868B]">
                   <li className="bg-[#F5F5F7] px-3 py-1 rounded-lg">Cloud Ops</li>
                   <li className="bg-[#F5F5F7] px-3 py-1 rounded-lg">Cybersecurity</li>
                   <li className="bg-[#F5F5F7] px-3 py-1 rounded-lg">WAN/LAN Management</li>
                </ul>
              </div>
            </motion.div>

            {/* Help Desk */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              id="help-desk" 
              className="scroll-mt-24 flex flex-col md:flex-row-reverse gap-8 items-center bg-[#1D1D1F]/95 backdrop-blur-xl text-white rounded-[2.5rem] p-8 md:p-12 border border-white/10"
            >
               <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                  <HeadphonesIcon size={64} strokeWidth={1.5} />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Help Desk & Support</h3>
                <p className="text-[#A1A1A6] text-lg leading-relaxed mb-4">
                  The frontline heroes. Our support technicians provide immediate assistance to healthcare workers facing technical difficulties. They conduct training sessions, create user manuals, and ensure that technology adoption is smooth and frustration-free.
                </p>
                <ul className="flex flex-wrap gap-4 text-sm font-medium text-[#86868B]">
                   <li className="bg-white/10 px-3 py-1 rounded-lg">L1/L2 Support</li>
                   <li className="bg-white/10 px-3 py-1 rounded-lg">User Training</li>
                   <li className="bg-white/10 px-3 py-1 rounded-lg">Field Deployment</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
