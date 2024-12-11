import { Link } from "react-router";

interface UserCardProps {
  id: number;
  name: string;
  email: string;
}

export default function UserCard(props: UserCardProps) {
  return (
    <div>
      <ul>
        <li className="blue">ID: {props.id} </li>
        <li>Name: {props.name} </li>
        <li>Email: {props.email}</li>
        <li><Link to={`/profiles/${props.id}`}>Go Here</Link></li>
      </ul>
    </div>
  );
}
