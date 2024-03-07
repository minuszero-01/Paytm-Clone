import React, { useContext, useState } from "react";
import { Heading } from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";
import { InputBox } from "../Components/InputBox";
import { Button } from "../Components/Button";
import { ButtonWarning } from "../Components/ButtonWarning";
import axios from "axios";
import { useNavigate } from "react-router";
import { MyName } from "../providers/NameContext";

export function Signin() {
  const navigate = useNavigate();
  const { setName } = useContext(MyName);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign In"}></Heading>
            <SubHeading
              label={"Enter your information to Sign In"}
            ></SubHeading>
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
                      setName(res.data.info);
                      navigate("/dashboard");
                    } else if (res.data.message == "Failed") {
                      navigate("/signup");
                    }
                  });
              }}
              label={"Sign In"}
            ></Button>
            <ButtonWarning
              label={"Don't have an account ? "}
              to={"/signup"}
              buttonText={"Signup"}
            ></ButtonWarning>
          </div>
        </div>
      </div>
    </div>
  );
}
