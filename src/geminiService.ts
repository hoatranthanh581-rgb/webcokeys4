
import { GoogleGenAI } from "@google/genai";

export interface InsightResult {
  text: string;
  sources: { title: string; uri: string }[];
}

export const getAutomotiveInsights = async (topic: string): Promise<InsightResult> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return { 
        text: "Hệ thống phân tích AI hiện đang ở chế độ giới hạn (Thiếu API Key). Bạn có thể xem các thông tin nghiên cứu tĩnh đã được chuẩn bị sẵn trong các thẻ bên trái.",
        sources: [] 
      };
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Bạn là một nhà kinh tế học và chuyên gia công nghiệp ô tô. Hãy phân tích chuyên sâu về: "${topic}". 
      Yêu cầu: Nội dung mang tính khoa học, sử dụng thuật ngữ chuyên ngành, tập trung vào sự dịch chuyển địa lý và công nghệ (Detroit -> Xe điện). 
      Ngôn ngữ: Tiếng Việt chuyên nghiệp.`,
      config: {
        temperature: 0.7,
      }
    });

    const text = response.text || "Không có dữ liệu phân tích từ mô hình.";
    return { text, sources: [] };
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return { 
      text: "Lỗi kết nối AI. Vui lòng thử lại sau hoặc xem nội dung tĩnh bên dưới.", 
      sources: [] 
    };
  }
};
