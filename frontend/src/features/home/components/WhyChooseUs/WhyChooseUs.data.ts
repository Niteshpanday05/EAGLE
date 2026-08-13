import {
  Gem,
  Headphones,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { WhyChooseUsItem } from "./whyChooseUs.types";

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    id: 1,
    title: "Fast Delivery",
    description:
      "Reliable nationwide shipping with quick dispatch and real-time order tracking.",
    icon: Truck,
  },

  {
    id: 2,
    title: "Secure Payments",
    description:
      "Encrypted checkout with trusted payment gateways to keep every transaction safe.",
    icon: ShieldCheck,
  },

  {
    id: 3,
    title: "Premium Quality",
    description:
      "Every product is carefully selected to ensure outstanding quality and value.",
    icon: Gem,
  },

  {
    id: 4,
    title: "24/7 Support",
    description:
      "Our dedicated support team is always ready to help before and after your purchase.",
    icon: Headphones,
  },
];