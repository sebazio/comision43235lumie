import styles from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'

export const Navbar = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.titulo}>Ecommerce</h1>
            <ul>
                <li style={{ fontSize: 20 }}>Celulares</li>
                <li>Tablets</li>
                <li>Notebooks</li>
            </ul>
            <CartWidget />
        </header>
    )
}

export default Navbar
