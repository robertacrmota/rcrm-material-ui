import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import  theme  from './Theme';
import Header from './Header';
import Footer from './Footer';
import LandingPage from '../LandingPage';

function App() {
  const [tabValue, setTabValue] = React.useState(0);                // header tab currently selected
  const [selectedMenuIndex, setSelectedMenuIndex] = React.useState(0); // tab's menu item currently selected

  const props = {
    tabValue, 
    selectedMenuIndex,
    setTabValue,
    setSelectedMenuIndex
  };

  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Header {...props} />
            <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/services" component={() => <div>services</div>} />
            <Route exact path="/customsoftware" component={() => <div>customsoftware</div>} />
            <Route exact path="/mobileapps" component={() => <div>mobileapps</div>} />
            <Route exact path="/websites" component={() => <div>websites</div>} />
            <Route exact path="/revolution" component={() => <div>revolution</div>} />
            <Route exact path="/about" component={() => <div>about</div>} />
            <Route exact path="/contact" component={() => <div>contact</div>} />
            <Route exact path="/estimate" component={() => <div>estimate</div>} />
            </Switch>
            <Footer {...props} />
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
