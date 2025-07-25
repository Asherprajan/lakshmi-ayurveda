import { Heart, Brain, Scale, Shield, Activity, Flower } from "lucide-react"
import { LucideIcon } from "lucide-react"

export interface Treatment {
  id: number
  name: string
  icon: LucideIcon
  color: string
  description: string
  duration: string
  benefits: string[]
  image: string
}

export const treatments: Treatment[] = [
  {
    id: 1,
    name: "Panchakarma",
    icon: Heart,
    color: "#E74C3C",
    description: "A deep detoxification therapy to cleanse the body of toxins, balance the doshas (body energies), and restore optimal health through five traditional purification methods.",
    duration: "14-21 days",
    benefits: ["Deep cleansing", "Restored balance", "Improved vitality"],
    image: "/panchakarma.jpeg"
  },
  {
    id: 2,
    name: "Stress & Anxiety Management",
    icon: Brain,
    color: "#3498DB",
    description: "Tailored treatments using calming oils, Shirodhara, and relaxation therapies to soothe the nervous system, reduce anxiety, and promote mental clarity.",
    duration: "7-14 days", 
    benefits: ["Mental clarity", "Anxiety relief", "Nervous system balance"],
    image: "/stress.jpeg"
  },
  {
    id: 3,
    name: "Weight Management",
    icon: Scale,
    color: "#2ECC71", 
    description: "A holistic program focusing on Ayurvedic diet, herbal medicines, massage, and lifestyle practices to support healthy and sustainable weight loss.",
    duration: "21-28 days",
    benefits: ["Healthy weight loss", "Improved metabolism", "Sustainable habits"],
    image: "/weight.jpeg"
  },
  {
    id: 4,
    name: "Rejuvenation & Immunity",
    icon: Shield,
    color: "#9B59B6", 
    description: "Designed to revitalize the body, strengthen immunity, and improve energy levels using nourishing therapies and Rasayana (rejuvenating) herbs.",
    duration: "14 days",
    benefits: ["Enhanced immunity", "Increased vitality", "Cellular rejuvenation"],
    image: "/rejuvination.jpeg"
  },
  {
    id: 5,
    name: "Joint Pain & Arthritis",
    icon: Activity,
    color: "#F39C12", 
    description: "Effective therapies like Abhyanga (oil massage), Pizhichil, and herbal steam to relieve joint stiffness, reduce inflammation, and support mobility.",
    duration: "14-21 days",
    benefits: ["Pain relief", "Improved mobility", "Joint health"],
    image: "/joint.jpeg"
  },
  {
    id: 6,
    name: "Women's Health",
    icon: Flower,
    color: "#34495E", 
    description: "Customized Ayurvedic care for hormonal balance, menstrual issues, fertility, postpartum recovery, and overall wellness in every phase of a woman's life.",
    duration: "14-28 days",
    benefits: ["Hormonal harmony", "Fertility support", "Postpartum healing"],
    image: "/women.jpeg"
  },
] 