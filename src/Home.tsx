import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Play, History, Zap, Cpu, Globe } from 'lucide-react';

const Home: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=2000" 
            alt="Automotive Industrial" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
        </div>
        
        <div className="relative z-10 text-center w-full max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 mb-12 border border-sky-500/30 rounded-full bg-sky-500/10 text-sky-400 text-[10px] font-bold tracking-[0.4em] uppercase"
          >
            <Zap className="w-3 h-3" />
            <span>Scientific Research Project 2024</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[10rem] font-bold font-modern mb-12 tracking-tighter leading-[0.85] uppercase"
          >
            Detroit <br/>
            <span className="text-sky-500 drop-shadow-[0_0_50px_rgba(14,165,233,0.4)]">Electric</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-16 font-light leading-relaxed"
          >
            Hành trình chuyển mình vĩ đại của ngành công nghiệp ô tô Mỹ: Từ dây chuyền Fordism cổ điển đến kỷ nguyên Gigafactory và Trí tuệ nhân tạo.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/analysis" className="group bg-sky-600 hover:bg-sky-500 text-white px-10 py-5 rounded-2xl font-bold text-sm transition-all shadow-2xl shadow-sky-600/30 flex items-center space-x-3">
              <span>Khám Phá Nghiên Cứu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/data" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-sm transition-all backdrop-blur-sm">
              Phân Tích Số Liệu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid - SaaS Style */}
      <section className="py-32 px-6 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: History, 
                title: "Di Sản Detroit", 
                desc: "Phân tích sự trỗi dậy và suy tàn của 'Motor City' trong thế kỷ 20.",
                color: "text-amber-500",
                bg: "bg-amber-500/10"
              },
              { 
                icon: Cpu, 
                title: "Công Nghệ Mới", 
                desc: "Từ động cơ đốt trong đến hệ truyền động điện và phần mềm tự hành.",
                color: "text-sky-500",
                bg: "bg-sky-500/10"
              },
              { 
                icon: Globe, 
                title: "Dịch Chuyển Toàn Cầu", 
                desc: "Sự chuyển dịch chuỗi cung ứng từ Rust Belt xuống các bang Sun Belt.",
                color: "text-emerald-500",
                bg: "bg-emerald-500/10"
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/5 hover:border-white/10 transition-all group"
              >
                <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-modern uppercase tracking-tight">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - Immersive Style */}
      <section className="py-32 bg-slate-900/50 border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-8 font-modern text-white leading-tight uppercase tracking-tighter">
                  Video Tư Liệu <br/>
                  <span className="text-sky-500">Motor City's Legacy</span>
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-12 font-light">
                  Xem lại những thước phim lịch sử về sự bùng nổ của Detroit - thành phố đã thay đổi cách cả thế giới di chuyển, và cách nó đang tái sinh trong kỷ nguyên điện.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-950 rounded-3xl border border-white/5">
                    <div className="text-sky-500 font-bold text-3xl mb-2">1908</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Ford Model T Launch</div>
                  </div>
                  <div className="p-6 bg-slate-950 rounded-3xl border border-white/5">
                    <div className="text-sky-500 font-bold text-3xl mb-2">2012</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Tesla Model S Era</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative w-full aspect-video rounded-[3rem] overflow-hidden border border-white/10 bg-black shadow-[0_0_100px_rgba(0,0,0,0.5)] group"
              >
                {!isPlaying ? (
                  <div className="absolute inset-0 cursor-pointer" onClick={() => setIsPlaying(true)}>
                    <img 
                      src="https://images.unsplash.com/photo-1519306042166-08d9ce4f391e?auto=format&fit=crop&q=80&w=1200" 
                      alt="Thumbnail" 
                      className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-sky-500 text-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                        <Play className="w-10 h-10 fill-current ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="text-white font-modern text-xs font-bold uppercase tracking-[0.3em] opacity-60">Documentary Short</div>
                      <div className="text-white text-xl font-bold mt-2">The Evolution of Automotive Industry</div>
                    </div>
                  </div>
                ) : (
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/jvsXNZyezk4?autoplay=1&rel=0" 
                    title="Automotive History" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
