import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import  theme  from './Theme';
import Header from './Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello!
    </ThemeProvider>
  );
}

export default App;
