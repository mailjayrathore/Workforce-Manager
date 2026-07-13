import React from "react";

const PriorityTasks = ({ tasks }) => {

const highPriority=tasks.filter(task=>task.newTask);

return(

<div className="bg-[#222] rounded-xl p-5">

<h2 className="text-xl font-semibold mb-5">

Priority Tasks

</h2>

{

highPriority.map((task,index)=>

<div
key={index}
className="flex justify-between py-2 border-b border-gray-700"
>

<span>{task.taskTitle}</span>

<span className="text-red-400">

High

</span>

</div>

)

}

</div>

)

}

export default PriorityTasks;