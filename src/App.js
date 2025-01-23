import React, { useState , useEffect } from "react";
import Heading from "./Components/Heading";
import Input from "./Components/Input";
import './App.css';

function App() {

const [list , setList] = useState([]);
const [work , setWork] = useState("");
const [when , setWhen] = useState("");

useEffect(() => {     // yeh hook tab chalta hai jab humara app load hota hai
  
const savedWork = JSON.parse(localStorage.getItem("tasks")) || [];
setList(savedWork);

}, []);

const handleOnClick = () => {

const newItem = {item : work, date : when};

const updatedList = [...list , newItem];

localStorage.setItem("tasks" , JSON.stringify(updatedList));

setList(updatedList);

}

const handleOnDelete = (id) =>{

const updatedlist = list.filter(item => item.item !== id);
localStorage.setItem("tasks", JSON.stringify(updatedlist));

setList(updatedlist);

}

return (

<div>

<Heading/>
<Input items = {list} handleOnClick = {handleOnClick} handleOnDelete = {handleOnDelete}
onWorkChange = {(value) => setWork(value)} onWhenChange = {(value) => setWhen(value)}/>

</div>

);

}

export default App;





