import { useState } from 'react'

export const useCount = () => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const reset = () => {
        setCount(0)
    }

    return {
        count,
        decrement,
        increment,
        reset
    }
}