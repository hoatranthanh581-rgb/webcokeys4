import React from 'react';
import { motion } from 'motion/react';
import { Users, Mail, Linkedin, Github, Quote } from 'lucide-react';
import { MEMBERS } from './constants.tsx';

const Members: React.FC = () => {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 mb-6 border border-sky-500/30 rounded-full bg-sky-500/10 text-sky-400 text-[10px] font-bold tracking-[0.3em] uppercase">
          <Users className="w-3 h-3" />
          <span>Research Team</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold font-modern mb-8 uppercase tracking-tight">
          Đội ngũ <span className="text-sky-500">Phát triển</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto font-light text-lg leading-relaxed">
          Những cá nhân tâm huyết đứng sau dự án nghiên cứu về sự chuyển dịch của ngành công nghiệp ô tô Hoa Kỳ.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MEMBERS.map((member, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative group"
          >
            <div className="h-full p-8 bg-slate-900/50 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 hover:border-sky-500/30 hover:-translate-y-2 flex flex-col">
              {/* Image Container */}
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden mb-8 bg-slate-950">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-center space-x-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-sky-500 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-sky-500 transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-sky-500 transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">{member.name}</h3>
                  <div className="w-8 h-8 bg-sky-500/10 rounded-lg flex items-center justify-center border border-sky-500/20">
                    <Users className="w-4 h-4 text-sky-500" />
                  </div>
                </div>
                <p className="text-sky-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">{member.role}</p>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-white/5" />
                  <p className="text-slate-400 text-sm leading-relaxed font-light italic pl-4 border-l border-white/5">
                    {member.description}
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Team Member #{idx + 1}</span>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-sky-500 rounded-full"></div>
                  <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
                  <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Members;
