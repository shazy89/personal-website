import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SideNav from './components/sidenav/SideNav'
function App() {
  return (
    <div>
      <Router>
         <SideNav />
      </ Router>
    </div>

  );
}
       

export default App;
