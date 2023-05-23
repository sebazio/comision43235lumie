// import Button from "./components/Button/Button"

// const Layout = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       {props.children}
//     </div>
//   )
// }


// const App = () => {
//   return (
//     <>
//       <Layout title='Esto es un titulo'>
//         <p>Esto es un parrafo</p>
//         <p>Esto es otro parrafo</p>
//         <Button>Label del boton</Button>
//       </Layout>
//     </>
//   )
// }

// export default App

// import { useState, useRef } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0)
//   const [title, setTitle] = useState('Es un titulo')
  
//   const countRenderRef = useRef(0)
//   countRenderRef.current = countRenderRef.current + 1// countRenderRef.current++
//   console.log(countRenderRef)

//   return (
//     <>
//       <h1>{title}</h1>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(prev => prev + 1)}>contar</button>
//       <button onClick={() => setTitle('Otro titulo')}>Cambiar titulo</button>
//     </>
//   )
// }

// export default App
// import { useState, useRef } from 'react'

// const useCustomRef = (initialValue) => useState({ current: initialValue})[0]



// const App = () => {
//   const divRef = useCustomRef(null)
//   console.log(divRef)
//   const handleClick = () => {
//     console.log(divRef)
//     divRef.current.innerHTML = 'Nuevo contendio'
//   }

//   return (
//     <>
//       <div ref={divRef}>Contenido Origina</div>
//       <button onClick={handleClick}>Cambiar Contendio</button>
//     </>
//   )
// }

// export default App

import { useState, useEffect } from 'react'

const Count = () => {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState('Es un titulo')

  useEffect(() => {
    console.log('cambiar titulo del tab')
    document.title = 'Contador: ' + count

    return () => {
      console.log('limpieza')
      document.title = 'Vite + React'
    }
  }, [count])

  return (
    <>
      <h1>{title}</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>contar</button>
      <button onClick={() => setTitle('Otro titulo')}>Cambiar titulo</button>

    </>
  )
}

const App = () => {
  const [show, setShow] = useState(false)
  console.log(show)
  return (
    <>
      <h1>Este es el componente App</h1>
      <button onClick={() => setShow(prev => !prev)}>Mostrar Contador</button>
      {show ? <Count /> : null }
    </>
  )
}

export default App