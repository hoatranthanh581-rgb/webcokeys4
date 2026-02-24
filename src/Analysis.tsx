import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrainCircuit, Search, BookOpen, AlertCircle, ChevronRight, Sparkles, ExternalLink } from 'lucide-react';
import { getAutomotiveInsights, InsightResult } from './geminiService.ts';

interface StaticContent {
  title: string;
  content: string;
  dataPoints: string[];
}

const STATIC_DATA: Record<string, StaticContent> = {
  "Sự suy tàn của Detroit": {
    title: "Phân tích Sự suy tàn của Detroit và khái niệm Rust Belt",
    content: `Detroit từng là biểu tượng rực rỡ nhất của giấc mơ Mỹ và là "Thủ đô Ô tô" toàn cầu. Tuy nhiên, từ thập niên 1970, thành phố này đã rơi vào một chu kỳ suy thoái kinh tế sâu sắc.

Nguyên nhân cốt lõi bao gồm:
1. Sự trỗi dậy của xe Nhật: Toyota và Honda ra mắt những mẫu xe tiết kiệm nhiên liệu.
2. Tự động hóa: Việc áp dụng robot thay thế con người khiến hàng chục ngàn công nhân mất việc.
3. Chảy máu lao động: Các nhà máy dịch chuyển dần xuống miền Nam hoặc ra nước ngoài để giảm chi phí.

Khái niệm "Rust Belt" (Vành đai Rỉ sét) từ đó ra đời để chỉ vùng Đông Bắc và Trung Tây Mỹ - nơi những đại công trường thép và ô tô huy hoàng một thời giờ chỉ còn là những tàn tích công nghiệp.`,
    dataPoints: [
      "Dân số Detroit giảm hơn 60% kể từ đỉnh cao năm 1950.",
      "Từng có hơn 100 nhà máy lắp ráp hoạt động đồng thời tại vùng Greater Detroit.",
      "Hơn 40% diện tích đất thành phố Detroit từng bị bỏ hoang trong thời điểm khủng hoảng."
    ]
  },
  "Kinh tế quy mô Fordism": {
    title: "Kinh tế quy mô và Cuộc cách mạng Fordism",
    content: `Fordism không đơn thuần là một phương pháp sản xuất; nó là một cuộc cách mạng kinh tế-xã hội. Năm 1913, Henry Ford áp dụng dây chuyền lắp ráp di động đầu tiên, cắt giảm thời gian làm một chiếc Model T từ 12 giờ xuống còn 1.5 giờ.

Đặc điểm chính của Fordism:
- Tiêu chuẩn hóa sản phẩm (Standardization).
- Chuyên môn hóa lao động cực cao.
- Trả lương cao (mức 5 USD/ngày lịch sử) để biến chính công nhân thành khách hàng tiêu dùng.`,
    dataPoints: [
      "Giá Model T giảm từ $850 xuống còn $260 nhờ hiệu quả sản xuất hàng loạt.",
      "Lương 5 USD/ngày vào năm 1914 tương đương khoảng $150 ngày nay.",
      "Năm 1920, cứ mỗi 2 chiếc xe chạy trên thế giới thì có 1 chiếc là Model T."
    ]
  },
  "Sự trỗi dậy của Tesla": {
    title: "Tesla và Cuộc dịch chuyển xuống Sun Belt",
    content: `Sự xuất hiện của Tesla đã thay đổi hoàn toàn "luật chơi" của ngành ô tô. Thay vì tập trung vào cơ khí chính xác của động cơ đốt trong, Tesla định nghĩa lại ô tô là một "thiết bị công nghệ chạy phần mềm".

Bên cạnh công nghệ, Tesla còn dẫn đầu xu hướng dịch chuyển địa lý công nghiệp. Việc xây dựng Giga Texas (Austin) và Gigafactory Nevada cho thấy sự ưu tiên cho các bang "Sun Belt" - nơi có chi phí năng lượng tái tạo dồi dào và chính sách thuế thông thoáng.`,
    dataPoints: [
      "Tesla Model Y là xe bán chạy nhất toàn cầu năm 2023.",
      "Giga Texas có diện tích sàn tương đương 15 sân bóng đá cộng lại.",
      "Hơn 20,000 nhân lực công nghệ cao đã dịch chuyển tới Austin phục vụ Tesla."
    ]
  }
};

