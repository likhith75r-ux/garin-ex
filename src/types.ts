export type ScreenId =
  | '01-introduction'
  | '02-product'
  | '03-automation'
  | '04-specialist-in'
  | '05-after-sales'
  | '06-contact-us';

export interface NavItem {
  id: ScreenId;
  number: string;
  label: string;
}

export interface ProductModule {
  id: string;
  moduleCode: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  features: string[];
  specs: Record<string, string>;
  applications: string[];
  capacityRange: string;
}

export interface SpecialistCapability {
  id: string;
  title: string;
  description: string;
  statusBadge: {
    label: string;
    value: string;
    icon: string;
  };
  tags?: string[];
  colSpan?: number;
}

export interface AutomationCapability {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
  colSpan?: string;
  details?: string[];
}

export interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
  image?: string;
  colSpan?: string;
  features?: string[];
}

export interface InquiryFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  productRequired: string;
  projectRequirement: string;
  message: string;
}
