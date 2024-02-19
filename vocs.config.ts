import { defineConfig } from 'vocs'

export default defineConfig({
  // basePath: '/portfolio', 
  baseUrl 'https://clbenoit.github.io/portfolio'
  theme: { 
      colorScheme: 'dark'
  }, 
  title: 'Home',
  topNav: [ 
    { text: 'CV', link: '/CV' }, 
    { text: 'Blog', link: '/blog' }
  ],
  sidebar: [
    {
      text: 'Projects',
      link: '/projects',
    },
    {
    text: 'SomaVarDB',
    link: '/projects/somavardb',
  },
  {
    text: 'GermlineVarDB',
    link: '/projects/germlinevardb',
  }  
  ],
})
