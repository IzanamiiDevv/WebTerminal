import React, { useState } from "react";

function Console(){
    const [input, setInput] = useState('')
    return(
        <section>
            <input type="text" onChange={(e)=>{
                setInput(e.target.value)
            }}/>
            <button onClick={()=>{
                Fetch(input)
            }}>Click</button>
        </section>
    )
}

export default Console;

function Fetch(command) {
    const postData = {
        key1: command,
    };

    fetch('/server/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    })
    .catch(err => {
        console.error(err);
    });
}
