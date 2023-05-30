import { useEffect, useState} from "react"

const ItemList = ({ products }) => {
    return (
        <div>
            {
                products.map(prod => (
                    <div key={prod.id}>
                        <h3>{prod.title}</h3>
                        <img src={prod.thumbnail} />
                        <p>$ {prod.price}</p>
                    </div>
                ))
            }
        </div>
    )
}

const MercadoLibre = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('notebook')

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
            .then(response => {
                return response.json()
            })
            .then(res => {
                setProducts(res.results)
            })
    }, [input])

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(res => {
    //             setProducts(res.results)
    //         })
    // }

    return (
        <div>
            <h1>Mercado Libre</h1>
            {/* <form onSubmit={handleSubmit}> */}
                <input value={input} onChange={(e) => setInput(e.target.value)}/>
                {/* <button>Search</button> */}
            {/* </form> */}
            <ItemList products={products}/>
        </div>
    )
}

export default MercadoLibre