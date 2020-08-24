import React, {useState} from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

const App = props => {
  const [userNameState, userNameSetter] = useState({
    userName : "Darcy Xie"
  })

  const setUserName = event => {
    userNameSetter({
      userName : event.target.value
    })
  }

  return (
    <div>
      <UserInput changeOutputUsername={setUserName}/>
      <UserOutput userName={userNameState.userName}/>
    </div>
  );
}

export default App;
