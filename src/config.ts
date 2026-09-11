export const siteConfig = {
  title: 'Home',
  baseUrl: 'https://clbenoit.github.io/portfolio/',
  basePath: '/portfolio',
};

export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  fr: 'FR',
  en: 'EN',
};

export function localizedHref(href: string, lang: Locale): string {
  const base = siteConfig.basePath;
  return href.replace(base, `${base}/${lang}`);
}

export const topNav = [
  { text: 'CV', href: '/portfolio/cv/' },
  { text: 'Blog', href: '/portfolio/blog/' },
  { text: 'Projects', href: '/portfolio/projects/' },
  { text: 'Contact', href: '/portfolio/contact/' },
];

export const sidebar = [
  {
    text: 'Projects Overview',
    href: '/portfolio/projects/',
  },
  {
    text: 'Genomics Data Analysis Apps',
    items: [
      { text: 'SomaVarDB', href: '/portfolio/projects/somavardb/' },
      { text: 'GermlineVarDB', href: '/portfolio/projects/germlinevardb/' },
      { text: 'MethylDB', href: '/portfolio/projects/methyldb/' },
      { text: 'FilLT3r Shiny App', href: '/portfolio/projects/filtr3r-shiny/' },
      { text: 'LRM_Elembio', href: '/portfolio/projects/lrm-elembio/' },
    ],
  },
  {
    text: 'Web3 Engineering Group (CNC)',
    items: [
      { text: 'CNC AI Models', href: '/portfolio/projects/cnc-ai/' },
      { text: 'CNC Cloud Services', href: '/portfolio/projects/cnc-cloud/' },
    ],
  },
];