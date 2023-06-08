import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Button from './components/Button/Button'
import Animation from './components/Animation/Animation'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi Ecommerce'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos Filtrados'}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      {/* <Button /> */}
      {/* <Animation /> */}
    </>
  )
}

export default App