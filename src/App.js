import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Resume from './components/info/Resume'
import About from './components/info/About'
import Portfolio from './components/info/Portfolio'
import SideNav from './components/sidenav/SideNav'
function App() {
  return (
  <BrowserRouter>
    
       <Switch>
          <Route exact path="/resume" component={ Resume }/> 
          <Route exact path="/about" component={ About }/> 
          <Route exact path="/portfolio" component={ Portfolio }/> 
       </Switch>
  </BrowserRouter>
  );
}

export default App;
