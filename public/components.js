import React, { Component, PropTypes } from 'react';

export class TaskList extends Component {

  taskList() { 
    return [ 
    { done: false , text: "task 1", list: "today"},
    { done: false , text: "task 2", list: "backlog"} 
  ] };

  constructor(props){
    super(props);
  }


  render() {
    var tasks = [];
    this.taskList().forEach(t => {
      tasks.push(<Task task={t} />);
    });

    return  (<ul> {tasks} </ul>);
  }
}

export class Task extends Component {
  render() {
    return (<li>{this.props.task.text}</li>)
  }

}
