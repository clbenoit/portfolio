import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Portfolio',
  rootDir: '/portfolio/',
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
