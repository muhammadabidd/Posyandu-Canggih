import { Resident } from './types';

export const MOCK_RESIDENTS: Resident[] = [
  {
    id: 'KIA-102',
    name: 'Siti Aminah',
    village: 'Desa Suka Maju',
    rt: '02',
    status: 'Ibu Hamil',
    subStatus: 'Trimester 3',
    lastVisit: 'April 2024',
    absentMonths: 3,
    type: 'pregnant',
    gestationAge: '24 Minggu'
  },
  {
    id: 'KIA-103',
    name: 'Nurul Hidayah',
    village: 'Desa Suka Maju',
    rt: '05',
    status: 'Balita',
    subStatus: '18 Bulan',
    lastVisit: 'Mei 2024',
    absentMonths: 2,
    type: 'toddler',
    toddlerAge: '18 Bulan'
  },
  {
    id: 'KIA-084',
    name: 'Dewi Lestari',
    village: 'Desa Sumber Makmur',
    rt: '01',
    status: 'Ibu Hamil',
    subStatus: 'Trimester 1',
    lastVisit: 'Mei 2024',
    absentMonths: 2,
    type: 'pregnant',
    gestationAge: '12 Minggu'
  },
  {
    id: 'KIA-105',
    name: 'Rini Wati',
    village: 'Desa Suka Maju',
    rt: '04',
    status: 'Ibu Hamil',
    subStatus: 'Trimester 3',
    lastVisit: 'Juni 2024',
    absentMonths: 1,
    type: 'pregnant',
    gestationAge: '32 Minggu'
  },
  {
    id: 'KIA-082',
    name: 'Nurul Hidayati',
    village: 'Dusun Melati',
    rt: '01',
    status: 'Aktif',
    type: 'pregnant'
  },
  {
    id: 'KIA-085',
    name: 'Sri Wahyuni',
    village: 'Dusun Mawar',
    rt: '02',
    status: 'Aktif',
    type: 'pregnant'
  }
];

export const VILLAGES = [
  'Desa Suka Maju',
  'Desa Sumber Makmur',
  'Dusun Mawar',
  'Dusun Melati',
  'Dusun Anggrek'
];
