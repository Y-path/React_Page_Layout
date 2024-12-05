
import { people } from './EmployeeListItem.jsx';

export default function EmployeeList() {
    const listItems = people.map(person =>
        <li key={person.id} style={{ border: "2px solid red" }}>
            {/* <img
        src={getImageUrl(person)}
        alt={person.name}
      /> */}
            <p>
                <b>{person.name}</b>
                <br></br>
                {' ' + person.profession + ' '}
                {/* known for {person.accomplishment} */}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>;
}