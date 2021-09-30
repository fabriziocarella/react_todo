import React, { Component } from "react";
import './Main.css'
import List from '../List'
import preload_info from '../../preload_info'
import { v4 as uuidv4 } from 'uuid';

class Main extends Component {
  constructor(props) {
    super(props)
    this.input_task = React.createRef() // Creamos referencia para input_task y recoger su valor
    this.state = {
      'preset_tasks': preload_info
    }
  }
  // Añade una tarea
  addTask = (event) => {
    event.preventDefault();
    let title = this.input_task.current.value
    if (title) {
      const taskToAdd = {
        title,
        id: uuidv4()
      }

      this.setState({ preset_tasks: [...this.state.preset_tasks, taskToAdd] })
      this.input_task.current.value = ""
    }
  }
  // Elimina todas las tareas exceptuando el preset
  resetTasks = () => {
    this.setState({ 'preset_tasks': preload_info })
  }
  // Eliminar todas las tareas (Incluido el preset)
  removeAllTasks = () => {
    this.setState({ 'preset_tasks': [] })
  }
  // Elimina la tarea específica
  removeTask = (i) => {
    console.log("hfzxhfsxsgxfg");
    const remainTask = this.state.preset_tasks.filter((task, j) => j !== i);
    this.setState({ preset_tasks: remainTask })
  }

  handleChange = (event) => {
    console.log(event.target.value)
  }
  render() {
    return <main className="Main">
      <div className="Form">
        <form onSubmit={this.addTask}>
          <label className="input_task">Task: <input type="text" placeholder="New task here!" name="input_task" ref={this.input_task} onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Add task" />
        </form>
      </div>
      <List title_task={this.state.preset_tasks} remove={this.removeTask} />
      <div className="Buttons">
        <button onClick={this.resetTasks}>Reset All Tasks</button>
        <button onClick={this.removeAllTasks}>Remove All Tasks</button>
      </div>
    </main>
  }
  // 
}
export default Main;