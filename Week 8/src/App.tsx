import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div style={{
      display: "flex",
      gap: "5px",
    }}>
      <Card text="Hi!" size={20}/>
      <Card text="Hello!" size={10}/>
      <Card text="Dakota!" size={50}/>
      <Card text="Logan!" size={25}/>
    </div>
  );
}

export default App;
