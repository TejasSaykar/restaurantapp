import './App.css'
import Layout from './components/Layouts/Layout'
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import CartPage from './pages/Cart';





function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='*' element={<Pagenotfound/>} />
      </Routes>
    </>
  )
}

export default App
