
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {

  return (
    <>
      <h1 className='text-6xl text-center text-white'> Learn Redux toolkit in React</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
