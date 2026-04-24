export interface Resident {
  id: string;
  name: string;
  village: string;
  rt: string;
  status: string;
  subStatus?: string;
  lastVisit?: string;
  absentMonths?: number;
  type: 'pregnant' | 'toddler';
  gestationAge?: string;
  toddlerAge?: string;
}

export interface AttendanceRecord {
  residentId: string;
  month: string;
  year: string;
  isPresent: boolean;
}
