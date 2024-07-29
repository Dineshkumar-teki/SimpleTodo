// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    editTodo: false,
    todoChecked: false,
    updatedTodo: '',
  }

  deleteTodo = () => {
    const {todoItem, deleteFunc} = this.props
    const {id} = todoItem
    deleteFunc(id)
  }

  alterEditBtn = () => {
    this.setState(prevState => ({editTodo: !prevState.editTodo}))
  }

  onTodoStatus = event => {
    this.setState({todoChecked: event.target.checked})
  }

  updateTodoTitle = event => {
    this.setState({updatedTodo: event.target.value})
  }

  onClickSaveBtn = () => {
    const {updatedTodo} = this.state
    const {editTodoItem, todoItem} = this.props
    const {id} = todoItem
    editTodoItem(updatedTodo, id)
    this.alterEditBtn()
  }

  render() {
    const {editTodo, todoChecked} = this.state
    const {todoItem} = this.props
    const {title} = todoItem
    return (
      <li>
        {editTodo ? (
          <div className="editTodoItem">
            <input
              defaultValue={title}
              type="text"
              onChange={this.updateTodoTitle}
            />
            <button type="button" onClick={this.onClickSaveBtn}>
              Save
            </button>
          </div>
        ) : (
          <>
            <div className="eachTodo">
              <input type="checkbox" onChange={this.onTodoStatus} />
              <p className={todoChecked ? 'checked' : null}>{title}</p>
            </div>
            <div className="btnContainer">
              <button type="button" onClick={this.deleteTodo}>
                Delete
              </button>
              <button type="button" onClick={this.alterEditBtn}>
                Edit
              </button>
            </div>
          </>
        )}
      </li>
    )
  }
}
export default TodoItem
