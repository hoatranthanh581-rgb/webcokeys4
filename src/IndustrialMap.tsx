import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Info, Navigation, Globe, History, Zap } from 'lucide-react';
import { INDUSTRIAL_SITES } from './constants.tsx';

const IndustrialMap: React.FC = () => {
  const [selectedSite, setSelectedSite] = useState(INDUSTRIAL_SITES[0]);

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 mb-6 border border-sky-500/30 rounded-full bg-sky-500/10 text-sky-400 text-[10px] font-bold tracking-[0.3em] uppercase">
          <Globe className="w-3 h-3" />
          <span>Geospatial Analysis</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold font-modern mb-8 tracking-tight uppercase">
          Bản đồ <span className="text-sky-500">Công nghiệp</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto font-light text-lg leading-relaxed">
          Phân tích các tọa độ chiến lược trong chuỗi cung ứng ô tô toàn cầu, từ các di sản Detroit đến các trung tâm Gigafactory mới.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* Sidebar - Site List */}
        <div className="lg:col-span-4 space-y-4 order-2 lg:order-1">
          <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-8 flex items-center">
              <MapPin className="w-3 h-3 mr-2" />
              Địa điểm trọng điểm
            </h3>
            <div className="space-y-3">
              {INDUSTRIAL_SITES.map((site, idx) => (
                <button
                  key={idx} 
                  onClick={() => setSelectedSite(site)}
                  className={`w-full text-left p-5 rounded-2xl transition-all border group relative overflow-hidden ${
                    selectedSite.name === site.name 
                      ? 'bg-sky-500/10 border-sky-500/30 text-white' 
                      : 'bg-slate-800/30 border-white/5 text-slate-400 hover:border-white/10 hover:text-slate-200'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold text-base">{site.name}</div>
                      {site.type === 'Historic' ? <History className="w-3.5 h-3.5 opacity-40" /> : <Zap className="w-3.5 h-3.5 text-sky-500" />}
                    </div>
                    <p className="text-[11px] opacity-60 leading-relaxed font-light line-clamp-2">{site.description}</p>
                  </div>
                  {selectedSite.name === site.name && (
                    <motion.div 
                      layoutId="active-bg"
                      className="absolute inset-0 bg-sky-500/5"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Map Visualization Area */}
        <div className="lg:col-span-8 order-1 lg:order-2">
          <div className="relative aspect-[16/10] md:aspect-video rounded-[3rem] overflow-hidden border border-white/5 bg-slate-950 shadow-[0_0_100px_rgba(0,0,0,0.5)] group">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 grayscale group-hover:opacity-20 transition-opacity duration-1000"></div>
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="relative w-full h-full flex items-center justify-center p-6 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedSite.name}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.1, y: -20 }}
                  transition={{ type: "spring", damping: 20, stiffness: 100 }}
                  className="bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-10 md:p-12 rounded-[3rem] max-w-lg shadow-2xl relative"
                >
                  <div className="absolute -top-12 -left-12 opacity-10 pointer-events-none">
                    <Navigation className="w-48 h-48 text-sky-500 rotate-45" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border ${
                        selectedSite.type === 'Historic' 
                          ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' 
                          : 'bg-sky-500/10 text-sky-400 border-sky-500/20'
                      }`}>
                        {selectedSite.type} Site
                      </div>
                      <div className="h-px flex-grow bg-white/5"></div>
                    </div>

                    <h4 className="text-3xl md:text-4xl font-bold text-white font-modern mb-6 tracking-tight uppercase">{selectedSite.name}</h4>
                    <p className="text-slate-400 text-base leading-relaxed mb-10 font-light">{selectedSite.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-6 bg-white/5 rounded-3xl border border-white/5 group/coord">
                        <span className="block text-sky-400 font-bold text-2xl mb-1 font-mono tracking-tighter group-hover/coord:scale-110 transition-transform">{selectedSite.lat.toFixed(4)}°N</span>
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest flex items-center">
                          <Info className="w-3 h-3 mr-1.5" />
                          Latitude
                        </span>
                      </div>
                      <div className="p-6 bg-white/5 rounded-3xl border border-white/5 group/coord">
                        <span className="block text-sky-400 font-bold text-2xl mb-1 font-mono tracking-tighter group-hover/coord:scale-110 transition-transform">{selectedSite.lng.toFixed(4)}°W</span>
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest flex items-center">
                          <Info className="w-3 h-3 mr-1.5" />
                          Longitude
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-8 right-8 flex items-center space-x-4">
              <div className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.4em]">Industrial Grid v1.0</div>
              <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialMap;
