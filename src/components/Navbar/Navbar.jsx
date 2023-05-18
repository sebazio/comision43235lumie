import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <header>
            <h1 className={styles.titulo}>Ecommerce</h1>
            <section>
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Notebooks</button>
            </section>
        </header>
    )
}

export default Navbar