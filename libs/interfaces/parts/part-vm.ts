import { TraceHistory } from './part-trace-history';

export interface PartVM {
  _id?: string;
  facilityId: string;
  partNo: string;
  serialNo: string;
  description: string;
  // fat-fingered
  compatability: string;
  manufacturer: string;
  endItemCode: string;
  qty: number;
  lotNumber: string;
  condition: string;
  source: string;
  traceHistory?: TraceHistory[];
  dtCreated?: string;
  dtOwnership?: string;
  deleted?: boolean;
  dtDeleted?: string;
  deletedBy?: string;
}
