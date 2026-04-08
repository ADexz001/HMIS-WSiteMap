import logoImg from "../../imports/logo.png"
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Outlet, Link, useLocation } from "react-router";
import { useState } from "react";
import { ChevronDown, Menu, X, Activity, Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Systems", path: "/systems" },
    { name: "Updates", path: "/updates" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] font-sans selection:bg-[#007AFF] selection:text-white flex flex-col">
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/70 backdrop-blur-md border-b border-[#E5E5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.location.href='/'}>
              <ImageWithFallback src={logoImg} alt="HMIS Logo" className="h-12 w-auto" />
              <span className="font-semibold text-xl tracking-tight">HMIS Eswatini</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group h-20 flex items-center"
                  onMouseEnter={() => link.name === 'About' && setIsAboutHovered(true)}
                  onMouseLeave={() => link.name === 'About' && setIsAboutHovered(false)}
                >
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === link.path ? "text-[#000000]" : "text-[#86868B] hover:text-[#1D1D1F]"
                    } flex items-center gap-1`}
                  >
                    {link.name}
                    {link.name === 'About' && <ChevronDown size={14} className="mt-0.5 opacity-50" />}
                  </Link>

                  {/* About Dropdown */}
                  {link.name === 'About' && isAboutHovered && (
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 pt-2 pb-1 px-1">
                      <div className="bg-white/90 backdrop-blur-xl border border-[#E5E5EA] rounded-2xl shadow-xl overflow-hidden p-2">
                        <Link to="/about#mission" className="block px-4 py-3 text-sm font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] rounded-xl transition-colors">
                          Mission and Vision
                        </Link>
                        <div className="px-4 py-2 mt-1">
                          <p className="text-xs font-semibold text-[#86868B] uppercase tracking-wider mb-2">Departments</p>
                          <ul className="space-y-1">
                            {['Applications', 'Database', 'Networking', 'Help Desk'].map(dept => (
                              <li key={dept}>
                                <Link to={`/about#${dept.toLowerCase().replace(' ', '-')}`} className="block px-2 py-2 text-sm text-[#515154] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] rounded-lg transition-colors">
                                  {dept}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#1D1D1F] hover:text-[#86868B] transition-colors p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#E5E5EA] absolute w-full left-0 top-20">
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className="block px-3 py-3 rounded-xl text-base font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.name === 'About' && (
                    <div className="pl-6 pb-2 space-y-1">
                       <Link to="/about#mission" className="block px-3 py-2 rounded-lg text-sm font-medium text-[#515154] hover:bg-[#F5F5F7]">Mission and Vision</Link>
                       <p className="px-3 py-2 text-xs font-semibold text-[#86868B] uppercase tracking-wider">Departments</p>
                       {['Applications', 'Database', 'Networking', 'Help Desk'].map(dept => (
                         <Link key={dept} to={`/about#${dept.toLowerCase().replace(' ', '-')}`} className="block px-3 py-2 rounded-lg text-sm text-[#515154] hover:bg-[#F5F5F7]">
                           {dept}
                         </Link>
                       ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <footer className="border-t border-[#E5E5EA] bg-white pt-16 pb-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-12">
            
            {/* Column 1: About */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <ImageWithFallback src={logoImg} alt="HMIS Logo" className="h-8 w-auto" />
                <span className="font-semibold text-lg tracking-tight text-[#1D1D1F]">HMIS Eswatini</span>
              </div>
              <p className="text-sm text-[#86868B] leading-relaxed">
                HMIS is the Health Management Information System used by the Ministry of Health in Eswatini to manage and improve national healthcare data.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://www.facebook.com/hmisswaziland" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] flex items-center justify-center text-[#1D1D1F] hover:text-[#007AFF] transition-colors" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="https://x.com/hmis_eswatini?s=11" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] flex items-center justify-center text-[#1D1D1F] hover:text-[#007AFF] transition-colors" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="https://www.linkedin.com/company/hmis-eswatini/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] flex items-center justify-center text-[#1D1D1F] hover:text-[#007AFF] transition-colors" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Column 2: HMIS Systems */}
            <div>
              <h3 className="font-semibold text-[#1D1D1F] mb-6">HMIS Systems</h3>
              <ul className="space-y-4 text-sm">
                <li><Link to="/systems" className="text-[#86868B] hover:text-[#007AFF] transition-colors">Client Management Information System (CMIS)</Link></li>
                <li><Link to="/systems" className="text-[#86868B] hover:text-[#007AFF] transition-colors">Electronic Logistics Management (eLMIS)</Link></li>
                <li><Link to="/systems" className="text-[#86868B] hover:text-[#007AFF] transition-colors">Community Based Health Information System (CBHIS)</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact Information */}
            <div>
              <h3 className="font-semibold text-[#1D1D1F] mb-6">Contact Information</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 text-[#86868B]">
                  <MapPin size={18} className="text-[#1D1D1F] flex-shrink-0 mt-0.5" />
                  <span>Eswatini Ministry of Health<br/>Behind CMS, 1 King Mswati III Ave E<br/>Matsapha, Eswatini</span>
                </li>
                <li className="flex items-center gap-3 text-[#86868B]">
                  <Phone size={18} className="text-[#1D1D1F] flex-shrink-0" />
                  <a href="tel:+26824047712" className="hover:text-[#007AFF] transition-colors">+(268) 2404 7712</a>
                </li>
                <li className="flex items-center gap-3 text-[#86868B]">
                  <Mail size={18} className="text-[#1D1D1F] flex-shrink-0" />
                  <a href="mailto:eswatinihmis@gmail.com" className="hover:text-[#007AFF] transition-colors">eswatinihmis@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#E5E5EA] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#86868B]">
              © {new Date().getFullYear()} HMIS Eswatini. All rights reserved.
            </p>
            <p className="text-xs text-[#86868B]">
              Transforming Healthcare through Technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
