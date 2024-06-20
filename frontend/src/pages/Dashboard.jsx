import React, { useCallback, useEffect, useContext, useState } from "react";
import { Appbar } from "../Components/Appbar";
import { BalanceInfo } from "../Components/BalanceInfo";
import { Users } from "../Components/Users";
import axios from "axios";
import { Button } from "../Components/Button";
import { useNavigate } from "react-router";
import { MyName } from "../providers/NameContext";

export function Dashboard() {
  const navigate = useNavigate();
  const { name } = useContext(MyName);

  console.log(name.firstName)
  
  const handleLogout = useCallback(async () => {
    localStorage.removeItem("token");
    navigate("/signin");
  }, []);
  return (
    <div className="mt-20 mx-20">
      <div className="flex flex-row-reverse mb-5">
        <Button label={"Logout"} onClick={handleLogout}></Button>
      </div>
      <Appbar name={name.firstName}></Appbar>
      <BalanceInfo id={name.userid}></BalanceInfo>
      <Users></Users>
    </div>
  );
}
