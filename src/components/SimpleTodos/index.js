import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

// Write your code here

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodo extends Component {
  state = {todoList: initialTodosList, inputValue: ''}

  deleteTodoElement = id => {
    const {todoList} = this.state
    const filteredTodoList = todoList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todoList: filteredTodoList})
  }

  onChangeUserInput = event => {
    this.setState({inputValue: event.target.value})
  }

  editTodoItem = (newTitle, id) => {
    console.log(id)
    if (newTitle !== '') {
      const {todoList} = this.state
      const updatedTodoList = todoList.map(eachTodo => {
        if (eachTodo.id === id) {
          const newTodo = {
            id,
            title: newTitle,
          }
          return newTodo
        }
        return eachTodo
      })
      this.setState({todoList: updatedTodoList})
    }
  }

  addTodoItem = () => {
    const {todoList, inputValue} = this.state
    const newInputValue = inputValue.split(' ')
    const lastEle = parseInt(newInputValue.pop())
    if (!Number.isNaN(lastEle)) {
      let i = 1
      while (i <= lastEle) {
        const newTodo = {
          id: i + todoList.length,
          title: newInputValue.join(''),
        }
        this.setState(prevState => ({
          todoList: [...prevState.todoList, newTodo],
          inputValue: '',
        }))
        i += 1
      }
    } else {
      const newTodo = {
        id: todoList.length + 1,
        title: inputValue,
      }
      this.setState(prevState => ({
        todoList: [...prevState.todoList, newTodo],
        inputValue: '',
      }))
    }
  }

  render() {
    const {todoList, inputValue} = this.state
    console.log(todoList)
    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="title">Simple Todos</h1>
          <div className="addTodoSection">
            <input
              type="text"
              placeholder="add a todo"
              onChange={this.onChangeUserInput}
              value={inputValue}
            />
            <button type="button" className="addBtn" onClick={this.addTodoItem}>
              Add
            </button>
          </div>
          <ul>
            {todoList.map(eachTodo => (
              <TodoItem
                todoItem={eachTodo}
                key={eachTodo.id}
                deleteFunc={this.deleteTodoElement}
                editTodoItem={this.editTodoItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodo
