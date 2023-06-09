import { Link } from "react-router-dom"

const Item = ({ id, name, img, price }) => {
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt={name} style={{ width: 100}} />
            <p>${price}</p>
            <Link to={`/item/${id}`}>ver detalle</Link>
        </div>
    )
}

export default Item