import { createMuiTheme } from '@material-ui/core/styles';


const teal   = "#00B5AD",
      salmon = "#FF6565",
      orange ='#FFBA60';

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
      orange: { main: `${orange}`},

      // bg colors
      bg_primary: { main: '#262626' },
      bg_secondary: { main: '#313233' },
      bg_tertiary: { main: '#0B72B9' },
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
  },


  // ----------------------------------------------------------------------
  // COMPONENTS 
  // ----------------------------------------------------------------------

  estimateButton: {
    backgroundColor: `${orange}`,
    fontFamily: 'Pacifico',
    textTransform: 'none',
    borderRadius: '5rem',
    margin: '0 15px 0 50px',
    padding: '10px 20px',
    color: '#fff',    
  }
});
