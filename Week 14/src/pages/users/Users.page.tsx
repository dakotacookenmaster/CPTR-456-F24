import { useSnackbar } from "notistack";
import data from "../../data/data.json";
import UserCard from "./UserCard";
import { useParams } from "react-router";

export default function Users() {
  const params = useParams();
  const { enqueueSnackbar } = useSnackbar()

  if (params && params.id !== undefined) {
    const user = data.find(user => user.id === +(params.id as any))
    if(!user) {
        enqueueSnackbar({ message: "That user was not found!", variant: "error" })
    } else {
        return <UserCard email={user.email} id={user.id} name={user.name} />
    }    
  } else {
    return (
      <section>
        {data.map((user) => {
          return (
            <UserCard
              key={user.id}
              email={user.email}
              id={user.id}
              name={user.name}
            />
          );
        })}
      </section>
    );
  }
}
