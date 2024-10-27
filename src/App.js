import React from "react";
import "./App.css";
import Greet from "./Components/Greeting";
import Welcome from "./Components/Welcome";

// 1. App.js
const App = () => {
  return (
    <div className="App">
      <h1>
        <Welcome />
      </h1>
      <Greet />
      <Greet />
      <Greet />
    </div>
  );
};

export default App;

//props -> property
// const person = [
//name : "faith",
//age: 18,                     //person.name
//person.age
//school: "Moringa"
//]

// installation of react
//file structure of react app

// they are typically used to render JSX elements.(

// JSX mostlu uses the ES6 syntax fordeclaring function based components.

// const Greet = () => <h1>Hello, Mwangi<h1/>                // basically leveraging on the full power of Arrow functions.

// they can also return null or undefined.
// function based components can also be used to handle props which is a short form for ( property ).
// props are immutable and are passed from parent to child components.
// props are used to pass data from parent to child components.
//  NB => props are immutable and cannot be changed once they are passed to a component.

//           class based components
// class based components are defined using the *class* keyword.
// class based components are typically used when we need to handle state and lifecycle methods.

// ES6 syntaxs-->2015
