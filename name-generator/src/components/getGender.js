import React, { useState } from 'react';
import Axios from 'axios';

function GetGender() {

const [gender, setGender] = useState(() => {
  const initialGender = JSON.parse(localStorage.getItem("gender"));
  return initialGender || "";
})
const [name, setName] = useState(() => {
  const initialName = JSON.parse(localStorage.getItem("name"));
  return initialName || "";
})

const [bgColor, setBgColor] = useState("#37BC9B")

const getGender = () => {
  if (name !== "") {
  setName(JSON.parse(localStorage.getItem("name")))
    Axios.get("https://api.genderize.io?name=" + name)
    .then((response) => {
      setGender(response.data.gender);
      localStorage.setItem("gender", JSON.stringify(response.data.gender))
 
      // {gender === "male" ? setBgColor("#FF0000") : 
      //   (gender === "female") ? setBgColor("00FF00") : bgColor}
    }
      )
    .catch((error) => console.log(error))
  }
  else if (name === "") {
    setGender("")
    localStorage.setItem("gender", JSON.stringify(""))
  }
}

  return (
    // <div style={{backgroundColor: "#00FF00"}}>
      <div >
      <h1>Unesi ime:</h1>
        <form>
            <input 
                type="text"
                value={name}                     
                onChange={(event, value) => {
                  setName(event.target.value);
                  localStorage.setItem("name", JSON.stringify(event.target.value));
                }}/>
                
              
        </form>
        <button type="submit" onClick={getGender}>Gender</button>
        <span>{(name !== "") ? gender : ""}</span>

    </div>
  )
}

export default GetGender;