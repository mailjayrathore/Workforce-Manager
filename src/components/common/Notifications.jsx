import React from "react";

const Notifications = ({ tasks }) => {

    const latest = tasks.filter(task=>task.newTask);

    return(

<div className="bg-[#222] rounded-xl p-5">

<h2 className="text-xl font-semibold mb-4">

Notifications

</h2>

{
latest.length===0?

<p>No new notifications</p>

:

latest.map((task,index)=>

<div key={index} className="border-b border-gray-700 py-2">

<p>

New Task Assigned :

<b> {task.taskTitle}</b>

</p>

</div>

)

}

</div>

)

}

export default Notifications;