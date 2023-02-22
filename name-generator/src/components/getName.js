import React from 'react';
//import data from './data.json';

function GetName() {

  const requestOptions = {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
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

function handleName() {
    fetch('https://api.nameapi.org/rest/v5.3/genderizer/persongenderizer?apiKey=d10fcce41e8fb0a55f1d64a4ce1fcef4-user1', requestOptions)
    .then(response => 
      
      console.log(response))
      .catch((error) => console.log(error))
    // .then((response) => response.text())
  }
    // .then((dataStr)=> {
    //   let data = dataStr;
    //   console.log(data)
    // })

  return (
    <div>
      {/* <button onClick={handleName}>klik za gender</button> */}
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