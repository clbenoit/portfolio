export const siteConfig = {
  title: 'Home',
  baseUrl: 'https://clbenoit.github.io/portfolio/',
  basePath: '/portfolio',
};

export const topNav = [
  { text: 'CV', link: '/cv/', href: '/portfolio/cv/' },
  { text: 'Blog', link: '/blog/', href: '/portfolio/blog/' },
  { text: 'Projects', link: '/projects/', href: '/portfolio/projects/' },
  { text: 'Contact', link: '/contact/', href: '/portfolio/contact/' },
];

export const sidebar = [
  {
    text: 'Projects Overview',
    link: '/projects/',
    href: '/portfolio/projects/',
  },
  {
    text: 'Genomics Data Analysis Apps',
    items: [
      { text: 'SomaVarDB', link: '/projects/somavardb/', href: '/portfolio/projects/somavardb/' },
      { text: 'GermlineVarDB', link: '/projects/germlinevardb/', href: '/portfolio/projects/germlinevardb/' },
      { text: 'MethylDB', link: '/projects/methyldb/', href: '/portfolio/projects/methyldb/' },
      { text: 'FilLT3r Shiny App', link: '/projects/filtr3r-shiny/', href: '/portfolio/projects/filtr3r-shiny/' },
      { text: 'LRM_Elembio', link: '/projects/lrm-elembio/', href: '/portfolio/projects/lrm-elembio/' },
    ],
  },
  {
    text: 'Web3 Engineering Group (CNC)',
    items: [
      { text: 'CNC AI Models', link: '/projects/cnc-ai/', href: '/portfolio/projects/cnc-ai/' },
      { text: 'CNC Cloud Services', link: '/projects/cnc-cloud/', href: '/portfolio/projects/cnc-cloud/' },
    ],
  },
];