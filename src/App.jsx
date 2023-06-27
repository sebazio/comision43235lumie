import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Navbar from "./components/Navbar/Navbar"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from "./context/CartContext"
import { NotificationProvider } from "./notification/NotificationService"

function App() {
  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Listado de productos'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados'}/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='/checkout' element={<Checkout />}/>
              <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
