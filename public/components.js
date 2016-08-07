import React, { Component, PropTypes } from 'react';

export class TaskWidget extends Component {

  constructor(props){
    super(props);
  }


  render() {

    var today = this.props.tasks.filter(t => {
      return t.list === 'today';
    })

    var backlog  = this.props.tasks.filter(t => {
      return t.list === 'backlog';
    })

    return (
        <div>
        <TaskList text="Hoje" tasks={today} />
        <TaskList text="Backlog" tasks={backlog} />
        </div>
    )
  }
}

export class TaskList extends Component {

  constructor(props){
    super(props);
  }


  render() {
    var tasks = [];
    this.props.tasks.forEach(t => {
      tasks.push(<Task key={t.id} task={t} />);
    });

    return  (
        <div> 
          {this.props.text} 
          <ul> {tasks} </ul>
        </div>
        );
  }
}

export class Task extends Component {
  render() {
    return (<li>{this.props.task.text}</li>)
  }

}
