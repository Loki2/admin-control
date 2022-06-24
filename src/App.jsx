import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Signin from './pages/signin/Signin';
import Hotel from "./pages/hotel/Hotel";
import User from './pages/user/User';
import Single from './pages/signle/Single'; //user single
import Add from './pages/add/Add'; //Create New User
import Product from './pages/product/Product';
import { productInputs, userInputs } from './formSource';
import './styles/dark.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';


function App() {
  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="signin" element={<Signin />} />
            <Route path="hotels" element={<Hotel />} />
            <Route path="users">
              <Route index element={<User />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<Add inputs={userInputs} title="Add New User" />} />   
            </Route>    
            <Route path='products'>
              <Route index element={ <Product /> } />
              <Route path=':productId' element={() => console.log("Product ID:")} />
              <Route path='new' element={<Add inputs={productInputs} title="Add New Product" />} />
            </Route>
          </Route>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
