import './Navbar.css'
import styles from './Navbar.module.css'
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"


const Navbar = () => {
    console.log(styles)
    return (
        <div>
            <h1 className={styles.title}>Ecommerce</h1>
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