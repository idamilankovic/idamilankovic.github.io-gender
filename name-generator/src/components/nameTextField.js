import React, { useState } from 'react';
import GetGender from './getGender';

function NameTextField() {
    const [name, setName] = useState('')

  return (
    <div>
        <h1>Unesi ime:</h1>
        <form >
            <input 
                type="text"                     
                onChange={(event) => setName(event.target.value)}/>
            {<GetGender name={name}/>}
        </form>
    </div>
  )
}

export default NameTextField;