import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

import Sidebar from "../common/Sidebar";
import AdminHero from "../common/AdminHero";
import RecentActivity from "../common/RecentActivity";

const AdminDashboard = (props) => {
  return (
    <div className="flex bg-[#111827] text-white min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">

        {/* Header */}
        <Header
          changeUser={props.changeUser}
          data={{ firstName: "Admin" }}
        />

        {/* Hero Banner */}
        <AdminHero />

        {/* Recent Activity */}
        <RecentActivity />

        {/* Create Task */}
        <CreateTask />

        {/* Employee List */}
        <AllTask />

      </div>

    </div>
  )
}

export default AdminDashboard;