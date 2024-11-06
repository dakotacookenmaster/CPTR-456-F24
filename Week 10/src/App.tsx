import "./App.css";
import Card from "./components/Card";
import { ChangeEvent, useEffect, useState } from "react";
import { Theme } from "./types/Theme.type";
import { data } from "./data/mock.data";
import { VideoCard } from "./components/VideoCard";
import { Video } from "./types/Video.type";

function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");
  const [counter, setCounter] = useState<number>(0)
  const [show, setShow] = useState<boolean>(true)
  const [video, setVideo] = useState<Video | null>(null)

  useEffect(() => {
    async function fetchData() {
      const rawResponse = await fetch("https://videostar.dacoder.io/3")
      const parsedResponse: Video = await rawResponse.json()
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(true)
        }, 3000)
      })
      setVideo(parsedResponse)
    }
    fetchData()
    
    // only runs when the component mounts because
    // the dependency array is empty
  }, [])

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")

  const [form, setForm] = useState({
    name: "",
    email: ""
  })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { target } = event
    const { name, value } = target

    setForm(prevForm => {
      return {
        ...prevForm,
        [name]: value
      }
    })

  }

  // function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
  //   const { target } = event
  //   setName(target.value)
  // }

  // function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
  //   const { target } = event
  //   setEmail(target.value)
  // }

  function handleClick() {
    setCurrentTheme((prevCurrentTheme) => {
      if(prevCurrentTheme === "light") {
        return "dark"
      } else {
        return "light"
      }
    })
  }

  function handleIncrement() {
    setCounter(prevCounter => {
      return prevCounter + 1
    })
  }

  return (
    <>
      {/* <button onClick={handleClick}>Toggle Theme</button>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Card theme={currentTheme} />
        <Card theme={currentTheme} />
        <Card theme={currentTheme} />
        <Card theme={currentTheme} />
        <Card theme={currentTheme} />
        <Card theme={currentTheme} />
      </div>
      <button onClick={handleIncrement}>Increment</button>
      <div>{ counter }</div> */}
      <input name="name" onChange={handleChange} value={form.name} type="text" placeholder="Enter your name..." />
      <input name="email" onChange={handleChange} value={form.email} type="email" placeholder="Enter your email..." />
      <button>Submit</button>
      <p>{ form.email }</p>
      {/* { data.map((datum) => {
        return <Card key={datum.id} theme={datum.theme} />
      }) } */}
      {/* {
        show && <h1>Hello!</h1>
      } */}
      {/* <button onClick={() => {
        setShow(prevShow => !prevShow)
      }}>Toggle</button> */}
      {/* { video && <VideoCard video={video} /> } */}
    </>
  );
}

export default App;
