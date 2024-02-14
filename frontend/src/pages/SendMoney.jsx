import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export function SendMoney() {
  const [amount, setAmount] = useState();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const firstName = searchParams.get("name");
  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="flex flex-col justify-center h-full">
        <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col ">
            <h2 className="text-3xl text-center font-bold">Send Money</h2>
          </div>
          <div className=" flex items-center  space-x-4">
            <div className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center ">
              <span className="text-2xl font-semibold">{firstName[0]}</span>
            </div>
            <h3 className="text-2xl text-semibold">{firstName}</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="amount"
              >
                Amount (is Rs)
              </label>
              <input
                placeholder="Enter the Amount"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              ></input>
            </div>
            <button
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/account/transfer",
                  {
                    to: id,
                    amount: amount,
                  },
                  {
                    headers: {
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                  }
                );
              }}
              className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
            >
              Initiate Tranfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
