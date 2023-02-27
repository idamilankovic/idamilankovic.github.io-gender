import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function GetPong() {

  const [ping, setPing] = useState('')

  // const handlePong = (e) => { 
  //   e.preventDefault();
  //   const apiKey = "d10fcce41e8fb0a55f1d64a4ce1fcef4-user1";
  //   Axios.get("https://api.nameapi.org/rest/v5.3/system/ping?apiKey=" + apiKey)
  //   .then(({data}) => {
  //     console.log(data)
  //   })
  //   .catch(function(error) {
  //     if (error.response) {
  //       console.log(error.response)
  //     }
  //     console.log("ovdje sam")
  //   }
  //   )
    
  // }
const fetchPong = async () => {
  //const handlePong = (e) => {
    //e.preventDefault();
    const response = await fetch("https://api.nameapi.org/rest/v5.3/system/ping?apiKey=d10fcce41e8fb0a55f1d64a4ce1fcef4-user1", {
        method: "GET",
        mode: 'no-cors',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/idamilankovic.github.io-gender',
            //'Access-Control-Allow-Methods': 'GET, POST',
            },
    }).then(response => response.json())
      .then(data => setPing(data))
    .catch(error => console.log(error))
}
//}



  return (
    <div>
        <button onClick={fetchPong}>Ping</button>
   {ping}
    </div>
  )
}

export default GetPong;