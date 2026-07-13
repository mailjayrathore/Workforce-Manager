import React from "react";

const Card=(props) =>{
  console.log(props.user,props.age);

  return(
    <div className="card">
      <h1>Sarthak Sharma</h1>
      <p>LOerm is my favourite name</p>
      <button>View Profile</button>
    </div>
  )
}