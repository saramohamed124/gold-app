import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarReact from './Pages/NavbarReact';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';

function App() {

 
  return (
    <div className="App">
      <NavbarReact/> 
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='shop' element={<Shop/>}></Route>
  <Route path='cart' element={<Cart/>}></Route>
  <Route path='checkout' element={<Checkout/>}></Route>
  <Route path='/cart/checkout' element={<Checkout/>}></Route>
</Routes>
    </div>
  );
}

export default App;
