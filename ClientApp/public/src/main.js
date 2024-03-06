document.getElementById('btn').addEventListener('click',()=>{
    fetch('http://localhost:5283/server')
    .then(request => request.json())
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.error(err)
    })
})