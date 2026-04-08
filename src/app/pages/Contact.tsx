import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <div className="min-h-screen bg-[#FBFBFD] pt-12 pb-24">
      {/* 1. Main Container - Controls the overall page width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1D1D1F]">
            Get in Touch
          </h1>
          <p className="text-lg text-[#86868B] max-w-2xl mx-auto">
            Our specialized teams are ready to assist you. Whether it's a technical issue, training request, or general inquiry.
          </p>
        </div>

        {/* 2. Top Section: Form and Info (Two Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-16">
          
          {/* Contact Form */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E5EA] h-full">
            <h2 className="text-2xl font-bold text-[#1D1D1F] mb-6">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-[#1D1D1F]">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border-transparent focus:bg-white focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 transition-all outline-none text-[#1D1D1F]" placeholder="Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-[#1D1D1F]">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border-transparent focus:bg-white focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 transition-all outline-none text-[#1D1D1F]" placeholder="Last Name" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-[#1D1D1F]">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border-transparent focus:bg-white focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 transition-all outline-none text-[#1D1D1F]" placeholder="email@gmail.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="department" className="text-sm font-medium text-[#1D1D1F]">Department Routing</label>
                <select id="department" className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border-transparent focus:bg-white focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 transition-all outline-none text-[#1D1D1F] appearance-none">
                  <option>Help Desk Support</option>
                  <option>Applications Team</option>
                  <option>Database & Analytics</option>
                  <option>Networking & Infrastructure</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[#1D1D1F]">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl bg-[#F5F5F7] border-transparent focus:bg-white focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 transition-all outline-none text-[#1D1D1F] resize-none" placeholder="How can we help you today?"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#007AFF] hover:bg-[#0056B3] text-white font-medium py-4 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>

          <div className="h-full flex flex-col justify-center py-8 md:pl-8 lg:pl-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#1D1D1F] mb-12">Contact Information</h3>
            <div className="space-y-12">
              <div className="flex items-start gap-6 lg:gap-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-50/80 rounded-3xl flex items-center justify-center text-[#007AFF] flex-shrink-0">
                  <Mail className="w-8 h-8 lg:w-10 lg:h-10" />
                </div>
                <div className="pt-1 lg:pt-2">
                  <h4 className="text-xl lg:text-2xl font-semibold text-[#1D1D1F] mb-2">Email Support</h4>
                  <p className="text-[#86868B] text-base lg:text-lg mb-2">Our team typically responds within 2 hours.</p>
                  <a href="mailto:eswatinihmis@gmail.com" className="text-[#007AFF] text-lg lg:text-xl font-medium hover:underline">eswatinihmis@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 lg:gap-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-50/80 rounded-3xl flex items-center justify-center text-[#34C759] flex-shrink-0">
                  <Phone className="w-8 h-8 lg:w-10 lg:h-10" />
                </div>
                <div className="pt-1 lg:pt-2">
                  <h4 className="text-xl lg:text-2xl font-semibold text-[#1D1D1F] mb-2">Contact Numbers</h4>
                  <p className="text-[#86868B] text-base lg:text-lg mb-2">Toll Free: <a href="tel:8006005" className="text-[#007AFF] hover:underline">800 6005</a></p>
                  <a href="tel:+26824047712" className="text-[#007AFF] text-lg lg:text-xl font-medium hover:underline">+(268) 2404 7712</a>
                </div>
              </div>

              <div className="flex items-start gap-6 lg:gap-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-orange-50/80 rounded-3xl flex items-center justify-center text-[#FF9500] flex-shrink-0">
                  <MapPin className="w-8 h-8 lg:w-10 lg:h-10" />
                </div>
                <div className="pt-1 lg:pt-2">
                  <h4 className="text-xl lg:text-2xl font-semibold text-[#1D1D1F] mb-2">Headquarters</h4>
                  <p className="text-[#86868B] text-base lg:text-lg leading-relaxed">
                    Behind CMS,1 King Mswati III Ave E<br />
                    Matsaphs, Eswatini<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-6 w-full">
          <div className="rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E5E5EA] h-[450px] w-full relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.259949573516!2d31.296139674420303!3d-26.51176287656878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eef49003dc5d4f3%3A0xb014e6f41022eb14!2sHMIS%20Eswatini!5e0!3m2!1sen!2s!4v1775274478019!5m2!1sen!2s"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HMIS Headquarters"
            ></iframe>
          </div>

          <div className="bg-[#1D1D1F] rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="relative z-10 text-center md:text-left">
              <h4 className="text-xl md:text-2xl font-bold mb-2">Connect With Us</h4>
              <p className="text-[#86868B] text-sm md:text-base">
                Follow our social channels for the latest updates, announcements, and training resources.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-4">
              <a href="https://www.facebook.com/hmisswaziland" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-colors text-white" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://x.com/hmis_eswatini?s=11" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-colors text-white" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="https://www.linkedin.com/company/hmis-eswatini/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-colors text-white" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}