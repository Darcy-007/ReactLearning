import React, { useState } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

const App = (props) => {
  const [userNameState, userNameSetter] = useState({
    userName: "Darcy Xie",
  });

  const [textState, textSetter] = useState({
    text: "Yes, it is!",
  });
  const setUserName = (event) => {
    userNameSetter({
      userName: event.target.value,
    });
  };

  const setText = (event) => {
    textSetter({
      text: event.target.value,
    });
  };

  const deleteText = (index) => {
    let oldText = [...textState.text]
    oldText.splice(index, 1)
    console.info(oldText.join(''))
    textSetter({
      text:oldText.join('')
    })
  }

  let chars = (
    <div>
      {[...textState.text].map((c, index) => {
        return <CharComponent char={textState.text.charAt(index)} click={() => deleteText(index)}/>;
      })}
    </div>
  );

  return (
    <div>
      <UserInput
        userName={userNameState.userName}
        text={textState.text}
        changeOutputUsername={setUserName}
        changeOutputText={setText}
      />
      {chars}
      <UserOutput userName={userNameState.userName} text={textState.text} />
      <ValidationComponent size={textState.text.length} />
    </div>
  );
};

export default App;
