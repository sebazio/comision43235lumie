const Item = ({ img, name, category, price }) => {
    return (
        <div>
            <img src={img} />
            <h3>{name}</h3>
            <p>category: {category}</p>
            <h3>price: ${price}</h3>
        </div>
    )
}

export default Item