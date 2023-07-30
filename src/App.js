import Header from "./Header";
//npm install react-router-dom@6    // NOTE: Don't install the latest version
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//json-server --watch products.json --port 3004

import Products from './Pages/Products';
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SignIn from "./Account/SignIn";
import SignUp from "./Account/SignUp";

import ProdCreate from './Pages/productsCRUD/ProdCreate';
import ProdRead from './Pages/productsCRUD/ProdRead';
import ProdUpdate from './Pages/productsCRUD/ProdUpdate';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path='/products/create' element={<ProdCreate />}></Route>
          <Route path='/products/update/:prodid' element={<ProdUpdate />}></Route>
          <Route path='/products/read/:prodid' element={<ProdRead />}></Route>

        </Routes>

      </BrowserRouter>

      <ToastContainer autoClose={1000} />

    </div>
  );
}
export default App;
