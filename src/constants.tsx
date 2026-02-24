
import { Member, ChartDataPoint, EmploymentDataPoint, IndustrialSite } from './types.ts';

export const MEMBERS: Member[] = [
  {
    name: "Thanh Hòa",
    role: "Trưởng nhóm, Phân tích & Thiết kế",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=600",
    description: "Chịu trách nhiệm điều phối dự án, phân tích số liệu kinh tế và xây dựng cấu trúc giao diện người dùng."
  },
  {
    name: "Duy Mạnh",
    role: "Thiết kế & Đồ họa",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    description: "Phụ trách trực quan hóa dữ liệu, thiết kế hình ảnh minh họa và tối ưu hóa trải nghiệm thị giác."
  },
  {
    name: "Song An",
    role: "Nghiên cứu Lịch sử Detroit",
    image: "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?auto=format&fit=crop&q=80&w=600",
    description: "Chuyên gia nghiên cứu về sự hình thành Big Three, thời kỳ Rust Belt và các mốc lịch sử Detroit."
  },
  {
    name: "Kiến Minh",
    role: "Phân tích Dữ liệu EV",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=600",
    description: "Phụ trách thu thập và xử lý tập dữ liệu về sản lượng xe điện toàn cầu và các mô hình dự báo tăng trưởng."
  },
  {
    name: "Khánh Linh",
    role: "Chuyên gia Chuỗi cung ứng",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
    description: "Nghiên cứu sự dịch chuyển logistics từ Rust Belt xuống Sun Belt và chuỗi giá trị pin lithium-ion."
  }
];

export const EV_GROWTH_DATA: ChartDataPoint[] = [
  { year: '2015', ice: 88, ev: 1 },
  { year: '2018', ice: 85, ev: 2.5 },
  { year: '2020', ice: 78, ev: 4.6 },
  { year: '2021', ice: 75, ev: 8.3 },
  { year: '2022', ice: 70, ev: 13.0 },
  { year: '2023', ice: 64, ev: 18.2 },
  { year: '2024', ice: 58, ev: 24.5 }
];

export const GLOBAL_EV_SHARE = [
  { region: 'Trung Quốc', share: 58 },
  { region: 'Châu Âu', share: 24 },
  { region: 'Hoa Kỳ', share: 12 },
  { region: 'Phần còn lại', share: 6 }
];

export const TOP_MANUFACTURERS_2023 = [
  { name: 'BYD', sales: 3020000, color: '#ef4444' },
  { name: 'Tesla', sales: 1810000, color: '#0ea5e9' },
  { name: 'Volkswagen', sales: 1010000, color: '#f59e0b' },
  { name: 'Geely', sales: 910000, color: '#10b981' },
  { name: 'SAIC', sales: 790000, color: '#8b5cf6' }
];

export const REGIONAL_EMPLOYMENT: EmploymentDataPoint[] = [
  { region: 'Midwest (Rust Belt)', employment: 442000 },
  { region: 'South (Sun Belt)', employment: 338000 },
  { region: 'West Coast (EV Hub)', employment: 145000 },
  { region: 'East Coast', employment: 72000 }
];

export const INDUSTRIAL_SITES: IndustrialSite[] = [
  { name: "Detroit (Michigan)", lat: 42.3314, lng: -83.0458, type: 'Historic', description: "Tổng hành dinh Ford, GM, Chrysler - Nơi khai sinh sản xuất hàng loạt toàn cầu." },
  { name: "Austin (Texas)", lat: 30.2672, lng: -97.7431, type: 'Modern-EV', description: "Tesla Giga Texas - Nhà máy sản xuất xe điện thông minh hiện đại bậc nhất." },
  { name: "Spartanburg (South Carolina)", lat: 34.9496, lng: -81.9320, type: 'Modern-EV', description: "Trung tâm xuất khẩu lớn nhất của BMW tại Mỹ, đang dịch chuyển sang EV." },
  { name: "Reno (Nevada)", lat: 39.5296, lng: -119.8138, type: 'Modern-EV', description: "Tesla Gigafactory 1 - Trái tim của chuỗi cung ứng pin xe điện toàn cầu." }
];
