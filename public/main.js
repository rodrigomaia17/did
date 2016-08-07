import React,  { Component }   from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { TaskWidget }  from 'components'
import injectTapEventPlugin from 'react-tap-event-plugin';

var taskList =  [ 
    { id:1, done: false , text: "task 1", list: "today"},
    { id:2, done: false , text: "task 2", list: "backlog"} 
  ];

const App = () => (
  <MuiThemeProvider>
    <div>
    <AppBar title="Do it!" showMenuIconButton={false}  />
    <TaskWidget  tasks={taskList} />,
    </div>
  </MuiThemeProvider>
);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
    <App />,
  document.getElementById('content')
);
