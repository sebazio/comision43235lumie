import { useCount } from "../hooks/useCount"

const Count = () => {
    const { count: valorDelContador, increment } = useCount()

    return (
        <div>
            <h1>{valorDelContador}</h1>
            {/* <button onClick={decrement}>Decrementar</button> */}
            <button onClick={increment}>Incrementar</button>
            {/* <button onClick={reset}>Resetear</button> */}
        </div>
    )
}

export default Count