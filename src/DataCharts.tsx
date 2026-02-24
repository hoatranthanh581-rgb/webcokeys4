import React from 'react';
import { motion } from 'motion/react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';
import { BarChart3, TrendingUp, PieChart as PieIcon, Briefcase, Info } from 'lucide-react';
import { EV_GROWTH_DATA, REGIONAL_EMPLOYMENT, GLOBAL_EV_SHARE, TOP_MANUFACTURERS_2023 } from './constants.tsx';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-950 border border-white/10 p-4 rounded-2xl shadow-2xl backdrop-blur-xl">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center space-x-3 mb-1 last:mb-0">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></div>
            <p className="text-sm font-bold text-white">
              {entry.name}: <span className="text-slate-400 font-light">{entry.value}%</span>
            </p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const DataCharts: React.FC = () => {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 mb-6 border border-emerald-500/30 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold tracking-[0.3em] uppercase">
          <BarChart3 className="w-3 h-3" />
          <span>Quantitative Analysis</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-8 font-modern tracking-tight uppercase">
          Thống kê <span className="text-sky-500">Khoa học</span>
        </h1>
        <p className="text-slate-400 max-w-3xl mx-auto text-lg font-light leading-relaxed">
          Tập hợp các dữ liệu định lượng về sản lượng, doanh số và cơ cấu lao động trong quá trình chuyển đổi xanh của ngành ô tô toàn cầu.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* EV Penetration Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 p-10 rounded-[2.5rem] border border-white/5 shadow-2xl group hover:border-sky-500/20 transition-all"
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center border border-sky-500/20">
                <TrendingUp className="w-6 h-6 text-sky-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Tỷ lệ thâm nhập xe điện</h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Dữ liệu toàn cầu (%)</p>
              </div>
            </div>
            <Info className="w-5 h-5 text-slate-700 cursor-help" />
          </div>
          
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={EV_GROWTH_DATA}>
                <defs>
                  <linearGradient id="colorEv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis 
                  dataKey="year" 
                  stroke="#475569" 
                  fontSize={11} 
                  tickLine={false} 
                  axisLine={false} 
                  dy={10}
                />
                <YAxis 
                  stroke="#475569" 
                  fontSize={11} 
                  tickLine={false} 
                  axisLine={false} 
                  dx={-10}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="ev" 
                  name="Xe điện" 
                  stroke="#0ea5e9" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorEv)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="ice" 
                  name="Xe xăng" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  fillOpacity={0} 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Top Manufacturers Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/50 p-10 rounded-[2.5rem] border border-white/5 shadow-2xl group hover:border-emerald-500/20 transition-all"
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20">
                <BarChart3 className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Top 5 nhà sản xuất EV</h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Sản lượng 2023 (Triệu xe)</p>
              </div>
            </div>
          </div>
          
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={TOP_MANUFACTURERS_2023} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  stroke="#94a3b8" 
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                  width={80}
                />
                <Tooltip cursor={{fill: '#1e293b', opacity: 0.4}} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px' }} />
                <Bar dataKey="sales" name="Số lượng xe" radius={[0, 8, 8, 0]} barSize={32}>
                  {TOP_MANUFACTURERS_2023.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Global Share Pie Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 p-10 rounded-[2.5rem] border border-white/5"
        >
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20">
              <PieIcon className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-white">Thị Phần Sản Xuất Toàn Cầu</h3>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie 
                  data={GLOBAL_EV_SHARE} 
                  cx="50%" 
                  cy="50%" 
                  innerRadius={70} 
                  outerRadius={100} 
                  paddingAngle={8} 
                  dataKey="share" 
                  nameKey="region"
                  stroke="none"
                >
                  {GLOBAL_EV_SHARE.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#10b981', '#0ea5e9', '#f59e0b', '#64748b'][index % 4]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Employment Bar Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/50 p-10 rounded-[2.5rem] border border-white/5"
        >
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-12 h-12 bg-violet-500/10 rounded-2xl flex items-center justify-center border border-violet-500/20">
              <Briefcase className="w-6 h-6 text-violet-500" />
            </div>
            <h3 className="text-xl font-bold text-white">Việc làm công nghiệp ô tô (Mỹ)</h3>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={REGIONAL_EMPLOYMENT}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis 
                  dataKey="region" 
                  stroke="#475569" 
                  fontSize={10} 
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                />
                <YAxis 
                  stroke="#475569" 
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                  dx={-10}
                />
                <Tooltip cursor={{fill: 'white', opacity: 0.05}} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px' }} />
                <Bar dataKey="employment" fill="#8b5cf6" radius={[8, 8, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DataCharts;
