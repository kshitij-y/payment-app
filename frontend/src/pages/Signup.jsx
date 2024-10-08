import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios"
export const Signup = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName ] = useState("");
    const [lastName, setLastName ] = useState("");
    const [username, setUsername ] = useState("");
    const [password, setPassword ] = useState("");
    const [message, setMessage] = useState("");

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white bg-opacity-80 text-center p-2 h-max px-4">
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your information to create an account"}/>
            <InputBox onChange={e => {setFirstName(e.target.value)}} label={"First Name"} placeholder="John" />
            <InputBox onChange={e => {setLastName(e.target.value)}} label={"Last Name"} placeholder="Doe" />
            <InputBox onChange={e => {setUsername(e.target.value)}} label={"Email"} placeholder="abcd@gmail.com" />
            <InputBox onChange={e => {setPassword(e.target.value)}} label={"Password"} placeholder="min 6 char" />
            <div className="pt-4">
                <Button label={"Sign Up"} onClick={ async () => {
                    setMessage("");
                    try {
                        const backend_api = import.meta.env.VITE_API;
                        const res = await axios.post(`${backend_api}/api/v1/user/signup`, {
                            username,
                            password,
                            firstName,
                            lastName
                        });
                        setMessage(res.data.message); // Set the message in state
                        if (res.data.token) {
                            localStorage.setItem("token", res.data.token);
                            navigate("/dashboard");
                        }
                    } catch (error) {
                        setMessage(error.response?.data?.message || "An error occurred");
                    }

                }} />
            </div>
            {message && <p className="text-red-500 pt-4">{message}</p>}
            <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />


        </div>

            
        </div>
    </div>
    
};
