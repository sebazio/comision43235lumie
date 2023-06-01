import FormWithValidationHOC from "./components/FormWithValidationHOC"
import TaskFilterRenderProps from "./components/TaskFilterRenderProps"
import Count from "./components/Count"
import DecrementCount from './components/DecrementCount'
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"

const App = () => {

  return (
    <>
      <h1>WorkShop Hooks, Children y Patrones</h1>
      {/* <ItemListContainer />
      <ItemDetailContainer /> */}
      {/* <Count />
      <DecrementCount /> */}
      {/* <FormWithValidationHOC /> */}
      <TaskFilterRenderProps />
    </>
  )
}

export default App