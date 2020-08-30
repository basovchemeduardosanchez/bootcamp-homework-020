import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Switch>
        <Route exact path={['/about', '/']} >
          <About />
        </Route>
        <Route exact path={['/portfolio']} >
          <Portfolio />
        </Route>
        <Route exact path={['/contact']} >
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
