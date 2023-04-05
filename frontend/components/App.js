import React from 'react'
import axios from 'axios';
import { debug } from 'webpack';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos : [],
      error : '',
      todoNameInput : ''
    }
  }

  onNameInputChange = (evt) => {
    const value = evt.target.value
    debugger
    }



  fetchAllTodos = () => {
    axios.get(URL)
    .then(res => {
      this.setState({...this.state, todos : res.data.data})
    })
    .catch(err => {
      this.setState({...this.state, error : err.response.data.message})
    })
  }

 

  componentDidMount() {
    this.fetchAllTodos()
  }

  render() {
    return (
      <div>
        <div id='error'>Error : {this.state.error}</div>
        <div id='todos'>
          <h2>Todos</h2>
          {
            this.state.todos.map(td => {
              return <div key={td.id}>{td.name}</div>
            })
          }
        </div>
        <form id='todoForm'>
          <input onChange={this.onNameInputChange} value={this.state.todoNameInput} type='text' placeholder='Type Your Todo' />
          <button>Submit</button>
          <button>Clear Completed</button>
        </form>
      </div>
    )
  }
}
