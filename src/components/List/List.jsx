import React, { Component } from "react";
import './List.css'
import Card from '../Card'
import { v4 as uuidv4 } from 'uuid';



class List extends Component {
  constructor(props) {
    super(props)
  }
  // Creamos la función para crear en el DOM las tareas precargadas
  paintTask = () => {
    const tasks = this.props.title_task
    const removeTask = this.props.remove
    return tasks.map((task, i) => <Card info={task} key={uuidv4()} remove={() => removeTask(i)} />)
  }
  render() {
    return <>
      <section className="List">
        {this.paintTask()}
      </section>
    </>
  }
}

export default List;
