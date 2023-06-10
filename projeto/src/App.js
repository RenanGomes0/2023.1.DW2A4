import React, { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks';


const App =()=> {
  const[tasks,setTasks]= useState([
    {
      id: '1',
      title: 'estudar',
      completed: false,
    },
    {
      id: '2',
      title: 'comer',
      completed: false,
    },
  ]);
 
  return (
  <> 
    <div className='container'>
      <Tasks tasks={tasks}/>
    </div>
  </>

  );
};
  export default App;