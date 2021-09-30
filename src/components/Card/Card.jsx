import React, { Component } from "react";
import './Card.css'


class Card extends Component {
  constructor(props) {
    super(props)
    // console.log(this.props.info.title);
    this.state = {
      task: this.props.info
    }
  }

  render() {
    const { title , id} = this.props.info
    return <article className="Card">
      <h3 className="titleTask" key={id}>{title}</h3>
      <button className="deleteTaskBtn" onClick={this.props.remove} >Delete Task!</button>
    </article>;
  }
}
// onClick={this.removeTask()}

export default Card;
