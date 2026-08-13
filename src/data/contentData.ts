import {
  ServiceItem,
  StatItem,
  GalleryItem,
  TeamMember,
  RateCard,
  TranslationFee,
} from "../types";

export const STATS_DATA: StatItem[] = [
  { number: "50+", label: "Years Serving The Community" },
  { number: "1,200+", label: "Families Housed" },
  { number: "15,000+", label: "Meals Distributed" },
  { number: "3,500+", label: "Residents Served" },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "rides",
    title: "Imlay City Area Rides",
    shortDesc:
      "Free transportation connecting rural residents to medical, legal, and essential appointments.",
    iconType: "rides",
  },
  {
    id: "shelter",
    title: "Family Shelter",
    shortDesc:
      "Safe, non-violent temporary housing for women and children who need shelter from crisis.",
    iconType: "shelter",
  },
  {
    id: "pantry",
    title: "Food Pantry",
    shortDesc:
      "Free, dignified access to nutritious food. Our pantry is open to all Lapeer County residents.",
    iconType: "pantry",
  },
  {
    id: "senior",
    title: "Senior Program",
    shortDesc:
      "In-home support, transportation, and twice-weekly social activities for seniors.",
    iconType: "senior",
  },
  {
    id: "translation",
    title: "Translation Services",
    shortDesc:
      "Bilingual translation and document assistance for forms, certificates, and legal paperwork.",
    iconType: "translation",
  },
];

export const RIDE_RATES: RateCard[] = [
  { amount: "$15", label: "Long Distance Rides" },
  { amount: "$10", label: "Discounted Rides" },
  { amount: "$20", label: "Discounted Non-Res" },
  { amount: "$8", label: "Local Rides" },
];

export const TRANSLATION_FEES: TranslationFee[] = [
  {
    category: "Certificates",
    items: [
      { item: "Birth", fee: "$40" },
      { item: "Marriage", fee: "$40" },
      { item: "Death", fee: "$40" },
      { item: "Court Records", fee: "$45" },
    ],
  },
  {
    category: "Forms",
    items: [
      { item: "Citizenship", fee: "$105" },
      { item: "I-30 Form", fee: "$105" },
      { item: "Passport", fee: "$35" },
      { item: "Immigration", fee: "$20" },
    ],
  },
  {
    category: "Copies",
    items: [
      { item: "Black & White", fee: "$0.10" },
      { item: "Color", fee: "$1" },
    ],
  },
  {
    category: "Renewals",
    items: [{ item: "Green Card", fee: "$65" }],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    title: "Community Gathering",
    subtitle: "HSC Community Assembly",
    category: "community",
    bgColor: "#F0E4D3",
  },
  {
    id: "2",
    title: "Food Pantry Stocking",
    subtitle: "Weekly Food Pantry Support",
    category: "pantry",
    bgColor: "#FAF3E8",
  },
  {
    id: "3",
    title: "Area Rides Van",
    subtitle: "Transit Vehicle Fleet",
    category: "rides",
    bgColor: "#F0E4D3",
  },
  {
    id: "4",
    title: "Family Shelter Facility",
    subtitle: "Housing Facility",
    category: "shelter",
    bgColor: "#FAF3E8",
  },
  {
    id: "5",
    title: "Senior Social Activity",
    subtitle: "Weekly Social Hour",
    category: "community",
    bgColor: "#F0E4D3",
  },
  {
    id: "6",
    title: "Grab & Go Station",
    subtitle: "Outdoor Distribution",
    category: "pantry",
    bgColor: "#FAF3E8",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "t1",
    initials: "JB",
    name: "John Boefile",
    role: "Executive Director",
    department: "hsc",
  },
  {
    id: "t2",
    initials: "MS",
    name: "Maria Santos",
    role: "Program Coordinator",
    department: "hsc",
  },
  {
    id: "t3",
    initials: "CG",
    name: "Carlos Gomez",
    role: "Case Manager",
    department: "hsc",
  },
  {
    id: "t4",
    initials: "JB",
    name: "John Boefile",
    role: "Rides Coordinator",
    department: "rides",
  },
  {
    id: "t5",
    initials: "AR",
    name: "Ana Rodriguez",
    role: "Lead Driver",
    department: "rides",
  },
];
