import "./App.css"
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CartContext';

function App() {
  return (

    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App

