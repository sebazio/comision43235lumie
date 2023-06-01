import { useCount } from "../hooks/useCount"

const DecrementCount = () => {
    const { count, decrement } = useCount()

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrementar</button>
        </div>
    )
}

export default DecrementCount