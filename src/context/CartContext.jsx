import { useState, createContext, useContext } from 'react'

const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
        setCart(prev => {
            console.log(prev)
            return [...prev, productToAdd]
        })
        } else {
            console.error('Ya esta agregado')
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let total = 0

        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })

        return total
    }

    const total = getTotal()

    const clearCart = () => setCart([])

    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, total, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}