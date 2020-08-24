import React from "react";

const UserOutput = (props) => {
  return (
    <div>
      <p>This is exciting.</p>
      <p>{props.userName} : Yes it is.</p>
    </div>
  );
};

export default UserOutput;
