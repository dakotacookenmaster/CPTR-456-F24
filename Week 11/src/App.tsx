import "./App.css";
import Box from "./components/Box";
import Grid from "./components/Grid";
import { CredentialExpirationError } from "./errors/CredentialExpiration.error";

function App() {
  try {
    // throw new CredentialExpirationError('Additional Message Data')
    throw new Error("hello")
  } catch(error) {
    if(error instanceof CredentialExpirationError) {
      console.log("A credential error was caught!")
    } else {
      console.log("It was a different error")
    }
  }
  
  return (
    <></>
    // <Grid>
    //   <Box />
    //   <Box />
    //   <Box />
    //   <Box />
    //   <Box />
    //   <Box />
    // </Grid>
  );
}

export default App;
