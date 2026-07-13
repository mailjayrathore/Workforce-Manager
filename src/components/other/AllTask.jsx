import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div
      id="employee-list"
      className="mt-8 bg-[#1E293B] border border-slate-700 rounded-2xl p-6 shadow-lg"
    >
      <h2 className="text-2xl font-semibold text-white mb-6">
        Employee Overview
      </h2>

      {/* Table Header */}
      <div className="sticky top-0 bg-[#334155] py-3 px-5 rounded-xl flex justify-between mb-3">
        <h2 className="w-1/5 text-gray-200 font-semibold">Employee</h2>
        <h2 className="w-1/5 text-center text-gray-200 font-semibold">
          New
        </h2>
        <h2 className="w-1/5 text-center text-gray-200 font-semibold">
          Active
        </h2>
        <h2 className="w-1/5 text-center text-gray-200 font-semibold">
          Completed
        </h2>
        <h2 className="w-1/5 text-center text-gray-200 font-semibold">
          Failed
        </h2>
      </div>

      {/* Employee Rows */}
      {userData.map((emp, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center py-4 px-5 mb-3 rounded-xl border border-slate-700 bg-[#0F172A] hover:bg-[#172554] transition duration-300"
        >
          <h2 className="w-1/5 font-medium text-white">
            {emp.firstName}
          </h2>

          <h3 className="w-1/5 text-center font-semibold text-blue-400">
            {emp.taskCounts.newTask}
          </h3>

          <h3 className="w-1/5 text-center font-semibold text-amber-400">
            {emp.taskCounts.active}
          </h3>

          <h3 className="w-1/5 text-center font-semibold text-emerald-400">
            {emp.taskCounts.completed}
          </h3>

          <h3 className="w-1/5 text-center font-semibold text-red-400">
            {emp.taskCounts.failed}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default AllTask;