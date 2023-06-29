import { useEffect, useState, memo } from 'react'
// import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import ItemGrid from '../ItemGrid/ItemGrid'
import { useParams } from 'react-router-dom'

import { useAsync } from '../../hooks/useAsync'

import { getProducts } from '../../services/firebase/firestore/products'



const ItemListContainer = ({ greeting }) => {
    const [displayGrid, setDisplayGrid] = useState(false)
    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])
    
    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>Hubo un error al obtener los productos</h1>
    }

    return (
        <div>
            <h1 className='title'>{greeting}</h1>
            <h2>Ultima version</h2>
            <button onClick={() => setDisplayGrid(true)}>grilla</button>
            <button onClick={() => setDisplayGrid(false)}>lista</button>
            { displayGrid ? <ItemGrid products={products}/> : <ItemList products={products}/>}
        </div>
    )
}

export default ItemListContainer