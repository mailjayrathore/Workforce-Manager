import React from 'react'
import TaskCard from "./TaskCard"

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            {data.tasks.map((task, idx) => (
    <TaskCard
        key={idx}
        task={task}
        employee={data}
    />
))}
        </div>
    )
}

export default TaskList