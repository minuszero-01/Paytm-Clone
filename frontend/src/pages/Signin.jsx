import React from "react";
import { Heading } from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";
import { InputBox } from "../Components/InputBox";
import { Button } from "../Components/Button";
import { ButtonWarning } from "../Components/ButtonWarning";

export function Signin() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign In"}></Heading>
          <SubHeading label={"Enter your information to SignUp"}></SubHeading>
          <InputBox label={"Email"} placeholder={"Enter Your Email"}></InputBox>
          <InputBox
            label={"Password"}
            placeholder={"Enter the Password"}
          ></InputBox>
          <Button label={"Sign Up"}></Button>
          <ButtonWarning
            label={"Don't have an account ? "}
            to={"/signin"}
            buttonText={"Signin"}
          ></ButtonWarning>
        </div>
      </div>
    </div>
  );
}
