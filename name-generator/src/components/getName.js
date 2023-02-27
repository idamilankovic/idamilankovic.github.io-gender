import React, {useState} from 'react';
//import data from './data.json';

function GetName() {
  const [name, setName] = useState('')

  const requestOptions = {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      "Content-type" : "application/json"

      },
    body: JSON.stringify(
      {
        inputPerson : {
          type : "NaturalInputPerson",
          personName : {
            nameFields : [ {
              string : "Andrea",
              fieldType : "GIVENNAME"
            } ]
          },
          gender : "UNKNOWN"
        }
      }
    )
  }

  //console.log(JSON.stringify(data))

const handleName = () => {
    fetch('https://api.nameapi.org/rest/v5.3/genderizer/persongenderizer?apiKey=d10fcce41e8fb0a55f1d64a4ce1fcef4-user1', requestOptions)
    .then(response => response.json())
    .catch((error) => console.log(error))
  }

  // const fetchPong = async () => {
  //   //const handlePong = (e) => {
  //     //e.preventDefault();
  //     const response = await fetch("https://api.nameapi.org/rest/v5.3/system/ping?apiKey=d10fcce41e8fb0a55f1d64a4ce1fcef4-user1", {
  //         method: "GET",
  //         mode: 'no-cors',
  //         headers: {
  //             'Content-type': 'application/json',
  //             'Access-Control-Allow-Origin': 'http://localhost:3000/idamilankovic.github.io-gender',
  //             //'Access-Control-Allow-Methods': 'GET, POST',
  //             },
  //     }).then(response => response.json())
  //       .then(data => setPing(data))
  //     .catch(error => console.log(error))
  // }
  // //}


  return (
    <div>
      <button onClick={handleName}>Gender</button>
        <h1>

        </h1>
    </div>
  )
}

export default GetName;

// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

//  function GetName() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/2`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function createPost() {
//     axios
//       .post(baseURL, {
//         title: "Hello World!",
//         body: "This is a new post."
//       })
//       .then((response) => {
//         console.log(response)
//         setPost(response.data);
//       });
//   }

//   if (!post) return "No post!"

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={createPost}>Create Post</button>
//     </div>
//   );
// }

// export default GetName;