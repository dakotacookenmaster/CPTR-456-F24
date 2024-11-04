async function getData() {
  const loader = document.querySelector(".hidden")
  loader.classList.toggle("hidden")
  await new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, 3000)
  })
  const response = await fetch("https://swapi.dev/api/people/4")
  const person = await response.json()
  loader.classList.toggle("hidden")
  console.log(person)
}

getData()
