const myObj = {
    name: "Dakota",
    age: 26, 
    email: "dakotacookenmaster@southern.edu",
}

const stringified = JSON.stringify(myObj)
const obj = JSON.parse(stringified)

// const choice = "age"

// if(choice === age) {
//     console.log(myObj.age)
// }