import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <p>Speaker: <input type="text" onChange={props.changeOutputUsername} value={props.userName}/></p> 
      <br></br>
      <p>Text: <input type="text" onChange={props.changeOutputText} value={props.text}/></p> 

    </div>
  );
};
export default UserInput;
