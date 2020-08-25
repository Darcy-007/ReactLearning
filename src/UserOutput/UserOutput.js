import React from "react";

const UserOutput = (props) => {
  return (
    <div>
      <p>This is exciting.</p>
      <p>{props.userName} : {props.text}</p>
    </div>
  );
};

export default UserOutput;
