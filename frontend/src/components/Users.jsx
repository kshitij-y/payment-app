import { useState, useEffect } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Users = () => {
    const [users, setUsers] = useState([]);
    const [fil, setFil] = useState("");
    useEffect(() => {
        const backend_api = import.meta.env.VITE_API;
        axios.get(`${backend_api}/api/v1/user/bulk?filter=`+fil)
            .then(response => {
                setUsers(response.data.user);
            })
    },[fil])



    return <div className="flex flex-col">
        <div className="font-bold text-lg mx-8">
            Users
        </div>
        <div className="mx-8">
            <input type="text" onChange={(e) => {setFil(e.target.value)}} placeholder="Search Users.." className="h-8 my-5 p-4 w-full border rounded border-slate-400"></input>
        </div>

        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </div>
}

function User({user}) {
    const navigate = useNavigate();
    return <div className="flex justify-between mx-8 my-4">
        <div className="flex flew-row">
            <div className="rounded-full bg-slate-200 p-1 w-10 h-10 flex items-center justify-center">
                {user.firstName[0]}
            </div>
            <div className=" pl-2 flex items-center mx-1 text-lg">
                {user.firstName}
            </div>
            <div className="flex items-center text-lg">
            {user.lastName}
            </div>
        </div>
        <div>
            <button onClick={(e) => {
                navigate("/send?id="+ user._id + "&name=" + user.firstName);
            }} className="px-3 py-2 text-white bg-black rounded">Send Money</button>
        </div>
    </div>
}