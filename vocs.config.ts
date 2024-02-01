import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Portfolio',
  baseUrl: 'https://clbenoit.github.io/portfolio/',
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
