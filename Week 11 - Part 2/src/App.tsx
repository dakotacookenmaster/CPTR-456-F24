import { Button, Card, CardActions, CardContent } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Card sx={{
      width: "500px",
      "@media (max-width: 400px)": {
        background: "green"
      }
    }} variant="outlined">
      <CardContent>Abc</CardContent>
      <CardActions>
        <Button variant="contained">Click Me</Button>
      </CardActions>
    </Card>
  );
}

export default App;
