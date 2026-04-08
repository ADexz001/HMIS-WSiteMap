import { motion } from "motion/react";
import { Search, Monitor, Smartphone, Stethoscope, BriefcaseMedical, Building2, Pill, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router";

export const systemsList = [
  {
    id: 1,
    name: "CMIS",
    fullName: "Client Management Information System",
    description: "The core electronic medical record system used across health facilities to track patient history, treatments, and outcomes seamlessly.",
    icon: <BriefcaseMedical size={32} className="text-[#007AFF]" />,
    category: "Clinical",
    color: "bg-blue-50"
  },
  {
    id: 2,
    name: "eLMIS",
    fullName: "Electronic Logistics Management",
    description: "Comprehensive supply chain solution monitoring pharmaceutical stock levels, predicting shortages, and automating procurement.",
    icon: <Pill size={32} className="text-[#34C759]" />,
    category: "Logistics",
    color: "bg-green-50"
  },
  {
    id: 3,
    name: "HRIS",
    fullName: "Human Resources Information System",
    description: "Manages health workforce data including payroll, deployment, qualifications, and training history for all medical personnel.",
    icon: <Building2 size={32} className="text-[#FF9500]" />,
    category: "Administrative",
    color: "bg-orange-50"
  },
  {
    id: 7,
    name: "CBHIS",
    fullName: "Community Based Health Information System",
    description: "Connects community health workers with national databases, ensuring grassroots health data is accurately reported and monitored.",
    icon: <Search size={32} className="text-[#AF52DE]" />,
    category: "Community",
    color: "bg-purple-50"
  },
  {
    id: 8,
    name: "EMMS",
    fullName: "Electronic Medicines Management System",
    description: "Streamlines medication inventory, dispensing workflows, and prescription tracking across the national health grid.",
    icon: <Monitor size={32} className="text-[#FF2D55]" />,
    category: "Logistics",
    color: "bg-pink-50"
  }
];

export function Systems() {
  const [searchTerm, setSearchTerm] = useState("");
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      align: "start",
      containScroll: "trimSnaps",
      dragFree: true
    }
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const rootNode = emblaApi.rootNode();
    let isWheeling = false;
    let wheelTimer: NodeJS.Timeout;

    const onWheel = (e: WheelEvent) => {
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (isHorizontal) {
        e.preventDefault();
        const engine = emblaApi.internalEngine();
        const scrollAmount = e.deltaX;
        
        engine.animation.stop();
        
        const newTarget = engine.target.get() - scrollAmount;
        engine.target.set(newTarget);
        engine.location.set(newTarget);
        engine.translate.to(newTarget);
        
        if (!isWheeling) {
          isWheeling = true;
          emblaApi.emit("scroll");
        }
        
        clearTimeout(wheelTimer);
        wheelTimer = setTimeout(() => {
          isWheeling = false;
          emblaApi.emit("settle");
          
          // Snap/bounds check when scrolling ends
          engine.scrollTo.distance(0, !engine.options.dragFree);
          engine.animation.start();
          
          // Force a select event to update buttons and dots
          emblaApi.emit("select");
        }, 50);
      }
    };

    rootNode.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      rootNode.removeEventListener("wheel", onWheel);
      clearTimeout(wheelTimer);
    };
  }, [emblaApi]);

  const filteredSystems = systemsList.filter(system => 
    system.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    system.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    system.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FBFBFD] pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="flex flex-col items-center mb-16 space-y-8">
          <div className="text-center space-y-4 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1D1D1F]">
              Our Systems
            </h1>
            <p className="text-lg text-[#86868B]">
              Discover the interconnected software suite powering Eswatini's health infrastructure.
            </p>
          </div>

          <div className="relative w-full max-w-xl group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#86868B] group-focus-within:text-[#007AFF] transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 rounded-full border border-[#E5E5EA] bg-white/50 backdrop-blur-md text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF] transition-all shadow-sm text-lg"
              placeholder="Search systems, categories, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Carousel Section */}
        {filteredSystems.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Embla Viewport */}
            <div className="overflow-hidden pb-12 pt-4 cursor-grab active:cursor-grabbing" ref={emblaRef}>
              <div className="flex -ml-6 select-none touch-pan-y">
                {filteredSystems.map((system) => (
                  <div
                    key={system.id}
                    className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_380px] min-w-0 pl-6"
                  >
                    <div className="h-full bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 flex flex-col justify-between hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex-1 flex flex-col">
                        <div className="flex items-center gap-5 mb-8">
                          <div className={`w-14 h-14 rounded-2xl ${system.color} flex items-center justify-center shrink-0`}>
                            {system.icon}
                          </div>
                          <div>
                            <span className="text-xs font-semibold tracking-wider uppercase text-[#86868B] block mb-1">
                              {system.category}
                            </span>
                            <h3 className="text-2xl font-bold text-[#1D1D1F] leading-none">{system.name}</h3>
                          </div>
                        </div>
                        <h4 className="text-base font-medium text-[#515154] mb-4">{system.fullName}</h4>
                        <p className="text-[#86868B] leading-relaxed text-base flex-1">
                          {system.description}
                        </p>
                      </div>
                      
                      <div className="pt-6 mt-8 border-t border-[#E5E5EA]">
                        <Link to={`/systems/${system.name.toLowerCase()}`} className="text-[#007AFF] font-medium text-sm hover:underline underline-offset-4 flex items-center gap-1 group w-max">
                          Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-2">
              <button
                className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${
                  prevBtnEnabled 
                    ? "bg-white border-[#E5E5EA] text-[#1D1D1F] hover:bg-[#F5F5F7] shadow-sm cursor-pointer" 
                    : "bg-transparent border-[#E5E5EA] text-[#E5E5EA] cursor-not-allowed"
                }`}
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              {emblaApi && (
                <div className="flex gap-2 mx-4 hidden sm:flex">
                  {emblaApi.scrollSnapList().map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === selectedIndex ? "bg-[#007AFF] w-6" : "bg-[#D1D1D6] hover:bg-[#86868B]"
                      }`}
                      onClick={() => scrollTo(index)}
                    />
                  ))}
                </div>
              )}

              <button
                className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${
                  nextBtnEnabled 
                    ? "bg-white border-[#E5E5EA] text-[#1D1D1F] hover:bg-[#F5F5F7] shadow-sm cursor-pointer" 
                    : "bg-transparent border-[#E5E5EA] text-[#E5E5EA] cursor-not-allowed"
                }`}
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="text-center py-24">
            <Monitor className="w-16 h-16 text-[#E5E5EA] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#1D1D1F]">No systems found</h3>
            <p className="text-[#86868B] mt-2">Try adjusting your search terms.</p>
          </div>
        )}

      </div>
    </div>
  );
}
