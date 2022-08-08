import { TraceHistory } from './part-trace-history';

export interface PartPM {
  _id?: string;
  facilityId: string;
  partNumber: string;
  serialNumber: string;
  description: string;
  compatibility: string;
  manufacturer: string;
  endItemCode: string;
  quantity: number;
  lotNumber: string;
  condition: string;
  source: string;
  traceHistory?: TraceHistory[];
}
