import { ExternalLink, Clock, Share2, MessageCircle, Heart } from "lucide-react";
import { motion } from "motion/react";

// Mock API Data for LinkedIn updates
const linkedinUpdates = [
  {
    id: "li-1",
    author: "HMIS Eswatini",
    handle: "@hmis-eswatini",
    date: "2h ago",
    content: "Thrilled to announce the successful deployment of eLMIS v2.4 across all major regional hospitals. This update significantly improves stock visibility and forecasting. Great job to the Applications team! 🚀💊 #HealthTech #Eswatini",
    image: "https://images.unsplash.com/photo-1565152670665-c6d29215b8ea?w=800&q=80",
    likes: 124,
    comments: 18,
  },
  {
    id: "li-2",
    author: "HMIS Eswatini",
    handle: "@hmis-eswatini",
    date: "2d ago",
    content: "We are hiring! Looking for a Senior Database Administrator to join our growing team in Mbabane. If you have expertise in PostgreSQL and large-scale data warehousing, apply today. Link in bio.",
    likes: 89,
    comments: 12,
  },
  {
    id: "li-3",
    author: "HMIS Eswatini",
    handle: "@hmis-eswatini",
    date: "1w ago",
    content: "Our team recently presented at the Health Tech Africa Summit, showcasing Eswatini's progress in developing an integrated patient management system. Proud of the strides we are making! 🌍💻",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    likes: 245,
    comments: 32,
  }
];

// Mock API Data for Facebook updates
const facebookUpdates = [
  {
    id: "fb-1",
    author: "Ministry of Health - HMIS Unit",
    handle: "@HMISUnitSZ",
    date: "1d ago",
    content: "Our Help Desk team recently conducted a 3-day workshop for new nurses on utilizing the CMIS platform efficiently. Training and capacity building remain our top priorities to ensure smooth technology adoption in healthcare.",
    image: "https://images.unsplash.com/photo-1618544976420-1f213fcf2052?w=800&q=80",
    likes: 312,
    comments: 45,
  },
  {
    id: "fb-2",
    author: "Ministry of Health - HMIS Unit",
    handle: "@HMISUnitSZ",
    date: "3d ago",
    content: "Server maintenance alert ⚠️: The central database will undergo routine optimization this weekend from 02:00 to 04:00 CAT. Minor disruptions may occur, but offline syncing will remain active on all terminal nodes. Thank you for your patience.",
    likes: 156,
    comments: 8,
  },
  {
    id: "fb-3",
    author: "Ministry of Health - HMIS Unit",
    handle: "@HMISUnitSZ",
    date: "5d ago",
    content: "Reminder for all citizens: You can now request your vaccination records directly through our digital patient portal. A big step towards making health data accessible and empowering patients! 💉📱",
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?w=800&q=80",
    likes: 420,
    comments: 56,
  }
];

const platformConfig = {
  linkedin: { color: "text-[#0A66C2]", bgColor: "bg-[#0A66C2]", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  facebook: { color: "text-[#1877F2]", bgColor: "bg-[#1877F2]", icon: <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> }
};

export function Updates() {
  const renderPost = (update: any, platformKey: 'linkedin' | 'facebook', index: number) => {
    const platform = platformConfig[platformKey];
    return (
      <motion.div
        key={update.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-[2rem] p-6 sm:p-8 border border-[#E5E5EA] hover:border-[#D1D1D6] hover:shadow-lg transition-all duration-300"
      >
        <div className="flex justify-between items-start mb-5">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full ${platform.bgColor} flex items-center justify-center text-white shrink-0`}>
              {platform.icon}
            </div>
            <div>
              <h4 className="font-semibold text-[#1D1D1F] text-[15px]">{update.author}</h4>
              <p className="text-[#86868B] text-sm">{update.handle}</p>
            </div>
          </div>
          <div className={platform.color}>
             <ExternalLink size={18} className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity" />
          </div>
        </div>

        <p className="text-[#1D1D1F] text-[15px] leading-relaxed mb-5 whitespace-pre-wrap">
          {update.content}
        </p>

        {update.image && (
          <div className="mb-5 rounded-2xl overflow-hidden bg-[#F5F5F7]">
            <img src={update.image} alt="Update attachment" className="w-full object-cover max-h-[300px]" loading="lazy" />
          </div>
        )}

        <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#E5E5EA] text-[#86868B]">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-[13px] font-medium hover:text-[#1D1D1F] transition-colors">
              <Heart size={18} /> {update.likes}
            </button>
            <button className="flex items-center gap-2 text-[13px] font-medium hover:text-[#1D1D1F] transition-colors">
              <MessageCircle size={18} /> {update.comments}
            </button>
            <button className="flex items-center gap-2 text-[13px] font-medium hover:text-[#1D1D1F] transition-colors">
              <Share2 size={18} />
            </button>
          </div>
          <div className="flex items-center gap-1.5 text-[13px] font-medium">
            <Clock size={16} /> {update.date}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1D1D1F]">
            Live Updates
          </h1>
          <p className="text-lg text-[#86868B] max-w-2xl mx-auto">
            Stay informed with real-time news, system statuses, and announcements pulled directly from our official channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* LinkedIn Column */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 px-2 mb-2">
              <div className={`w-8 h-8 rounded-full ${platformConfig.linkedin.bgColor} flex items-center justify-center text-white shrink-0`}>
                {platformConfig.linkedin.icon}
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1D1D1F]">LinkedIn</h2>
            </div>
            {linkedinUpdates.map((update, idx) => renderPost(update, 'linkedin', idx))}
          </div>

          {/* Facebook Column */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 px-2 mb-2">
              <div className={`w-8 h-8 rounded-full ${platformConfig.facebook.bgColor} flex items-center justify-center text-white shrink-0`}>
                {platformConfig.facebook.icon}
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-[#1D1D1F]">Facebook</h2>
            </div>
            {facebookUpdates.map((update, idx) => renderPost(update, 'facebook', idx))}
          </div>
        </div>

        <div className="mt-20 text-center">
            <p className="text-sm text-[#86868B] flex items-center justify-center gap-2">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34C759] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34C759]"></span>
                </span>
               Live APIs connected
            </p>
        </div>
      </div>
    </div>
  );
}
