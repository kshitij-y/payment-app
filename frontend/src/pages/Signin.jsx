import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import process from "process"
export const Signin = () => {

    const [username, setUsername ] = useState("");
    const [password, setPassword ] = useState("");
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white bg-opacity-80 text-center p-2 h-max px-4">
                <Heading label={"Sign in"} />
                <SubHeading label={"Enter your credentials to access your an account"}/>
                <InputBox onChange={e => {setUsername(e.target.value)}} label={"Email"} placeholder="abcd@gmail.com" />
                <InputBox onChange={e => {setPassword(e.target.value)}} label={"Password"} placeholder="min 6 char" />
                <div className="pt-4">
                    <Button label={"Sign In"} onClick={async () => {
                        setMessage("");
                        const backend_api = import.meta.env.VITE_API;
                        try {
                            const res = await axios.post(`${backend_api}/api/v1/user/signin`, {
                                username,
                                password,
                            });
                            setMessage(res.data.message); // Set the message in state
                            if (res.data.token) {
                                localStorage.setItem("token", res.data.token);
                                localStorage.setItem("id", res.data.id);
                                localStorage.setItem("logedin", true);
                                navigate("/dashboard");
                            }
                        } catch (error) {
                            setMessage(error.response?.data?.message || "An error occurred");
                        }
                    }} />
                </div>
                {message && <p className="text-red-500 pt-4">{message}</p>}
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />


            </div>

            
        </div>
    </div>
    
};