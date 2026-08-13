import { LucideIcon } from "lucide-react";

export interface WhyChooseUsItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface WhyChooseUsGridProps {
  items: WhyChooseUsItem[];
}

export interface WhyChooseUsCardProps {
  item: WhyChooseUsItem;
}