import './Button.css'

const Button = ({ children, callbackFunction }) => {
    return (
        <button onClick={callbackFunction}>{children}</button>
    )
}

export default Button