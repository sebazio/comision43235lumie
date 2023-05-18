// const Button = ({ label, color, callback }) => {
//   return (
//     <button style={{ color: color}} onClick={callback}>{label}</button>
//   )
// }

// //Componente Padre
// const ParentComponent = ({ text, color, callback }) => {
//   // const { text, num } = props
//   return (
//     <div>
//       <h1>{text}</h1>
//       <Button label={"Mi boton"} color={color} callback={callback}/>
//     </div>
//   )
// }


// //Componente Principal
// function App() {
//   return (
//     <>
//       <ParentComponent text="Un titulo" color="blue" callback={() => console.log('primer boton')}/>
//       <ParentComponent text="Otro titulo" color="red" callback={() => console.log('segundo boton')}/>
//     </>
//   )
// }

// export default App

import { useState } from "react"

const Counter = ({ initial }) => {
  let [count, setCount] = useState(initial)

  const decrement = () => {
    setCount((count) => count - 1)
  }

  const increment = () => {
    setCount((count) => count + 1)
  }

  const reset = () => {
    setCount(0)
  }


  return(
    <div>
        <h1>Contador</h1>
        <h2>{count}</h2>
        <button onClick={decrement}>decrementar</button>
        <button onClick={increment}>incrementar</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

const App = () => {
  return (
    <>
      <Counter initial={10}/>
      <Counter initial={0}/>
      <Counter initial={22}/>
    </>
  )
}


export default App