import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Input(props){

    const handleChange = (event) => {

    props.onWorkChange(event.target.value);

    }

    const handleDateChange = (event) => {

    const dateValue = event.target.value;
    const UpdatedDate = dateValue.split("-").reverse().join("-");
    props.onWhenChange(UpdatedDate);
    
    }

    return (
    <div>

    <div className = "container mt-5">
    <div className = "d-flex justify-content-center align-items-center">
    
    <div className = "row" style = {{gap : "5"}}>

        <div className = "col-md-5">
        <input type = "text" className = "form-control" placeholder = "Enter To-Do" id = "ToDo"
        style = {{outline : "none" , boxShadow : "none" , borderColor : "black" , marginBottom : "5px"}} onChange = {handleChange}/>
        </div>

        <div className = "col-md-4">
        <input type = "date" className = "form-control" id = "ToDoDate"
        style = {{width : "100%" , outline : "none" , boxShadow : "none" , borderColor : "black"}} onChange = {handleDateChange}/>
        </div>

        <div className = "col-md-3">
        <button className = "custom-add btn btn-success w-40" onClick = {props.handleOnClick}>Add</button>
        </div>

        {props.items.length === 0 ? (

        <h3 className = "error">There is nothing to do !!</h3>

        ) : (

        <div className = "row mt-4">

        <div>{props.items.map(item =>
        <div className = "row align-items-center mt-2" key = {item.item}>
        <div className = "col-sm-5 text-center" style = {{marginBottom : "20px"}}>{item.item}</div>
        <div className = "col-sm-4 text-center" style = {{marginBottom : "20px"}}>{item.date}</div>
        <div className = "delete col-md-3">
        <button type = "button" className = "custom-align btn btn-danger col-sm-5 text-center" onClick  = {() => props.handleOnDelete(item.item)}>Delete</button>

        </div>
        </div>)}
        </div>

        </div>
        
        )}

    </div>
    </div>
    </div>

    </div>
    
);
}
  
export default Input;