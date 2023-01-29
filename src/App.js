import React, { Component } from 'react'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import NotFound from './components/NotFound/NotFound'
import Contact from './components/Contact/Contact'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>

        <Footer />
      </div>
    )
  }
}

