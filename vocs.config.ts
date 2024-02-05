import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Home',
  topNav: [ 
    { text: 'CV', link: '/CV', match: '/docs' }, 
    { text: 'Blog', link: '/blog' }
  ],
  sidebar: [
    {
      text: 'Projets',
      link: '/projects',
    },
    {
      text: 'Projet n°1',
      link: '/project1',
    },
  ],
})
