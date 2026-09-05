import {
  ServiceItem,
  StatItem,
  TeamMember,
  RateCard,
  TranslationFee,
} from "../types";

export const STATS_DATA: StatItem[] = [
  { number: "50+", label: "Years Serving The Community" },
  { number: "500+", label: "Families Housed" },
  { number: "1,000+", label: "Meals Distributed" },
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

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "t1",
    initials: "SDT",
    name: "Stephanie Del Toro",
    role: "Executive Director",
    department: "hsc",
  },
  {
    id: "t2",
    initials: "JD",
    name: "Jessica DelaCruz",
    role: "Senior Coordinator",
    department: "hsc",
  },
  {
    id: "t3",
    initials: "PC",
    name: "Pedro Chavez",
    role: "Receptionist",
    department: "hsc",
  },
  {
    id: "t4",
    initials: "AL",
    name: "Alex Lafriniere",
    role: "",
    department: "rides",
  },
  {
    id: "t5",
    initials: "SSP",
    name: "Sherry Smith-Perry",
    role: "",
    department: "rides",
  },
  {
    id: "t6",
    initials: "WB",
    name: "Walter Bargen",
    role: "Chair",
    department: "board",
  },
  {
    id: "t7",
    initials: "JM",
    name: "Joe Munoz",
    role: "Vice Chair",
    department: "board",
  },
  {
    id: "t8",
    initials: "JB",
    name: "Josefina Barragan",
    role: "Secretary",
    department: "board",
  },
  {
    id: "t9",
    initials: "CQ",
    name: "Carlos Quiroga",
    role: "Treasurer",
    department: "board",
  },
  {
    id: "t10",
    initials: "AE",
    name: "Aaron Eckhout",
    role: "Member",
    department: "board",
  },
  {
    id: "t11",
    initials: "AP",
    name: "Abel Pena",
    role: "Member",
    department: "board",
  },
  {
    id: "t12",
    initials: "AO",
    name: "Angie Ochoa",
    role: "Member",
    department: "board",
  },
  {
    id: "t13",
    initials: "CS",
    name: "Celeste Spivey",
    role: "Member",
    department: "board",
  },
  {
    id: "t14",
    initials: "AV",
    name: "Ana Valdovinos",
    role: "Member",
    department: "board",
  },
];
