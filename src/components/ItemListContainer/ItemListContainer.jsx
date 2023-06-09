import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import ItemGrid from '../ItemGrid/ItemGrid'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [displayGrid, setDisplayGrid] = useState(false)

    const { categoryId } = useParams()

    useEffect(() => {
        const getFunction = categoryId ? getProductsByCategory : getProducts

        getFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <button onClick={() => setDisplayGrid(true)}>grilla</button>
            <button onClick={() => setDisplayGrid(false)}>lista</button>
            { displayGrid ? <ItemGrid products={products}/> : <ItemList products={products}/>}
        </div>
    )
}

export default ItemListContainer