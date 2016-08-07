import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';

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

    var divStyle = {
      width: '100%'
    }

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
        <Paper> 
        <Subheader> {this.props.text} </Subheader>
        <List> {tasks} </List>
        </Paper>
        );
  }
}

export class Task extends Component {
  render() {
    return (<ListItem primaryText={this.props.task.text} leftCheckbox={<Checkbox />} />)
  }

}
