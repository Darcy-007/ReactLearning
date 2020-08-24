import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <input type="text" onChange={props.changeOutputUsername}/>
    </div>
  );
};
export default UserInput;
