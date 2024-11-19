// import logo from './logo.svg';
import './App.css';
// import Button from './Components/Button';
// import Form from './Components/Form';
// import Test from './Components/Test';
// import ShoppingStuffChild from './Components/ShoppingStuffChild';
// import ShoppingStuffParent from './Components/ShoppingStuffParent';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import { Route, Routes } from 'react-router-dom';
import SingleProduct from './Components/SingleProduct';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';



function App() {
  return (

    <>

      <Nav/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
       
        <Route path='/Product/:productId' element={<SingleProduct/>}/>

        <Route path='/Cart' element={<Cart/>}/>

        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>

      
      <Footer/>

    </>
  );
}

export default App;
