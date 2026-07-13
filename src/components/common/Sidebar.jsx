import React from "react";

const Sidebar = ({ user }) => {
  return (
    <div className="w-60 h-screen bg-[#181818] border-r border-gray-700 p-6">

      <h1 className="text-2xl font-bold text-white mb-10">
        EMS
      </h1>

      <ul className="space-y-5">

        <li className="cursor-pointer text-gray-300 hover:text-white">
          Dashboard
        </li>

        <li className="cursor-pointer text-gray-300 hover:text-white">
          My Tasks
        </li>

        <li className="cursor-pointer text-gray-300 hover:text-white">
          Notifications
        </li>

        <li className="cursor-pointer text-red-400 hover:text-red-500">
          Logout
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;