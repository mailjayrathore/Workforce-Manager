import React from "react";

const AdminHero = () => {
  return (
    <section className="relative h-[420px] overflow-hidden rounded-3xl mb-10">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&auto=format&fit=crop&q=80"
        alt="Office"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172add] to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-14">

        <div className="max-w-xl">

          <p className="uppercase tracking-[5px] text-blue-400 font-semibold">
            Employee Management System
          </p>

          <h1 className="text-6xl font-bold text-white mt-5 leading-tight">
            Welcome Back,
            <br />
            Admin 👋
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-8">
            Manage your employees, assign tasks, monitor progress,
            and keep your team productive from one centralized dashboard.
          </p>

          <div className="flex gap-4 mt-10">

            <button
              onClick={() =>
                document
                  .getElementById("create-task")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue-600 hover:bg-blue-700 transition px-7 py-3 rounded-xl font-semibold"
            >
              Assign Task
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("employee-list")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-gray-500 hover:bg-gray-800 transition px-7 py-3 rounded-xl font-semibold"
            >
              View Employees
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AdminHero;