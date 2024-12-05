import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
export default function Homepage() {
    return (<div style={{ width: "250px", borderWidth: "2px", borderColor: "yellow", borderStyle: "solid" }}>
        <Header />
        <SearchBar />
        <EmployeeList />
    </div>);
}