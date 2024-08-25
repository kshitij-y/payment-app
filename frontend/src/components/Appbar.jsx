import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import axios from "axios";

export const Appbar = () => {
    const navigate = useNavigate();
    const [name, setName] = useState(""); // State to store the user's name
    const [firstLetter, setFirstLetter] = useState(""); // State to store the first letter of the name

    useEffect(() => {
        const fetchName = async () => {
            try {
                const response = await axios.get("https://payment-app-backend-3qxo.onrender.com/api/v1/user/name?id=" + localStorage.getItem("id"));
                const userName = response.data.name; // Assuming the API returns { name: "User Name" }
                setName(userName);
                setFirstLetter(userName[0].toUpperCase());
            } catch (error) {
                console.error("Error fetching user name:", error);
            }
        };

        fetchName();
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <div className="flex flex-row justify-between shadow shadow-gray-400 p-1">
            <div
                onClick={() => {
                    navigate("/Dashboard");
                }}
                className="font-bold text-lg flex items-center justify-center mx-2 cursor-pointer"
            >
                payTm-App
            </div>
            <div className="flex flex-row">
                <div className="text-lg mx-2 w-10 h-10 flex items-center justify-center">
                    Hello,
                </div>
                <div className="text-lg w-10 h-10 flex items-center justify-center">
                    {name}
                </div>
                <div className="rounded-full mx-3 bg-slate-200 p-1 w-10 h-10 flex items-center justify-center">
                    {firstLetter}
                </div>
                <div>
                    <Button
                        onClick={() => {
                            localStorage.removeItem("token");
                            localStorage.removeItem("id");
                            localStorage.setItem("logedin", false);
                            navigate("/signin");
                        }}
                        label={localStorage.getItem("logedin") === "true" ? "Log Out" : "Log In"}
                    />
                </div>
            </div>
        </div>
    );
};
