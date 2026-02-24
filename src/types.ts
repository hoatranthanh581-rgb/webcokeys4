
export interface Member {
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface ChartDataPoint {
  year: string;
  ice: number;
  ev: number;
}

export interface EmploymentDataPoint {
  region: string;
  employment: number;
}

export interface IndustrialSite {
  name: string;
  lat: number;
  lng: number;
  type: 'Historic' | 'Modern-EV';
  description: string;
}
