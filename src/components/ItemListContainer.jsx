import { getProducts } from "../asyncMock"
import { useAsync } from "../hooks/useAsync"

const ItemListContainer = ({ greeting }) => {

    const { data: products, error, loading } = useAsync(() => getProducts(), [])

    if(loading) {
        return <h1>Cargando Productos...</h1>
    }

    return (
        <div>
            <h1>{greeting}</h1>
            {
                products?.map(prod => <h1 key={prod.id}>{prod.name}</h1>)
            }
        </div>
    )
}

export default ItemListContainer