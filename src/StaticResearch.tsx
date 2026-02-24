import React from 'react';
import { motion } from 'motion/react';
import { Book, FileText, Award, Layers } from 'lucide-react';

const StaticResearch: React.FC = () => {
  const sections = [
    {
      title: "Kỷ nguyên Fordism (1910 - 1970)",
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      content: "Sự ra đời của dây chuyền lắp ráp Model T đã thay đổi bộ mặt sản xuất toàn cầu. Detroit trở thành trung tâm công nghiệp lớn nhất thế giới với mức lương cao kỷ lục cho công nhân.",
      stats: ["12h -> 1.5h lắp ráp", "$5/ngày lương tối thiểu", "15 triệu xe Model T"]
    },
    {
      title: "Khủng hoảng Rust Belt (1970 - 2010)",
      icon: <FileText className="w-6 h-6 text-amber-400" />,
      content: "Cú sốc dầu mỏ và sự cạnh tranh từ Nhật Bản khiến các nhà máy tại Detroit đóng cửa hàng loạt. Thành phố đối mặt với nợ nần và sự sụt giảm dân số nghiêm trọng.",
      stats: ["-60% dân số", "40,000 tòa nhà bỏ hoang", "Phá sản năm 2013"]
    },
    {
      title: "Kỷ nguyên Điện hóa (2010 - Nay)",
      icon: <Award className="w-6 h-6 text-emerald-400" />,
      content: "Sự trỗi dậy của Tesla và các Gigafactory đánh dấu bước chuyển mình sang năng lượng sạch. Công nghệ phần mềm trở thành linh hồn mới của ngành ô tô.",
      stats: ["Giga Texas 10 triệu sqft", "Model Y xe bán chạy nhất", "Dịch chuyển sang Sun Belt"]
    }
  ];

  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-bold text-white mb-6 uppercase tracking-tighter">Lưu Trữ Nghiên Cứu</h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light">
          Tổng hợp các cột mốc lịch sử và dữ liệu kinh tế quan trọng của ngành công nghiệp ô tô Hoa Kỳ.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-slate-900/50 border border-white/5 p-8 rounded-[2rem] hover:border-white/10 transition-all group"
          >
            <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform">
              {section.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
              {section.content}
            </p>
            <div className="space-y-3 pt-6 border-t border-white/5">
              {section.stats.map((stat, sIdx) => (
                <div key={sIdx} className="flex items-center text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <div className="w-1 h-1 bg-sky-500 rounded-full mr-3"></div>
                  {stat}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-indigo-600/10 border border-indigo-500/20 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <Book className="w-6 h-6 mr-3 text-indigo-400" />
            Tài liệu tham khảo chính thống
          </h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Dữ liệu được trích xuất từ các báo cáo kinh tế của Cục Thống kê Lao động Hoa Kỳ (BLS) và các nghiên cứu lịch sử công nghiệp tại Đại học Michigan.
          </p>
        </div>
        <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-sm transition-all whitespace-nowrap">
          Tải xuống PDF (Full Report)
        </button>
      </div>
    </div>
  );
};

export default StaticResearch;
