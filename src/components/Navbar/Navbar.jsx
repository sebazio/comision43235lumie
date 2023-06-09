import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <h1>Ecommerce</h1>
            <div>
                <Link to={'/category/celular'}>Celulares</Link>
                <Link to={'/category/tablet'}>Tablets</Link>
                <Link to={'/category/notebook'}>Notebooks</Link>
            </div>
        </div>
    )
}

export default Navbar