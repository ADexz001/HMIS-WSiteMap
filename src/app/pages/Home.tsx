import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { ArrowRight, Activity, Target, Eye, Truck, Stethoscope, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router";

export function Home() {
  const { scrollY } = useScroll();
  
  // Parallax layers for depth
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -200]);

  // Mouse Parallax Setup
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const targetX = clientX - window.innerWidth / 2;
    const targetY = clientY - window.innerHeight / 2;
    mouseX.set(targetX);
    mouseY.set(targetY);
  };

  const smoothMouseX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const orb1X = useTransform(smoothMouseX, [-500, 500], [-30, 30]);
  const orb1Y = useTransform(smoothMouseY, [-500, 500], [-30, 30]);
  
  const orb2X = useTransform(smoothMouseX, [-500, 500], [40, -40]);
  const orb2Y = useTransform(smoothMouseY, [-500, 500], [40, -40]);

  const orb3X = useTransform(smoothMouseX, [-500, 500], [-20, 20]);
  const orb3Y = useTransform(smoothMouseY, [-500, 500], [20, -20]);

  return (
    <div onMouseMove={handleMouseMove} className="w-full overflow-hidden relative min-h-screen bg-[#FBFBFD]">
      
      {/* Parallax Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute -top-[5%] -left-[5%] w-[40rem] h-[40rem]">
          <motion.div 
            style={{ x: orb1X, y: orb1Y }}
            animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-gradient-to-br from-[#007AFF]/15 to-transparent rounded-full blur-[100px] mix-blend-multiply opacity-70"
          />
        </motion.div>

        <motion.div style={{ y: y2 }} className="absolute top-[20%] -right-[10%] w-[50rem] h-[50rem]">
          <motion.div 
            style={{ x: orb2X, y: orb2Y }}
            animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-gradient-to-bl from-[#34C759]/10 to-transparent rounded-full blur-[120px] mix-blend-multiply opacity-50"
          />
        </motion.div>

        <motion.div style={{ y: y3 }} className="absolute top-[60%] left-[15%] w-[35rem] h-[35rem]">
          <motion.div 
            style={{ x: orb3X, y: orb3Y }}
            animate={{ scale: [1, 1.15, 1], rotate: [0, 45, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-gradient-to-tr from-[#AF52DE]/10 to-transparent rounded-full blur-[90px] mix-blend-multiply opacity-60"
          />
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E5E5EA] text-[#1D1D1F] text-xs font-semibold uppercase tracking-widest mb-8 shadow-sm">
            <Activity size={14} className="text-[#007AFF]" />
            <span>Ministry of Health • Eswatini</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-[#1D1D1F] mb-6 leading-[1.1]">
            Health Management <br className="hidden md:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#007AFF] to-[#34C759]">Information System</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#515154] max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
            The national digital ecosystem transforming patient care, securing vital health data, and empowering Eswatini through technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/systems" className="px-8 py-4 rounded-full bg-[#1D1D1F] text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/10 flex items-center gap-2 w-full sm:w-auto justify-center">
              Explore the Systems <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="px-8 py-4 rounded-full bg-white/80 backdrop-blur-md text-[#1D1D1F] font-medium border border-[#E5E5EA] hover:bg-[#F5F5F7] transition-colors shadow-sm hover:shadow-md w-full sm:w-auto justify-center flex">
              Learn About Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Teaser Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-xl rounded-[3rem] p-8 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E5EA]/50 relative overflow-hidden flex flex-col md:flex-row items-center gap-12"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#007AFF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="md:w-1/2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#007AFF] text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
              <Target size={14} /> Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-6 leading-[1.15]">
              The digital backbone of Eswatini's healthcare.
            </h2>
            <p className="text-lg text-[#515154] leading-relaxed mb-8">
              We are dedicated to developing, deploying, and maintaining world-class technological solutions that save lives. From rural clinics to national hospitals, our systems ensure that data flows securely to optimize health outcomes for every citizen.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1D1D1F] text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/10">
              Read More About Us <ArrowRight size={18} />
            </Link>
          </div>

          <div className="md:w-1/2 relative z-10 w-full h-72 md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl group">
            <img src="https://images.unsplash.com/photo-1655207882298-bd11bb69ee43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3dhdGluaXxlbnwxfHx8fDE3NzU1MTAzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Eswatini Landscape" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1F]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-8 right-8 text-white">
               <p className="font-bold text-2xl mb-1">Innovating for the Kingdom</p>
               <p className="text-base text-white/80 font-medium">Building a healthier tomorrow.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid: Transforming Healthcare (Fewer Cards) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4">Transforming Healthcare in Eswatini</h2>
          <p className="text-[#86868B] text-lg max-w-2xl mx-auto">
            Our interconnected digital tools work tirelessly behind the scenes to ensure every citizen receives consistent, high-quality care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -5 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative group shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E5EA]/50 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] min-h-[400px]"
          >
            <div className="z-10 relative max-w-md bg-white/60 p-6 rounded-2xl backdrop-blur-sm">
              <Stethoscope className="w-10 h-10 text-[#007AFF] mb-4" strokeWidth={2} />
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-3">Seamless Patient Care</h3>
              <p className="text-[#515154] text-lg leading-relaxed">
                The Client Management Information System (CMIS) tracks medical histories across the country. Whether a patient visits a rural clinic or a national hospital, doctors have instant, secure access to their records.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-[80%] h-[90%] opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none translate-x-[15%] translate-y-[15%]">
              <img src="https://images.unsplash.com/photo-1757152962882-6bf8495b324d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NTUxMDMwMnww&ixlib=rb-4.1.0&q=80&w=1080" alt="Doctor technology" className="object-cover w-full h-full rounded-tl-[3rem] shadow-2xl" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -5 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="bg-[#34C759]/10 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#34C759]/20 hover:shadow-[0_20px_40px_rgb(52,199,89,0.15)] min-h-[400px]"
          >
            <div className="z-10 relative">
              <Truck className="w-12 h-12 text-[#34C759] mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-3">Reliable Supply Chains</h3>
              <p className="text-[#515154] text-lg leading-relaxed">
                Through our electronic Logistics Management System (eLMIS), we monitor national pharmaceutical stock levels to predict shortages before they happen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map and Connect Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 w-full"
        >
          <div className="rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E5EA] h-[450px] w-full relative group">
            <div className="absolute inset-0 bg-[#007AFF]/5 mix-blend-multiply pointer-events-none group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.259949573516!2d31.296139674420303!3d-26.51176287656878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eef49003dc5d4f3%3A0xb014e6f41022eb14!2sHMIS%20Eswatini!5e0!3m2!1sen!2s!4v1775274478019!5m2!1sen!2s"
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HMIS Headquarters"
            ></iframe>
          </div>

          <div className="bg-[#1D1D1F] rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#007AFF]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="relative z-10 text-center md:text-left">
              <h4 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">Connect With HMIS</h4>
              <p className="text-[#86868B] text-sm md:text-base max-w-lg">
                Follow our social channels for the latest public health updates, system announcements, and health practitioner training resources.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-4 shrink-0">
              <a href="https://www.facebook.com/hmisswaziland" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/10 hover:bg-[#007AFF] hover:scale-105 rounded-2xl flex items-center justify-center transition-all text-white shadow-sm" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://x.com/hmis_eswatini?s=11" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/10 hover:bg-[#007AFF] hover:scale-105 rounded-2xl flex items-center justify-center transition-all text-white shadow-sm" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="https://www.linkedin.com/company/hmis-eswatini/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/10 hover:bg-[#007AFF] hover:scale-105 rounded-2xl flex items-center justify-center transition-all text-white shadow-sm" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}