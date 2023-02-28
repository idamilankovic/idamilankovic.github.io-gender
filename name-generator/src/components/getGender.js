import React, { useState } from 'react';
import Axios from 'axios';
import Char from './char';

function GetGender() {

const [gender, setGender] = useState(() => {
  const initialGender = JSON.parse(localStorage.getItem("gender"));
  return initialGender || "";
})

const [name, setName] = useState(() => {
  const initialName = JSON.parse(localStorage.getItem("name"));
  return initialName || "";
})

const [maleProbability, setMaleProbability] = useState(() => {
  const initialProbability = JSON.parse(localStorage.getItem("male_probability"));
  return initialProbability || "";
})

const [femaleProbability, setFemaleProbability] = useState(() => {
  const initialProbability = JSON.parse(localStorage.getItem("female_probability"));
  return initialProbability || "";
})

const localMemoryListNames = JSON.parse(localStorage.getItem("list_names"))
const [listNames, setListNames] = useState(
  localMemoryListNames !== null ? localMemoryListNames : []);

const handleReset = () => {
  setName("")
  setGender("")
  localStorage.setItem("gender", JSON.stringify(""))
  setFemaleProbability("")
  localStorage.setItem("female_probability", JSON.stringify(""))
  setMaleProbability("")
  localStorage.setItem("male_probability", JSON.stringify(""))
  setListNames([])
  localStorage.setItem("list_names", JSON.stringify(""))
}

const getGender = () => {
  if (name !== "") {
  setName(JSON.parse(localStorage.getItem("name")))
    Axios.get("https://api.genderize.io?name=" + name)
    .then((response) => {
      if (response.data.gender === "female") {
        setGender(response.data.gender);
        localStorage.setItem("gender", JSON.stringify(response.data.gender))
        setFemaleProbability(response.data.probability)
        localStorage.setItem("female_probability", JSON.stringify(response.data.probability))
        setListNames([...listNames, {
          name: name,
          female_probability: JSON.parse(localStorage.getItem("female_probability")),
          //male_probability: (1 - JSON.parse(localStorage.getItem("female_probability"))),
        }])
        localStorage.setItem("list_names", JSON.stringify(listNames))
      }
      else if (response.data.gender === "male") {
        setGender(response.data.gender);
        localStorage.setItem("gender", JSON.stringify(response.data.gender))
        setMaleProbability(response.data.probability)
        localStorage.setItem("male_probability", JSON.stringify(response.data.probability))
        setListNames([...listNames, {
          name: name,
          male_probability: JSON.parse(localStorage.getItem("male_probability")),
          //female_probability: (1 - JSON.parse(localStorage.getItem("male_probability")))
        }])
        localStorage.setItem("list_names", JSON.stringify(listNames))
      }
    }
  )
    .catch((error) => console.log(error))
  }
}
console.log(listNames)

  return (
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
        <button type="submit" onClick={
          getGender
         
          }>Get gender</button>
        <button onClick={handleReset}>Reset</button>
        <div>{(name !== "") ? gender : ""}</div>
        <Char list={listNames} name={name} gender={gender} female={femaleProbability} male={maleProbability}/>
    </div>
  )
}

export default GetGender;