export type PageId = 'home' | 'services' | 'gallery' | 'about' | 'contact';

export type ServiceId = 'all' | 'rides' | 'shelter' | 'pantry' | 'senior' | 'translation';

export type GalleryCategory = 'all' | 'community' | 'pantry' | 'rides' | 'shelter';

export interface ServiceItem {
  id: Exclude<ServiceId, 'all'>;
  title: string;
  shortDesc: string;
  iconType: 'rides' | 'shelter' | 'pantry' | 'senior' | 'translation';
}

export interface StatItem {
  number: string;
  label: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: GalleryCategory;
  bgColor: string;
}

export interface TeamMember {
  id: string;
  initials: string;
  name: string;
  role: string;
  department: 'hsc' | 'rides';
}

export interface RateCard {
  amount: string;
  label: string;
}

export interface TranslationFee {
  category: 'Certificates' | 'Forms' | 'Copies' | 'Renewals';
  items: { item: string; fee: string }[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  serviceNeeded: string;
  message: string;
}
