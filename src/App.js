import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Resume from './components/info/Resume'
import About from './components/info/About'
import Portfolio from './components/info/Portfolio'

function App() {
  return (
  <BrowserRouter>
       <Switch>
          <Route path="/" component={ Home }/> 
          <Route exact path="Resume" component={ Resume }/> 
          <Route exact path="About" component={ About }/> 
          <Route exact path="Portfolio" component={ Portfolio }/> 
       </Switch>
  </BrowserRouter>
  );
}

export default App;
