import { Button, MenuItem, Select, TextField } from "@mui/material";
import { TransactionProps } from "./Transaction";
import { ChangeEvent } from "react";

export default function TransactionForm(props: {
    form: TransactionProps
    handleChange: any
}) {
  return (
    <div style={{
        display: "flex",
        gap: "10px",
        padding: "10px",
    }}>
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        width: "75%",
        gap: "10px",
    }}>
        <TextField onChange={props.handleChange} name="description" value={props.form.description} fullWidth variant="outlined" placeholder="Enter a description..." />
        <TextField onChange={props.handleChange} name="amount" value={props.form.amount} type="number" fullWidth variant="outlined" placeholder="Enter an amount..." />
      </div>
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        width: "25%",
        gap: "10px"
    }}>
        <Button sx={{ height: "100%" }} variant="contained">Add</Button>
        <Select onChange={props.handleChange} name="type" value={props.form.type} fullWidth>
          <MenuItem value={"deposit"}>Deposit</MenuItem>
          <MenuItem value={"withdrawal"}>Withdrawal</MenuItem>
        </Select>
      </div>
    </div>
  );
}
