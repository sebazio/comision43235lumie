import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Navbar from "./components/Navbar/Navbar"

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
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
