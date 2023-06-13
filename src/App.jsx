import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Navbar from "./components/Navbar/Navbar"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Listado de productos'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados'}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
