import React from "react";

function Console(){
    return(
        <section>
            <button onClick={()=>{
                Fetch()
            }}>Click</button>
        </section>
    )
}

export default Console;

function Fetch(){
    fetch('/server/post',{
        
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.text);
    }).catch(err => {
        console.err(err);
    });
}