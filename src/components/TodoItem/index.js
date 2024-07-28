// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteFunc} = props
  const {title, id} = todoItem
  const deleteTodo = () => {
    deleteFunc(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  )
}
export default TodoItem
