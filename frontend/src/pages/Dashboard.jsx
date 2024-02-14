import React, { useEffect } from "react";
import { Appbar } from "../Components/Appbar";
import { BalanceInfo } from "../Components/BalanceInfo";
import { Users } from "../Components/Users";
import axios from "axios";

export function Dashboard() {
  return (
    <div className="mt-20 mx-20">
      <Appbar></Appbar>
      <BalanceInfo></BalanceInfo>
      <Users></Users>
    </div>
  );
}
