import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Header } from './components/Header';

import Footer from './components/Footer'
import { Home } from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
       <Header open = {open} toggleDrawer={toggleDrawer(open)}   />
    <Router>
      <Routes>
        <Route path='/' element={<Home  />} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/products' element={<Products/>} ></Route>
      </Routes>
    </Router>

    <Footer/>
    </>
  )
}

export default App
