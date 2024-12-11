import { Box, IconButton, Paper, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export interface TransactionProps {
    type: "deposit" | "withdrawal"
    amount: number | ""
    description: string
}

export default function Transaction(props: TransactionProps) {
    return (
        <Paper variant="elevation" elevation={3} sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            width: "100%",
        }}>
            <Typography variant="h1" sx={{ fontSize: "15pt" }}>{ props.description }</Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
            }}>
                <Box>{ props.type }</Box>
                <Box sx={{
                    display: "flex",
                    gap: "2px"
                }}>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                </Box>
            </Box>
        </Paper>
    )
}