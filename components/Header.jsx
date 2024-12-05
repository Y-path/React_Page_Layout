export default function Header() {
    return (<div style={{
        width: "242.5px", height: "35px", borderWidth: "2px", borderColor: "blue", borderStyle: "solid", margin: "2px",
        display: "flex",
        gridTemplateColumns: "auto 1fr",
        gap: "10px",
        alignItems: "center",
        color: "black",
        textAlign: "center",
        justifyContent: "center"

    }}><h3>Employee List</h3>
    </div>);
}