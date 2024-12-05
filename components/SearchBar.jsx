export default function SearchBar() {
    return (<div style={{
        width: "242.5px", height: "35px", borderWidth: "2px", borderColor: "green", borderStyle: "solid", margin: "2px",
        display: "flex",

        alignItems: "center",
        color: "black"
    }}>
        <input type="text" placeholder="Search..." style={{ width: "242px", height: "30px" }}
        />
    </div>);
}