import type { ReactNode } from "react"

export interface StatItem {
  label: string
  value: string
}

export interface CompareItem {
  aspect: string
  russia: string
  turkey: string
}

export interface ProConItem {
  pros: string[]
  cons: string[]
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  stats?: StatItem[]
  compare?: CompareItem[]
  proCon?: { russia: ProConItem; turkey: ProConItem }
  innovations?: { country: string; flag: string; items: string[] }[]
  cards?: { title: string; desc: string; icon: string }[]
}

export interface SectionProps extends Section {
  isActive: boolean
}
