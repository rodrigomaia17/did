import React,  { Component }   from 'react';
import ReactDOM from 'react-dom';
import { TaskWidget }  from 'components'

var taskList =  [ 
    { id:1, done: false , text: "task 1", list: "today"},
    { id:2, done: false , text: "task 2", list: "backlog"} 
  ];

ReactDOM.render(
  <TaskWidget  tasks={taskList} />,
  document.getElementById('content')
);
