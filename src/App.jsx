import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Shop from './Screens/Shop/Shop'
import TrackOrders from './Screens/TrackOrders/TrackOrders'
import Contact from './Screens/Contact/Contact'
import ProductDetails from './Screens/ProductDetails/ProductDetails'
import CartDetails from './Screens/CartDetails/CartDetails'





function App() {

  return (
    <>
    <BrowserRouter>
    <div className='h-[100vh] bg-[rgba(239,232,232,0.99)] pt-[20px]'>
      <Header />
      <div className="screens">
        <CartDetails />
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/track' element={<TrackOrders />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/:slug' element={<ProductDetails />}/>
        </Routes>
      </div>
        <Footer />
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
