import { inventory } from './inventory';
// import { capabilities } from './capabilities';
import { orders as facilityOrders } from './orders';

export const facilityInventory = {
  partNumber: '104600',
  description: 'BROUTER',
  serialNumber: '13405',
  endItemCode: 'QFS',
  quantity: 1,
  lotNumber: '5',
  condition: 'SV',
  source: 'NEW',
  manufacturer: 'NORTHROP GRUMMAN CORPORATION',
  compatability: 1,
};
export const facilityCapabilities = {
  partNumber: '2137',
  description: 'RAIN REPELLANT VALVE',
  compatability: 1,
  engineAPU: '',
  ataChapter: '30',
  cmm: '30-40-01',
  manufacturer: 'Triumph',
  capabilies: 31,
};

const triumphInfo = {
  name: 'Triumph Group',
  about: 'About TGI',
  size: 0,
  // logoUrl: '',
  email: 'info@triumphgroup.com',
  website: 'www.triumphgroup.com',
  // linkedIn: '',
  phoneNumber: '+1234567890',
};

const triumphLocation = {
  address: '1401 Nolan Ryan Expressway',
  countryCode: 'USA',
  stateProv: 'TX',
  city: 'Arlington',
  postalCode: '76011',
};

const facilityInfoWellington = {
  name: 'TGI Product Support - Accessory Services',
  about:
    'Provides MRO and manufacturing services for airframe and engine accessories, for commercial, regional, military and general aviation aircraft.',
  size: 100000,
  // logoUrl: '',
  email: 'info@triumphgroup.com',
  website: 'www.triumphgroup.com',
  // linkedIn: '',
  phoneNumber: '+1234567890',
};

const facilityLocationWellington = {
  address: '411 N West Rd',
  city: 'Wellington',
  stateProv: 'KS',
  postalCode: '67152',
  countryCode: 'USA',
};

const facilityContactWellington = {
  firstName: 'John',
  lastName: 'Grimshaw',
  // title: 'VP MRO Services',
  email: 'jgrimshaw@triumphgroup.com',
  // phoneWk: null,
  phoneCell: '+13169926086',
  // avatar: null,
};

const facilityRegistration = {
  ein: '1XD25',
  duns: '958361438',
  cageCode: '546-10-7724',
};

const facilityCertifications = [
  { code: 'ANOR321N', description: 'FAA Repair Station' },
  { code: '145.5135', description: 'EASA Repair Station' },
  { code: 'F03300626', description: 'CAAC Repair Station' },
];

const facilityScoreCard = {
  reliability: {
    pct: 80,
    defects: 5,
  },
  quality: {
    pct: 66,
    errors: 5,
  },
  delivery: {
    pct: 73,
    late: 20,
  },
  transactions: 15,
};

export const triumphFacilities = {
  info: facilityInfoWellington,
  location: facilityLocationWellington,
  code: 'TGI-WEKS',
  type: 'MRO',
  // reps: ['e8ff68f2-aed7-418e-b9e0-474624ac3bc0'],
  registrations: facilityRegistration,
  // capabilities: ['9888a8cc-1493-4cc8-8f24-5a7f6a62889a'],
  certifications: facilityCertifications,
  // inventory: ['7f0dce92-fd94-477c-8978-4b5d189c0cf9'],
  scoreCard: facilityScoreCard,
  // orders: ['f3ecb026-1461-419d-9d0f-2e4e445f5096'],
  // messages: null,
  // notifications: null,
  // connections: null,
};

export const company = {
  category: 0,
  atxLicense: 0,
  info: triumphInfo,
  location: triumphLocation,
  // facilities:  [triumphFacilities],
};
