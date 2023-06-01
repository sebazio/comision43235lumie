import { useAsync } from "../hooks/useAsync"
import { getProductById } from "../asyncMock"


const ItemDetailContainer = () => {
    const { data: product, error, loading } = useAsync(() => getProductById('1'), [])
    
    if(loading) {
        return <h1>Cargando detalle del producto...</h1>
    }

    return (
        <div>
            {product?.name}
        </div>
    )
}

export default ItemDetailContainer