const ItemGrid = ({ products }) => {
    return (
        <div style={{ display: 'flex'}}>
            {
                products.map(prod => {
                    return <h1 key={prod.id}>{prod.name}</h1>
                })
            }
        </div>
    )
}

export default ItemGrid