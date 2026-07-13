import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const TaskCard = ({ task, employee }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const saveData = (updatedEmployees, activityMessage = "") => {
    setUserData(updatedEmployees);

    if (activityMessage) {
    const activities =
      JSON.parse(localStorage.getItem("activities")) || [];

    activities.unshift({
      message: activityMessage,
      time: new Date().toLocaleString(),
    });

    if (activities.length > 10) {
      activities.pop();
    }

    localStorage.setItem(
      "activities",
      JSON.stringify(activities)
    );
  }

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

    const currentUser = JSON.parse(
      localStorage.getItem("loggedInUser")
    );

    if (currentUser) {
      currentUser.data = updatedEmployees.find(
        (emp) => emp.id === employee.id
      );

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(currentUser)
      );
    }
  };

  const updateTask = (status) => {
    const updatedEmployees = userData.map((emp) => {
      if (emp.id !== employee.id) return emp;

      const updatedTasks = emp.tasks.map((t) => {
        if (t.id !== task.id) return t;

        if (status === "accept") {
          return {
            ...t,
            active: true,
            newTask: false,
            completed: false,
            failed: false,
          };
        }

        if (status === "complete") {
          return {
            ...t,
            active: false,
            newTask: false,
            completed: true,
            failed: false,
          };
        }

        if (status === "failed") {
          return {
            ...t,
            active: false,
            newTask: false,
            completed: false,
            failed: true,
          };
        }

        return t;
      });

      return {
        ...emp,
        tasks: updatedTasks,
        taskCounts: {
          active: updatedTasks.filter((t) => t.active).length,
          newTask: updatedTasks.filter((t) => t.newTask).length,
          completed: updatedTasks.filter((t) => t.completed).length,
          failed: updatedTasks.filter((t) => t.failed).length,
        },
      };
    });

    let activity = "";

if (status === "accept") {
  activity = `${employee.firstName} accepted "${task.taskTitle}"`;
}

if (status === "complete") {
  activity = `${employee.firstName} completed "${task.taskTitle}"`;
}

if (status === "failed") {
  activity = `${employee.firstName} marked "${task.taskTitle}" as failed`;
}

saveData(updatedEmployees, activity);
  };

  const deleteTask = () => {
    const updatedEmployees = userData.map((emp) => {
      if (emp.id !== employee.id) return emp;

      const updatedTasks = emp.tasks.filter(
        (t) => t.id !== task.id
      );

      return {
        ...emp,
        tasks: updatedTasks,
        taskCounts: {
          active: updatedTasks.filter((t) => t.active).length,
          newTask: updatedTasks.filter((t) => t.newTask).length,
          completed: updatedTasks.filter((t) => t.completed).length,
          failed: updatedTasks.filter((t) => t.failed).length,
        },
      };
    });

   saveData(
  updatedEmployees,
  `${employee.firstName} deleted "${task.taskTitle}"`
);
  };

  const badgeColor = task.completed
    ? "bg-emerald-600"
    : task.failed
    ? "bg-red-600"
    : task.active
    ? "bg-blue-600"
    : "bg-yellow-500 text-black";

  return (
    <div className="min-w-[320px] bg-[#1b1b1b] border border-slate-700 rounded-2xl p-5 shadow-lg">

      <div className="flex justify-between items-center">
        <span className={`px-3 py-1 rounded-md text-sm font-medium ${badgeColor}`}>
          {task.category}
        </span>

        <span className="text-gray-400 text-sm">
          {task.taskDate}
        </span>
      </div>

      <h2 className="text-2xl font-semibold text-white mt-6">
        {task.taskTitle}
      </h2>

      <p className="text-gray-400 mt-3 text-sm leading-6">
        {task.taskDescription}
      </p>

      <div className="mt-5">
        {task.newTask && (
          <p className="text-yellow-400 font-semibold">
            Status : New Task
          </p>
        )}

        {task.active && (
          <p className="text-blue-400 font-semibold">
            Status : Accepted
          </p>
        )}

        {task.completed && (
          <p className="text-green-400 font-semibold">
            Status : Completed
          </p>
        )}

        {task.failed && (
          <p className="text-red-400 font-semibold">
            Status : Failed
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 mt-6">

        {!task.active &&
          !task.completed &&
          !task.failed && (
            <button
              onClick={() => updateTask("accept")}
              className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg"
            >
              Accept Task
            </button>
          )}

        {!task.completed && !task.failed && (
          <button
            onClick={() => updateTask("complete")}
            className="w-full bg-emerald-600 hover:bg-emerald-700 py-2 rounded-lg"
          >
            Mark Complete
          </button>
        )}

        {!task.failed && !task.completed && (
          <button
            onClick={() => updateTask("failed")}
            className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg"
          >
            Mark Failed
          </button>
        )}

      {(task.completed || task.failed) && (
  <button
    onClick={deleteTask}
    className="w-full bg-red-800 hover:bg-red-900 py-2 rounded-lg"
  >
    Delete Task
  </button>
)} 

      </div>
    </div>
  );
};

export default TaskCard;