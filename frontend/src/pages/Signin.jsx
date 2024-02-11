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
          <SubHeading
            label={"Enter your information to create an account"}
          ></SubHeading>
          <InputBox
            label={"First Name"}
            placeholder={"Enter Your First Name"}
          ></InputBox>
          <InputBox
            label={"Last Name"}
            placeholder={"Enter Your Last Name"}
          ></InputBox>
          <InputBox label={"Email"} placeholder={"Enter Your Email"}></InputBox>
          <InputBox
            label={"Password"}
            placeholder={"Enter the Password"}
          ></InputBox>
          <InputBox
            label={"Confirm Password"}
            placeholder={"Re-type the Password"}
          ></InputBox>
          <Button label={"Create an Account"}></Button>
          <ButtonWarning
            label={"Already have an account?"}
            to={"/signup"}
            buttonText={"Signup"}
          ></ButtonWarning>
        </div>
      </div>
    </div>
  );
}
