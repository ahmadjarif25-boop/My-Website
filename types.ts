export type NewsArticle = {
  id: string;
  title: string;
  category: Category;
  content: string;
  source: string;
  date: string;
  imageUrl: string;
  imageHint: string;
  link: string;
};

export const categories = [
  'Politics',
  'Sports',
  'Business',
  'Technology',
  'International',
] as const;
export type Category = (typeof categories)[number];

export const categoryDisplayMap: Record<Category, string> = {
    Politics: 'রাজনীতি',
    Sports: 'খেলা',
    Business: 'ব্যবসা',
    Technology: 'প্রযুক্তি',
    International: 'আন্তর্জাতিক',
};


export const newspaperCategories = ['National', 'Local', 'English'] as const;
export type NewspaperCategory = (typeof newspaperCategories)[number];

export const newspaperCategoryMap: Record<NewspaperCategory, string> = {
  National: 'National',
  Local: 'Local',
  English: 'English',
};

export type Newspaper = {
  id: string;
  name: string;
  nameBn?: string;
  logoUrl: string;
  websiteUrl: string;
  imageHint: string;
  category: NewspaperCategory;
  district?: string;
  districtBn?: string;
  isActive: boolean;
};

export const tvChannelCategories = ['National', 'Local'] as const;
export type TVChannelCategory = (typeof tvChannelCategories)[number];

export type TVChannel = {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  imageHint: string;
  category: TVChannelCategory;
};

export interface Plan {
  id: string;
  name: string;
  price: number;
  currency: string;
  duration: 'monthly' | 'yearly';
  features: string[];
}

export const submissionStatus = ['pending', 'approved', 'rejected'] as const;
export type SubmissionStatus = (typeof submissionStatus)[number];

export interface SubmittedSource {
  id: string;
  userId: string;
  userDisplayName: string;
  userEmail: string;
  mediaName: string;
  mediaLink: string;
  sourceCategory: NewspaperCategory;
  district?: string;
  districtBn?: string;
  ownerContact: string;
  logoUrl: string;
  status: SubmissionStatus;
  rejectionReason?: string;
  submittedAt: any; // Firestore timestamp
}

export interface Feedback {
  id: string;
  userId?: string;
  name?: string;
  email?: string;
  feedback: string;
  submittedAt: any; // Firestore timestamp
  adminReply?: string;
  repliedAt?: any;
  repliedBy?: string;
  userHasSeenReply?: boolean;
}
