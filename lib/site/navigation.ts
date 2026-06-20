export interface NavItem {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Circle", href: "/circle" },
  { label: "Blog", href: "/blog" },
  { label: "Lab", href: "/lab" },
  { label: "Contact", href: "/contact" },
];
