import React from "react";
import Task from "./Task";


const Tasks = ({tasks})=>{
    return (
        <>
            {tasks.map((Task => 
                <Task task={Task}/>
            ))}
        </>
    );
};
export default Tasks;