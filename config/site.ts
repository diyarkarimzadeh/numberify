import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Numberify",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Get Temp Number",
      href: "/services",
    },
    {
      title: "How it works",
      href: "https://github.com/diyarkarimzadeh",
      target: '_blank'
    },
  ],
  links: {
    twitter: "https://twitter.com/diiiiiooor",
    github: "https://github.com/diyarkarimzadeh"
  },
}
