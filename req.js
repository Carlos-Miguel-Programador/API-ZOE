const date = new Date()

fetch('http://localhost:8000/message?id=1', {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
        {
            message: "Tudo bem.",
            date: date.toUTCString()
        }
    )
})
.then(r=>r.json())
.then(d=>{
    console.log(d);
})

/*fetch('http://localhost:8000/users', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
        {
            name: "Marcos Dev",
            numberPhone: 945329810,
            password: "admin*"
        }
    )
})
.then(r=>r.json())
.then(d=>{
    console.log(d);
})*/