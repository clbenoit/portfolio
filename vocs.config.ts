import { defineConfig } from 'vocs'

export default defineConfig({
  basePath: '/portfolio', 
  theme: { 
    // colorScheme: 'auto',
    variables: { 
      color: { 
        white: { light: '#ffffff', dark: 'rgba(255 255 255 / 100%)' },
        black: { light: '#000000', dark: 'rgba(0 0 0 / 100%)' },

        /* Backgrounds */
        background: { light: '#f6f6f7', dark: '#232225' },
        background2: { light: '#ffffff', dark: '#2b292d' },
        background3: { light: '#f0f0f2', dark: '#2e2c31' },
        background4: { light: '#e9e9ec', dark: '#323035' },
        background5: { light: '#e2e2e6', dark: '#3c393f' },
        backgroundDark: { light: '#ffffff', dark: '#1e1d1f' },

        /* Accent */
        backgroundAccent: { light: '#5b5bd6', dark: '#5b5bd6' },
        backgroundAccentHover: { light: '#4a4ac4', dark: '#5b5bd6' },
        backgroundAccentText: { light: '#ffffff', dark: 'rgba(255 255 255 / 100%)' },

        /* Tints */
        backgroundBlueTint: { light: 'rgba(0, 143, 245, 0.08)', dark: '#008ff519' },
        backgroundGreenTint: { light: 'rgba(0, 164, 51, 0.08)', dark: '#00a43319' },
        backgroundGreenTint2: { light: 'rgba(0, 168, 56, 0.12)', dark: '#00a83829' },
        backgroundIrisTint: { light: 'rgba(91, 91, 214, 0.08)', dark: '#000bff19' },
        backgroundRedTint: { light: 'rgba(243, 0, 13, 0.08)', dark: '#f3000d14' },
        backgroundRedTint2: { light: 'rgba(255, 0, 8, 0.12)', dark: '#ff000824' },
        backgroundYellowTint: { light: 'rgba(244, 221, 0, 0.12)', dark: '#f4dd0016' },

        /* Borders */
        border: { light: '#d4d4d8', dark: '#3c393f' },
        border2: { light: '#bdbdc4', dark: '#6f6d78' },
        borderAccent: { light: '#6e6ade', dark: '#6e6ade' },
        borderBlue: { light: 'rgba(0, 158, 255, 0.25)', dark: '#009eff2a' },
        borderGreen: { light: 'rgba(1, 156, 57, 0.25)', dark: '#019c393b' },
        borderIris: { light: '#6e6ade', dark: '#303374' },
        borderRed: { light: 'rgba(255, 0, 8, 0.25)', dark: '#ff000824' },
        borderYellow: { light: 'rgba(244, 221, 0, 0.35)', dark: '#f4dd0016' },

        /* Text */
        heading: { light: '#1c1c1f', dark: '#e9e9ea' },
        text: { light: '#2b2b2f', dark: '#cfcfcf' },
        text2: { light: '#4a4a4f', dark: '#bdbdbe' },
        text3: { light: '#6b6b70', dark: '#a7a7a8' },
        text4: { light: '#8a8a90', dark: '#656567' },

        /* Accent text */
        textAccent: { light: '#5b5bd6', dark: '#b1a9ff' },
        textAccentHover: { light: '#4a4ac4', dark: '#6e6ade' },

        textBlue: { light: '#0066cc', dark: '#70b8ff' },
        textBlueHover: { light: '#004fa3', dark: '#3b9eff' },

        textGreen: { light: '#0f7a45', dark: '#3dd68c' },
        textGreenHover: { light: '#0b5e35', dark: '#33b074' },

        textIris: { light: '#5b5bd6', dark: '#b1a9ff' },
        textIrisHover: { light: '#4a4ac4', dark: '#6e6ade' },

        textRed: { light: '#c93737', dark: '#ff9592' },
        textRedHover: { light: '#a52a2a', dark: '#ec5d5e' },

        textYellow: { light: '#9c7a00', dark: '#f5e147' },
        textYellowHover: { light: '#7a5f00', dark: '#e2a336' },

        title: { light: '#1c1c1f', dark: 'rgba(255 255 255 / 100%)' },

        /* Shadows */
        shadow: { light: 'rgba(0, 0, 0, 0.05)', dark: '#00000000' },
        shadow2: { light: 'rgba(0, 0, 0, 0.08)', dark: 'rgba(0, 0, 0, 0.05)' },

        inverted: { light: '#000000', dark: '#ffffff' },
      },
      content: { 
        horizontalPadding: '40px', 
        verticalPadding: '80px'
      } 
    } 
  }, 
  title: 'Home',
  topNav: [ 
    { text: 'CV', link: '/CV' }, 
    { text: 'Blog', link: '/blog' },
    { text: 'Projects', link: '/projects' }
  ],
  sidebar: [
    {
      text: 'Featured Work',
      items: [
        {
          text: 'Projects Overview',
          link: '/projects',
        },
      ],
    },
    {
      text: 'Genomics Data Analysis App',
      items: [
        {
          text: 'SomaVarDB',
          link: '/projects/somavardb',
        },
        {
          text: 'GermlineVarDB',
          link: '/projects/germlinevardb',
        },
        {
          text: 'MethylDB',
          link: '/projects/methyldb',
        },
        {
          text: 'FilLT3r Shiny App',
          link: '/projects/filtr3r-shiny',
        },
        {
          text: 'LRM_Elembio',
          link: '/projects/lrm-elembio',
        },
      ],
    },
    {
      text: 'Chartreuse Node Crew',
      items: [
        {
          text: 'CNC AI Models',
          link: '/projects/cnc-ai',
        },
        {
          text: 'CNC Cloud Services',
          link: '/projects/cnc-cloud',
        },
      ],
    },
  ]
  // sidebar: [
  //   {
  //     text: 'Featured Work',
  //     link: '/projects',
  //   },
  //   {
  //     text: 'SomaVarDB',
  //     link: '/projects/somavardb',
  //   },
  //       {
  //     text: 'FilLT3r Shiny App',
  //     link: '/projects/filtr3r-shiny',
  //   },
  //   {
  //     text: 'GermlineVarDB',
  //     link: '/projects/germlinevardb',
  //   },
  //   {
  //     text: 'CNC AI Models',
  //     link: '/projects/cnc-ai',
  //   },
  //   {
  //     text: 'CNC Cloud Services',
  //     link: '/projects/cnc-cloud',
  //   }  
  // ],
})
