import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <div>
            <h1>Ecommerce</h1>
            <div>
                <Link to={'/category/celular'}>Celulares</Link>
                <Link to={'/category/tablet'}>Tablets</Link>
                <Link to={'/category/notebook'}>Notebooks</Link>
            </div>
            <CartWidget />
        </div>
    )
}

export default Navbar