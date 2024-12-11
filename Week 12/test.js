const myObj = {
    name: "Dakota",
    // numbers: [1, 2, 3]
    x: 3,
}

copy = {
    ...myObj,
    abc: "hello"
}

const copy = structuredClone(myObj)

copy.numbers.push(2)

console.log(copy)
console.log(myObj)