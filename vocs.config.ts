import { defineConfig } from 'vocs'

export default defineConfig({
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
  }
  ],
})
