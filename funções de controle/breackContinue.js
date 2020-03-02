const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in num) {
    if(x == 5) {
        break
    }
    console.log(`${x}: ${num[x]}`)
}

console.log(' ')

console.log('segundo exemplo:')

for(let y in num) {
    if(y == 5) {
        continue
    }
    console.log(`${y}: ${num[y]}`)
}