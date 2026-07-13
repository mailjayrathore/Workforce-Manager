import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const [userData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      setUser(loggedInUser.role);

      if (loggedInUser.role === "employee" && userData) {
        const currentEmployee = userData.find(
          emp => emp.email === loggedInUser.data.email
        );

        setLoggedInUserData(currentEmployee);
      }
    }
  }, [userData]);



  const handleLogin = (email, password) => {

    console.log("userData:", userData);

   if (email === "admin@example.com" && password === "123") {

      setUser("admin");

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      );

    } else if (userData) {

     console.log("Email entered:", email);
console.log("Password entered:", password);
console.log("Employees:", userData);

const employee = userData.find(
  emp => emp.email === email && emp.password === password
);

console.log("Found employee:", employee);

      if (employee) {

        setUser("employee");

        setLoggedInUserData(employee);

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            role: "employee",
            data: employee
          })
        );

      } else {

        alert("Invalid Credentials");

      }
    }
  };



  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && (
        <AdminDashboard changeUser={setUser} />
      )}

      {user === "employee" && loggedInUserData && (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
        />
      )}
    </>
  );
};

export default App;