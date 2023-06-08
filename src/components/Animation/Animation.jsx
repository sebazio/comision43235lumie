import { useEffect, useRef, useState } from "react"

const Animation = () => {
    const [background, setBackgorund] = useState('pink')
    const [display, setDisplay] = useState('none')

    const divRef = useRef()

    useEffect(() => {
        const handleScroll = () => {
            const div = divRef.current

            const { y } = div.getBoundingClientRect()

            const backgroundColor = y <= 0 ? 'orange' : 'pink'

            setBackgorund(backgroundColor)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <div style={{ marginTop: 100, height: '190vh'}}>
            <div ref={divRef} style={{ background: background, height: '180vh'}}>
                <h1>Scrollear para cambiar el color de fondo</h1>
            </div>
        </div>
    )
}

export default Animation