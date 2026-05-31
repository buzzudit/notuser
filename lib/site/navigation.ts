export interface NavItem {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "People", href: "/people" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
