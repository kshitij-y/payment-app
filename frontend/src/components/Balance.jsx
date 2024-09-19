import axios from "axios";
import { useState, useEffect } from "react";

export const Balance = ({ label }) => {
    const [balance, setBalance] = useState(null); // State to hold the balance
    const [error, setError] = useState(null); // State to hold any error

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const backend_api = import.meta.env.VITE_API;
                const response = await axios.get(`${backend_api}/api/v1/account/balance`, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                        "Content-Type": "application/json"
                    },
                    params: {
                        userId: localStorage.getItem("id")
                    }
                });
                setBalance(response.data.balance); // Set the fetched balance in the state
            } catch (err) {
                setError("Failed to fetch balance"); // Handle errors
            }
        };

        fetchBalance();
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

    return (
        <div className="flex flex-row font-bold p-4 text-lg">
            <div className="mx-4">
                {label || "Your Balance"}
            </div>
            <div>
                {balance !== null ? `Rs ${balance.toFixed(2)}` : (error || "Loading...")}
            </div>
        </div>
    );
};
