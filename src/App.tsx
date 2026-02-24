import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home as HomeIcon, BarChart3, BrainCircuit, Map as MapIcon, Users, Car, BookOpen } from 'lucide-react';
import Home from './Home.tsx';
import DataCharts from './DataCharts.tsx';
import Analysis from './Analysis.tsx';
import IndustrialMap from './IndustrialMap.tsx';
import Members from './Members.tsx';
import StaticResearch from './StaticResearch.tsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const links = [
    { name: 'Trang Chủ', path: '/', icon: HomeIcon },
    { name: 'Số Liệu', path: '/data', icon: BarChart3 },
    { name: 'Nghiên Cứu', path: '/research', icon: BookOpen },
    { name: 'Phân Tích', path: '/analysis', icon: BrainCircuit },
    { name: 'Bản Đồ', path: '/map', icon: MapIcon },
    { name: 'Thành Viên', path: '/members', icon: Users },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform duration-300">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-modern text-sm font-bold tracking-widest uppercase leading-none">Automotive</span>
              <span className="text-sky-500 text-[10px] font-bold tracking-[0.2em] uppercase mt-1">Research Project</span>
            </div>
          </Link>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-[11px] font-bold transition-all uppercase tracking-widest flex items-center space-x-2 group ${
                    isActive(link.path) ? 'text-sky-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <link.icon className={`w-3.5 h-3.5 ${isActive(link.path) ? 'text-sky-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                  <span>{link.name}</span>
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-400 hover:text-white p-2 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950 border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-4 px-5 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all ${
                    isActive(link.path) 
                      ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' 
                      : 'text-slate-400 hover:bg-white/5'
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col w-full min-h-screen bg-slate-950 selection:bg-sky-500/30 selection:text-sky-200">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data" element={<DataCharts />} />
            <Route path="/research" element={<StaticResearch />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/map" element={<IndustrialMap />} />
            <Route path="/members" element={<Members />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <footer className="bg-slate-950 border-t border-white/5 py-12 w-full mt-auto">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center">
                <Car className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <span className="text-slate-500 font-modern text-[10px] font-bold tracking-[0.3em] uppercase">Automotive Research</span>
            </div>
            <div className="text-center text-slate-600 text-[9px] uppercase tracking-[0.4em] leading-loose max-w-md">
              © 2024 Dự án Nghiên cứu Khoa học Ô tô • Từ Detroit đến Kỷ nguyên Điện • Một hành trình công nghiệp vĩ đại
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}
