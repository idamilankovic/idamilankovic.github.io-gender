import React from 'react';

function GetPong() {

const handlePong = () => {
    const response = fetch("https://api.nameapi.org/rest/v5.3/system/ping?apiKey=d10fcce41e8fb0a55f1d64a4ce1fcef4-user1", {
        method: "GET",
        mode: 'no-cors',
        headers: {
            'Content-type': 'application/json',
            },
    }).then(response => console.log(response))
    console.log(response)
}


  return (
    <div>
        <button onClick={handlePong}>Ping</button>
        
    </div>
  )
}

export default GetPong;