import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


export class TaskWidget extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const today = this.props.tasks.filter(t => t.list === 'today');

    const backlog = this.props.tasks.filter(t => t.list === 'backlog');

    const divStyle = {
      width: '100%',
      maxWidth: '100%',
    };

    return (
      <div className="container" style={divStyle} >
        <div className="row">
          <div className="col-6">
            <TaskList text="Hoje" tasks={today} />
          </div>
          <div className="col-6">
            <TaskList text="Backlog" tasks={backlog} />
          </div>
        </div>
      </div>
        );
  }
}

export class TaskList extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    let tasks = [];
    this.props.tasks.forEach(t => {
      tasks.push(<Task key={t.id} task={t} />);
    });

    return (
      <Paper>
        <FloatingActionButton className="rightButton" >
          <ContentAdd />
        </FloatingActionButton>
        <Subheader> {this.props.text} </Subheader>
        <List> {tasks} </List>
      </Paper>
        );
  }
}

export class Task extends Component {
  render() {
    let check = (<Checkbox checked={this.props.task.done} />);
    return (<ListItem primaryText={this.props.task.text} leftCheckbox={check} />);
  }
}
