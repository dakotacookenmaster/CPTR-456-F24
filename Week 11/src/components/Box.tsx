import { useContext } from "react"
import { NumberContext } from "../contexts/Number.context"

interface BoxProps {
    width: number,
    height: number,
    color: string
}

export default function Box(props: BoxProps) {
    const { width, height, color } = props
    const numbers = useContext(NumberContext)

    return (
        <div style={{
            width: width + "px",
            height: height + "px",
            border: `2px solid ${color}`,
        }}></div>
    )
}