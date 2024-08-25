import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
export const Dashboard = () => {
    const [name, setName] = ("User");
    return <div>
        <Appbar />
        <Balance/>
        <Users/>
    </div>
}