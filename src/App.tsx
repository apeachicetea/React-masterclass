import React, { useState } from "react";
import styled from "styled-components";


function App() {
  const [value, setValue] = useState("");

  function onChange (event: React.FormEvent<HTMLInputElement>){
    // console.log(event);
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.value);
    const {
      currentTarget: { value }
    } = event;
    setValue(event.currentTarget.value);
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="username" 
          value={value} 
          onChange={onChange}
        />
        <button>Log In</button>
      </form>
    </div>
  );
}

export default App;