const Analysis: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string>("Sự suy tàn của Detroit");
  const [aiResult, setAiResult] = useState<InsightResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const data = STATIC_DATA[selectedKey] || STATIC_DATA["Sự suy tàn của Detroit"];

  const handleFetchAi = async () => {
    setLoading(true);
    try {
      const result = await getAutomotiveInsights(selectedKey);
      setAiResult(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row gap-12"
      >
        {/* Sidebar - Technical Grid Style */}
        <aside className="lg:w-80 flex-shrink-0">
          <div className="sticky top-28 space-y-8">
            <div>
              <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-6 flex items-center">
                <Search className="w-3 h-3 mr-2" />
                Chủ đề nghiên cứu
              </h2>
              <div className="space-y-2">
                {Object.keys(STATIC_DATA).map((key) => (
                  <button 
                    key={key} 
                    onClick={() => { setSelectedKey(key); setAiResult(null); }}
                    className={`w-full text-left px-5 py-4 rounded-2xl transition-all border flex items-center justify-between group ${
                      selectedKey === key 
                        ? 'bg-sky-500/10 border-sky-500/30 text-sky-400' 
                        : 'bg-slate-900/50 border-white/5 text-slate-400 hover:border-white/10 hover:text-slate-200'
                    }`}
                  >
                    <span className="font-bold text-sm">{key}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${selectedKey === key ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                  </button>
                ))}
              </div>
            </div>
            
            <button 
              onClick={handleFetchAi}
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white py-5 rounded-2xl font-bold text-sm shadow-xl shadow-indigo-600/20 transition-all flex items-center justify-center space-x-3 group"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
                  <span>Phân tích bằng AI</span>
                </>
              )}
            </button>

            <div className="p-6 rounded-3xl bg-slate-900/30 border border-white/5">
              <div className="flex items-center space-x-2 text-amber-500 mb-3">
                <AlertCircle className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Lưu ý hệ thống</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                Kết quả AI được tạo ra dựa trên mô hình ngôn ngữ lớn. Vui lòng đối chiếu với các nguồn tài liệu chính thống.
              </p>
            </div>
          </div>
        </aside>
        
        {/* Main Content Area */}
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            {aiResult ? (
              <motion.div 
                key="ai-result"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-slate-900/40 rounded-[3rem] p-10 md:p-16 border border-white/5 shadow-2xl min-h-[700px] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                  <BrainCircuit className="w-64 h-64 text-sky-500" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-10">
                    <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center border border-indigo-500/30">
                      <Sparkles className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h1 className="text-3xl font-bold text-white font-modern uppercase tracking-tight">Kết quả phân tích AI</h1>
                  </div>

                  <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed whitespace-pre-line mb-16 text-lg font-light">
                    {aiResult.text}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="static-data"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-slate-900/40 rounded-[3rem] p-10 md:p-16 border border-white/5 shadow-2xl min-h-[700px]"
              >
                <div className="mb-12 pb-10 border-b border-white/5">
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-emerald-500/20">
                      Nghiên cứu khoa học
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Cập nhật: 2024</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-modern tracking-tight uppercase">
                    {data.title}
                  </h1>
                </div>

                <div className="mb-16">
                  <p className="text-slate-300 text-xl leading-relaxed whitespace-pre-line font-light">
                    {data.content}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-sky-500 uppercase tracking-[0.3em] mb-6 flex items-center">
                    <Sparkles className="w-3 h-3 mr-2" />
                    Thông tin định lượng cốt lõi
                  </h4>
                  <div className="grid md:grid-cols-1 gap-4">
                    {data.dataPoints.map((point, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start p-6 bg-slate-950/50 rounded-2xl border border-white/5 group hover:border-sky-500/30 transition-all"
                      >
                        <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 mr-5 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                        <span className="text-slate-400 text-base font-light leading-relaxed">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Analysis;
