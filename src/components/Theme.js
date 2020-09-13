import { createMuiTheme } from '@material-ui/core/styles';


const teal   = "#00B5AD",
      salmon = "#FF6565",
      orange ='#FFBA60',
      orangeLight = '#ffc880',
      orangeDark = '#e6a756',
      blue = '#0B72B9',
      grey = '#868686';

export default createMuiTheme({
  // ----------------------------------------------------------------------
  // PALETTE 
  // ----------------------------------------------------------------------
  palette: {
      common: {
        teal: `${teal}`,
        salmon: `${salmon}`
      },
      primary: { main: `${teal}` },
      secondary: { main: `${salmon}`},   

      // basic colors
      red: { main: '#DB2828' },
      yellow: { main: '#FBBD08' },
      green: { main: '#21BA45' },
      orange: { light: `${orangeLight}`,
                main: `${orange}`,
                dark: `${orangeDark}`
      },

      // bg colors
      bg_primary: { main: '#262626' },
      bg_secondary: { main: '#313233' },
      bg_tertiary: { main:  `${blue}`},
  },


  // ----------------------------------------------------------------------
  // TYPOGRAPHY 
  // ----------------------------------------------------------------------

  typography: {
      fontFamily: ['Lato', 'Roboto'].join(','),
      navtab: {
        textTransform: 'none',
        fontFamily: 'Raleway',
        fontWeight: 400,
        color: 'white',
      },
      h2: {
        fontFamily: 'Raleway',
        fontSize: '2rem',
        fontWeight: 700,
        lineHeight: 1.5,
      },
      h4: {
        fontFamily: 'Raleway',
        fontSize: '1.75rem',
        fontWeight: 700,
        color: blue
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 300,
        color: grey
      }
  },


  // ----------------------------------------------------------------------
  // COMPONENTS 
  // ----------------------------------------------------------------------

  estimateButton: {
    backgroundColor: `${orange}`,
    fontFamily: 'Pacifico',
    textTransform: 'none',
    borderRadius: '5rem',
    padding: '10px 20px',
    color: '#fff',    
    '&:hover': {
      backgroundColor: `${orangeLight}`,
    },
    '&:active': {
      backgroundColor: `${orangeDark}`
    }
  }, 

  radialButtonOutline: {
    borderRadius: '5rem',
    padding: '10px 20px',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    borderColor: `${blue}`,
    color: `${blue}`,
    textTransform: 'none',
  }
});
