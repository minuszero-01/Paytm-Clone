import React, { useState } from "react";
import { Heading } from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";
import { InputBox } from "../Components/InputBox";
import { Button } from "../Components/Button";
import { ButtonWarning } from "../Components/ButtonWarning";
import axios from "axios";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";

export function Signin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign In"}></Heading>
          <SubHeading label={"Enter your information to SignUp"}></SubHeading>
          <InputBox
            label={"Email"}
            placeholder={"Enter Your Email"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></InputBox>
          <InputBox
            label={"Password"}
            placeholder={"Enter the Password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></InputBox>
          <Button
            onClick={async () => {
              await axios
                .post("http://localhost:3000/api/v1/user/signin", {
                  username,
                  password,
                })
                .then((res) => {
                  console.log(res);
                  localStorage.setItem("token", res.data.token);
                  if (res.data.message == "Success") {
                    navigate("/dashboard");
                  } else {
                    navigate("/signup");
                  }
                });
            }}
            label={"Sign Up"}
          ></Button>
          <ButtonWarning
            label={"Don't have an account ? "}
            to={"/signup"}
            buttonText={"Signin"}
          ></ButtonWarning>
        </div>
      </div>
    </div>
  );
}
