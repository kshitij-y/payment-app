import { useNavigate } from "react-router-dom";
import { Button } from "./Button"
export const Appbar = ({label}) => {
    const navigate = useNavigate();
    const firstLetter = label[0]

    return <div className="flex flex-row justify-between shadow shadow-gray-400 p-1">
        <div onClick={() => {
            navigate("/Dashboard")
        }} className="font-bold text-lg flex items-center justify-center mx-2 cursor-pointer">
            payTm-App
        </div>
        <div className="flex flex-row">
            <div className="text-lg mx-2 w-10 h-10 flex items-center justify-center">
                Hello,
            </div>
            <div className="text-lg w-10 h-10 flex items-center justify-center">
                {label}
            </div>
            <div className="rounded-full mx-3 bg-slate-200 p-1 w-10 h-10 flex items-center justify-center">
                {firstLetter.toUpperCase()}
            </div>
            <div>
                <Button onClick={() => {
                    localStorage.removeItem("token")
                    localStorage.removeItem("id")
                    localStorage.setItem("logedin", false);
                    navigate("/signin")
                }} label={localStorage.getItem("logedin") === "true" ? "Log Out" : "Log In"}/>
            </div>
        </div>
    </div>
}