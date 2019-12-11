import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Home from '../home/Home.jsx'

import enhancer from '@/redux/allEnhancer'
import AppController from './app.js'

class App extends AppController {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default enhancer(App)
