import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Css/index.css'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './Components/Adminside/Home.jsx'
import Service from './Components/Adminside/Service.jsx'
import News from './Components/Adminside/News.jsx'
import FAQSection from './Components/Adminside/FAQSection.jsx'
import Team from './Components/Adminside/Team.jsx'
import Contact from './Components/Adminside/Contact.jsx'
import Oldcars from './Components/Adminside/Oldcars.jsx'
import Newcars from './Components/Adminside/Newcars.jsx'
import Login from './Components/Adminside/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/Service" element={<Service />} />
      <Route path="/News" element={<News />} />
      <Route path="/Frequently Asked Question" element={<FAQSection />} />
      <Route path="/Team" element={<Team />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Old-cars" element={<Oldcars />} />
      <Route path="/New-cars" element={<Newcars />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  </Router>
)