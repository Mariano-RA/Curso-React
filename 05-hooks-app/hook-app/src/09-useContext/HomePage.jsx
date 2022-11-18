import { useContext } from "react"
import { UserContext } from "./context/UserContext"


export const HomePage = () => {

    const {user} = useContext(UserContext);
    return (

        <div>
            <hr />
            <h1>Home Page - Hola! <small>{user?.name}</small></h1>
        </div>
      )
}
