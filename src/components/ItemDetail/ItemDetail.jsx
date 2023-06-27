import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

import { useCart } from "../../context/CartContext"
import { useNotification } from "../../notification/NotificationService"

const ItemDetail = ({ id, name, img, price, category, description, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useCart()
    const { setNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        console.log(quantity)
        setQuantity(quantity)

        const objProduct = {
            id, name, price, quantity
        }

        addItem(objProduct)
        setNotification('error', `Se agrego correctamente ${quantity} ${name} al carrito`, 5)
    }

    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt={name} style={{ width: 100}} />
            <p>category: {category}</p>
            <p>${price}</p>
            <p>Description: {description}</p>
            {
                quantity == 0 
                    ? ( stock > 0 ? <ItemCount stock={stock} onAdd={handleOnAdd}/> : <p>No hay stock del producto</p>)
                    : <Link to='/cart'>finalizar compra</Link>
            }
        </div>
    )
}

export default ItemDetail