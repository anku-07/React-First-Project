import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,getCounter] =useState(0)
// let counter = 15;

const add = () => {
  /*
  counter = counter + 1;
  console.log("Add button clicked",counter);
  */
 if(counter == 20){
  alert(`You add maximum 20 your value is ${counter}`);
 }else{
   getCounter(counter + 1);
 }
}

const remove = () => {
  /*
  counter = counter + 1;
  console.log("Add button clicked",counter);
  */
 if(counter <= 0){
  alert(`Your value is ${counter}`);
 }else{
   getCounter(counter - 1);
 }
}

  return (
    <>
    <h1>Hello I am Aditya</h1>
    <h3>Click Count : {counter}</h3>
    <button onClick={add}>Add</button>
    <br /> <br />
    <button onClick={remove}>Remove</button>
    </>
  )
}

export default App
