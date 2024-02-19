import { defineConfig } from 'vocs'

export default defineConfig({
  basePath: '/portfolio', 
  theme: { 
    colorScheme: 'dark',
    variables: { 
      color: { 
        white: {light : 'rgba(255 255 255 / 100%)',dark : 'rgba(255 255 255 / 100%)'},
        black: {light : 'rgba(0 0 0 / 100%)', dark : 'rgba(0 0 0 / 100%)'},        
        background: { light: '#232225', dark: '#232225'},
        background2: { light: '#2b292d', dark: '#2b292d' },
        background3: { light: '#2e2c31', dark: '#2e2c31'},
        background4: { light: '#323035',  dark: '#323035'},
        background5: {  light: '#3c393f', dark: '#3c393f' },
        backgroundAccent: {light : '#5b5bd6',dark : '#5b5bd6' },
        backgroundAccentHover: {light : '#5b5bd6', dark : '#5b5bd6' },
        backgroundAccentText: {light : 'rgba(255 255 255 / 100%)',dark : 'rgba(255 255 255 / 100%)' },
        backgroundBlueTint: {light : '#008ff519', dark : '#008ff519'},
        backgroundDark: {light : '#1e1d1f',dark : '#1e1d1f'},
        backgroundGreenTint: {light : '#00a43319',dark : '#00a43319'},
        backgroundGreenTint2: {light : '#00a83829',dark : '#00a83829'},
        backgroundIrisTint: {light : '#000bff19',dark : '#000bff19'},           
        backgroundRedTint: {light : '#f3000d14',dark : '#f3000d14'},
        backgroundRedTint2: {light : '#ff000824',dark : '#ff000824'},           
        backgroundYellowTint: {light : '#f4dd0016',dark : '#f4dd0016'},           
        border: {light : '#3c393f',dark : '#3c393f'},           
        border2: {light : '#6f6d78',dark : '#6f6d78'},           
        borderAccent: {light : '#6e6ade',dark : '#6e6ade'},           
        borderBlue: {light : '#009eff2a',dark : '#009eff2a'},
        borderGreen: {light : '#019c393b',dark : '#019c393b'},           
        borderIris: {light : '#303374',dark : '#303374'},  
        borderRed: {light : '#ff000824',dark : '#ff000824'},           
        borderYellow: {light : '#f4dd0016',dark : '#f4dd0016'},
        heading: {light : '#e9e9ea',dark : '#e9e9ea'},           
        inverted: {light : 'rgba(255 255 255 / 100%)',dark : 'rgba(255 255 255 / 100%)'},           
        shadow: {light : '#00000000',dark : '#00000000'},   
        shadow2: {light : 'rgba(0, 0, 0, 0.05)',dark : 'rgba(0, 0, 0, 0.05)'},           
        text: { light : '#cfcfcf',dark : '#cfcfcf'},
        text2: {light : '#bdbdbe',dark : '#bdbdbe'},
        text3: {light : '#a7a7a8',dark : '#a7a7a8'},
        text4: {light : '#656567', dark : '#656567'},
        textAccent: {light : '#b1a9ff', dark : '#b1a9ff'},                                                                                    
        textAccentHover: {light : '#6e6ade', dark : '#6e6ade'},                                                                                    
        textBlue: {light : '#70b8ff', dark : '#70b8ff'},                                                                                    
        textBlueHover: {light : '#3b9eff', dark : '#3b9eff'},                                                                                    
        textGreen: {light : '#3dd68c', dark : '#3dd68c'},                                                                                    
        textGreenHover: {light : '#33b074', dark : '#33b074'},                                                                                    
        textIris: {light : '#b1a9ff', dark : '#b1a9ff'},                                                                                    
        textIrisHover: {light : '#6e6ade', dark : '#6e6ade'},                                                                                    
        textRed: {light : '#ff9592', dark : '#ff9592'},                                                                                    
        textRedHover: {light : '#ec5d5e', dark : '#ec5d5e'},
        textYellow: {light : '#f5e147', dark : '#f5e147'},                                                                                    
        textYellowHover: {light : '#e2a336', dark : '#e2a336'},
        title: {light : 'rgba(255 255 255 / 100%)', dark : 'rgba(255 255 255 / 100%)'},           
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
