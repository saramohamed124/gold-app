import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarReact from './components/NavbarReact';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Cart from './components/Cart';

function App() {

 
  return (
    <div className="App">
      <NavbarReact/> 
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='shop' element={<Shop/>}></Route>
  <Route path='cart' element={<Cart/>}></Route>
</Routes>
    </div>
  );
}

export default App;
