import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Balance } from "../components/Balance"
import { Appbar } from "../components/Appbar"

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const [message, setMessage] = useState("");

    const initiateTransfer = async () => {
        setMessage("");
        if (isNaN(amount) || amount <= 0) {
            setMessage("Please enter a valid amount.");
            return;
        }

        try {
            const backend_api = import.meta.env.VITE_API;
            const res = await axios.post(`${backend_api}/api/v1/account/transfer`, {
                to: id,
                amount: parseFloat(amount)
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });

            setMessage(res.data.message || "Transfer successful!");
        } catch (error) {
            setMessage(error.response?.data?.message || "Transfer failed. Please try again.");
        }
    };

    return (
        <div>
            <Appbar label={"User"} />
            <div className="bg-slate-100 h-screen flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="bg-white h-min w-96 flex flex-col justify-center shadow shadow-gray-300 rounded">
                        <div className="text-center font-bold text-2xl pt-6">
                            Send Money
                        </div>
                        <Balance />
                        <div className="flex flex-row mx-6 items-center">
                            <div className="rounded-full bg-slate-200 p-1 w-10 h-10 flex items-center justify-center">
                                {name && name[0].toUpperCase()}
                            </div>
                            <div className="pl-2 flex items-center mx-1 text-lg">
                                {name}
                            </div>
                        </div>
                        <div className="mx-6 pt-2 font-bold">
                            Amount (in Rs)
                        </div>
                        <div className="mx-6">
                            <input 
                                onChange={(e) => setAmount(e.target.value)} 
                                type="text" 
                                placeholder="Enter amount" 
                                className="h-8 my-2 p-4 w-full border rounded border-slate-400"
                            />
                        </div>
                        <div className="mx-6 mt-3 mb-6">
                            <button 
                                onClick={initiateTransfer} 
                                className="px-3 py-2 text-white rounded w-full bg-gray-800 hover:bg-gray-900"
                            >
                                Initiate Transfer
                            </button>
                        </div>
                        {message && <p className="text-red-500 text-center pb-4">{message}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};
