import React from 'react';
import {Route,Switch} from 'react-router-dom';

//componentes

import App from './components/App';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Page404 from './components/page404';

const AppRoutes = () => {
  return(
       <App>
           <Switch>
               <Route path="/about" component={About}/>
               <Route path="/contact" component={Contact}/>
               <Route path="/" component={Home}/>
               <Route  component={Page404}/>
           </Switch>
       </App>
  );
}

export default AppRoutes;

