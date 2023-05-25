import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        }) 
    }, [])

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
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer