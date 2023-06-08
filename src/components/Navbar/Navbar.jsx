import styles from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'

import { NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()

    return (
        <header className={styles.header}>
            <h1 className={styles.titulo} onClick={() => navigate('/')}>Ecommerce</h1>
            <div>
                <NavLink to={'/category/celular'} className={({ isActive }) => isActive ? styles.active : styles.inactive }>Celulares</NavLink>
                <NavLink to={'/category/tablet'} className={({ isActive }) => isActive ? styles.active : styles.inactive }>Tablets</NavLink>
                <NavLink to={'/category/notebook'} className={({ isActive }) => isActive ? styles.active : styles.inactive }>Notebooks</NavLink>
            </div>
            <CartWidget />
        </header>
    )
}

export default Navbar
