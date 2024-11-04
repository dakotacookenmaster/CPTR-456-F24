import { Theme } from "../types/Theme.type";

export default function Card(props: { theme: Theme }) {
    const { theme } = props
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        background: theme === "dark" ? "#ccc" : "#2d2d2d",
      }}
    ></div>
  );
}

// export type abc = "abc"
