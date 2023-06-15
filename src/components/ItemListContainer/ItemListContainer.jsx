import { useEffect, useState, memo } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import ItemGrid from '../ItemGrid/ItemGrid'
import { useParams } from 'react-router-dom'

const ItemListMemo = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [displayGrid, setDisplayGrid] = useState(false)
    const [loading, setLoading] = useState(true)

    const [title, setTitle] = useState('Primer titulo')

    const { categoryId } = useParams()

    useEffect(() => {
        const getFunction = categoryId ? getProductsByCategory : getProducts
        setLoading(true)
        getFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false) 
            })
    }, [categoryId])
    
    useEffect(() => {
        setTimeout(() => {
            setTitle('segundo titulo')
        }, 2000)
    }, [])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => setDisplayGrid(true)}>grilla</button>
            <button onClick={() => setDisplayGrid(false)}>lista</button>
            { displayGrid ? <ItemGrid products={products}/> : <ItemListMemo products={products}/>}
        </div>
    )
}

export default ItemListContainer