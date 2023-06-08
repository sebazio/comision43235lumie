import { useEffect } from 'react'
import './Button.css'

const Button = () => {

    // useEffect(() => {
    //     console.log(window)
    //     const button = document.getElementById('mi-boton')
    //     console.log(button)

    //     const handleClick = () => console.log('hice click') 

    //     button.addEventListener('click', handleClick)

    //     return () => button.removeEventListener('click', handleClick)
    // }, [])

    return (
        <button id='mi-boton' onClick={(e) => console.log(e)}>BOTON</button>
    )
}

export default Button