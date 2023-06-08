import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemListOtro from "../ItemList/ItemList"

import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        document.title = categoryId ? `Categoria: ${categoryId}` : 'Todos los productos'

        return () => document.title = 'Mi Ecommerce'
    }, [categoryId])

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            }) 
        // if(categoryId) {
        //     getProductsByCategory(categoryId).then(response => {
        //         setProducts(response)
        //     }) 
        // } else {
        //     getProducts().then(response => {
        //         setProducts(response)
        //     }) 
        // }

    }, [categoryId])

    // const arrayComponents = products.map(prod => {
    //     return (
    //         <div key={prod.id}>
    //             <img src={prod.img} />
    //             <h3>{prod.name}</h3>
    //             <p>category: {prod.category}</p>
    //             <h3>price: ${prod.price}</h3>
    //         </div>
    //     )
    // })

    // console.log(arrayComponents)
    
    return (
        <div onClick={() => console.log('itemlistcontainer')}>
            <h1>{greeting}</h1>
            <ItemListOtro products={products}/>
        </div>
    )
}

export default ItemListContainer