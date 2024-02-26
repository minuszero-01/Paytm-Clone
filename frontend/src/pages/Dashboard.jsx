import React, { useCallback, useEffect } from "react";
import { Appbar } from "../Components/Appbar";
import { BalanceInfo } from "../Components/BalanceInfo";
import { Users } from "../Components/Users";
import axios from "axios";
import { Button } from "../Components/Button";
import { useNavigate } from "react-router";

export function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    localStorage.removeItem("token");
    navigate("/signin");
  }, []);
  return (
    <div className="mt-20 mx-20">
      <div className="flex flex-row-reverse mb-5">
        <Button label={"Logout"} onClick={handleLogout}></Button>
      </div>
      <Appbar></Appbar>
      <BalanceInfo></BalanceInfo>
      <Users></Users>
    </div>
  );
}
