import { Box } from "@mui/material";
import "./App.css";
import ButtonAppBar from "./components/AppBar";
import Transaction, { TransactionProps } from "./components/Transaction";
import TransactionForm from "./components/TransactionForm";
import { ChangeEvent, useState } from "react";

function App() {
  const [form, setForm] = useState<TransactionProps>({
    description: "",
    amount: "",
    type: "deposit"
  })

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { target } = event
    const { value, name } = target

    setForm(prevForm => {
      return {
        ...prevForm,
        [name]: value,
      }
    })
  }

  return (
    <>
      <ButtonAppBar />
      <TransactionForm form={form} handleChange={handleChange} />
      <hr />
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        width: "90%",
        margin: "0 auto",
      }}>
        <Transaction
          amount={25.01}
          description={"Bananas"}
          type={"withdrawal"}
        />
        <Transaction
          amount={25.01}
          description={"Bananas"}
          type={"withdrawal"}
        />
        <Transaction
          amount={25.01}
          description={"Bananas"}
          type={"withdrawal"}
        />
        <Transaction
          amount={25.01}
          description={"Bananas"}
          type={"withdrawal"}
        />
      </Box>
    </>
  );
}

export default App;
