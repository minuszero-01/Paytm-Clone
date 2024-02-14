import React from "react";

export function BalanceInfo({ balance }) {
  return (
    <div className="flex flex-row ">
      <div className="flex mx-6 my-4 font-bold">Your Balance</div>
      <div className="font-semibold flex flex-col justify-center ">
        Rs {balance}
      </div>
    </div>
  );
}
