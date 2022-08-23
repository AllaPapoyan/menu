/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Home from './Home/Home'
import './App.css';
import logoimg from './IMG/logo.png'
import About from './About/About'
import Contacts from './Contacts/Contacts'
import {Routes,Route, Link}from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className='header'>
          <nav className='navbar'>
            <a className='brend'>
            <div className='brend-logo' >  <img src={logoimg}/></div>
             <div className='brend-name'>
              <h1>Simple House</h1>
              <h6>new restaurant template</h6>
              </div> 
            </a>
            <div className='menu-items'>
              <Link className='item' to="/">Home</Link>
              <Link className='item'to="About"> About</Link>
              <Link className='item'to="Contact">Contact</Link>
            </div>
          </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contacts />} />
      </Routes>
    <footer className='footer-contanier'>
        <nav className='navbar'>
          <h2>Copyright © 2045 Simple House | Design: TemplateMo</h2>
        </nav>
    </footer>
    
    </div>
  );
}

export default App;
