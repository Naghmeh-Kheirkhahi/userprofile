// import logo from './logo.svg';
import './App.css';
// import Button from './Components/Button';
// import Form from './Components/Form';
// import Test from './Components/Test';
// import ShoppingStuffChild from './Components/ShoppingStuffChild';
// import ShoppingStuffParent from './Components/ShoppingStuffParent';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import { Route, Routes } from 'react-router-dom';
import SingleProduct from './Components/ProductList and SingleProduct/SingleProduct';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import FAQ from './Pages/FAQ/FAQ';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import CustomerSupport from './Pages/CustomerSupport/CustomerSupport';
import TandC from './Pages/TandC/TandC';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import UserPanel from './Pages/UserPanel/UserPanel';

import { ThemeProvider } from './Context/ThemeContext';
import Test from './Components/Test/Test';

import { UserProvider } from './Context/UserContext';
import DisplayUsername from './Components/Test/DisplayUsername';

import Orders from './Pages/UserPanel/UserPanelMenu/Orders';
import Address from './Pages/UserPanel/UserPanelMenu/Address';
import Payment from './Pages/UserPanel/UserPanelMenu/Payment';
import Interests from './Pages/UserPanel/UserPanelMenu/Interests';
import PersonalInfo from './Pages/UserPanel/UserPanelMenu/PersonalInfo';
import ChangePass from './Pages/UserPanel/UserPanelMenu/ChangePass';

import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';





function App() {

  return (

    <>

      <ThemeProvider>

        <UserProvider>
          <Nav />

          <Routes>
            {/* The Test and DisplayUsername components defined as a Route, have been used for testing useContext */}
            {/* <Route path='/Test' element={<Test />} />
            <Route path='/DisplayUsername' element={<DisplayUsername />} /> */}

            <Route path='/' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About' element={<About />} />

            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />

            <Route path='/UserPanel' element={<ProtectedRoute><UserPanel /></ProtectedRoute>} />            
            <Route path='/UserPanel/Orders' element={<ProtectedRoute><Orders /></ProtectedRoute>} />
            <Route path='/UserPanel/Address' element={<ProtectedRoute><Address /></ProtectedRoute>} />
            <Route path='/UserPanel/Payment' element={<ProtectedRoute><Payment /></ProtectedRoute>}/>
            <Route path='/UserPanel/Interests' element={<ProtectedRoute><Interests /></ProtectedRoute>}/>
            <Route path='/UserPanel/PersonalInfo' element={<ProtectedRoute><PersonalInfo /></ProtectedRoute>}/>
            <Route path='/UserPanel/ChangePass' element={<ProtectedRoute><ChangePass /></ProtectedRoute>}/>

            <Route path='/Product/:productId' element={<SingleProduct />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Checkout' element={<Checkout />} />

            <Route path='/FAQ' element={<FAQ />} />
            <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
            <Route path='/CustomerSupport' element={<CustomerSupport />} />
            <Route path='/TandC' element={<TandC />} />
          </Routes>

          <Footer />
        </UserProvider>

      </ThemeProvider>
    </>
  );
}

export default App;
