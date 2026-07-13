import Sidebar from "../common/Sidebar";
import Welcome from "../common/Welcome";
import Notifications from "../common/Notifications";
import PriorityTasks from "../common/Priority";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data, changeUser }) => {

return(

<div className="flex  bg-[#111827] text-white">

<Sidebar/>

<div className="flex-1 p-8">

<Header
changeUser={changeUser}
data={data}
/>

<Welcome
name={data.firstName}
/>

<TaskListNumbers
data={data}
/>

<div className="grid grid-cols-2 gap-5 my-8">

<Notifications
tasks={data.tasks}
/>

<PriorityTasks
tasks={data.tasks}
/>

</div>

<TaskList
data={data}
/>

</div>

</div>

)

}

export default EmployeeDashboard;