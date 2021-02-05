
// data.json é só um exemplo pois para funcionar tem que rodar um servidor local

fetch('/data.json')
    .then(res => {
        if(res.status === 200) {
            res.json()
        } else{
            throw new Error('request error')
        }
    })
    .then(data => {console.log(data)})
.catch(err => console.log(err))



// ES7 - Async / Await

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1234);
    }, 1000)
})

const simpleFunc = async () => {
    const data = await asyncTimer()
    
    return data
}

simpleFunc().then(data => {
    console.log(data)
}).catch(e => console.log(e))