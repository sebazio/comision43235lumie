import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const  Cart = () => {
    const { cart, total } = useCart()

    return (
        <>
            <h1>Cart</h1>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id}>
                            <h1>{prod.name}</h1>
                            <h3>${prod.price}</h3>
                            <h3>cantidad: {prod.quantity}</h3>
                            <h3>subtotal: {prod.quantity * prod.price}</h3>
                        </div>
                    )
                })
            }
            <h1>Total de la compra: ${total}</h1>

            <Link to='/checkout'>Checkout</Link>
        </>

    )
}

export default Cart