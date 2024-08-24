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
                    const res = await axios.post("https://payment-app-backend-3qxo.onrender.com/api/v1/user/signup", {
                        username,
                        password,
                        firstName,
                        lastName
                    })
                    localStorage.setItem("token", res.data.token)
                    navigate("/dashboard")

                }} />
            </div>
            <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />


        </div>

            
        </div>
    </div>
    
};
