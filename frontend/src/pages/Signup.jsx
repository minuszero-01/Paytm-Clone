import React, { useState, useEffect } from "react";
import axios from "axios";
import { Heading } from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";
import { InputBox } from "../Components/InputBox";
import { Button } from "../Components/Button";
import { ButtonWarning } from "../Components/ButtonWarning";
import { useNavigate } from "react-router";

export function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign Up"}></Heading>
          <SubHeading
            label={"Enter your information to create an account"}
          ></SubHeading>
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            label={"First Name"}
            placeholder={"Enter Your First Name"}
          ></InputBox>
          <InputBox
            label={"Last Name"}
            placeholder={"Enter Your Last Name"}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          ></InputBox>
          <InputBox
            label={"Email"}
            placeholder={"Enter Your Email"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></InputBox>
          <InputBox
            type={"Password"}
            label={"Password"}
            placeholder={"Enter the Password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></InputBox>
          <InputBox
            type={"Password"}
            label={"Confirm Password"}
            placeholder={"Re-type the Password"}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          ></InputBox>
          <Button
            label={"Create an Account"}
            onClick={async () => {
              if (password != confirmPassword) {
                window.location.reload();
                console.log("failed");
              } else if (password == confirmPassword) {
                await axios
                  .post("http://localhost:3000/api/v1/user/signup", {
                    username,
                    firstName,
                    lastName,
                    password,
                    confirmPassword,
                  })
                  .then((res) => {
                    localStorage.setItem("token", res.data.token);
                    navigate("/dashboard");
                    console.log("Done");
                  });
              }
            }}
          ></Button>
          <ButtonWarning
            label={"Already have an account?"}
            to={"/signin"}
            buttonText={"Signin"}
          ></ButtonWarning>
        </div>
      </div>
    </div>
  );
}
