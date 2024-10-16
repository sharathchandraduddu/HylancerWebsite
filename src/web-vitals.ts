declare module 'web-vitals' {
  export type ReportHandler = (metric: Metric) => void;

  export interface Metric {
    name: string;
    value: number;
    delta: number;
    id: string;
    label?: string;
    entries?: PerformanceEntry[];
  }

  export function getCLS(onReport: ReportHandler): void;
  export function getFID(onReport: ReportHandler): void;
  export function getLCP(onReport: ReportHandler): void;
  export function getFCP(onReport: ReportHandler): void;
  export function getTTFB(onReport: ReportHandler): void;
}

