
// Callback assincrono

function doSomething(callback) {
    setTimeout(function() {
        callback('first data')
    }, 1000)
}

function doOutherThing(callback) {
    setTimeout(function() {
        callback('second data')
    }, 1000)
}

function doAll() {
  try {
      
    doSomething(function(data) {
        var processedData = data.split('')

      try {
          
        doOutherThing(function(data2) {
            var processData2 = data2.split('')

            setTimeout(function() {
                console.log(processedData, processData2)
            }, 1000)
        })
        
      } catch(err) {
          // hadler error
        console.log(err)
      }
    })
  } catch(err) {
      // handler error
    console.log(err)
  }
}
doAll()



// Promises

const doSomethingPromise = new Promise((resolved, reject) => {
    setTimeout(function() {
        resolved('first data')
    }, 1000)
})

const doOutherPromise = new Promise((resolved, reject) => {
    setTimeout(function() {
        resolved('second data')
    }, 1000)
})

// Status da promise:
// Pending
// Fulfilled
// Rejected


doSomethingPromise
    .then(data => {
        console.log(data)
        return doOutherPromise
    })
    .then(data2 => console.log(data2))
.catch(e => console.log(e))


/* para tornar as promises paralelas:
*
*   promise.all([doSomethingPromise(), doOutherPromise()]).then((data) => {
*       console.log(data)
*   }).catch(e => console.log(e))
* 
*/

/* para responder com a qual resolver primeiro:
*
*   promise.race([doSomethingPromise(), doOutherPromise()]).then((data) => {
*       console.log(data)
*   }).catch(e => console.log(e))
* 
*/
