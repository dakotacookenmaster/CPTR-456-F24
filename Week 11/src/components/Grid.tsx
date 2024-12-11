export default function Grid(props: React.PropsWithChildren) {
    const { children } = props
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px"
        }}>
            { children }
        </div>
    )
}