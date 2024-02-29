import React from "react";
import { Button } from "../Components/Button";
import { useNavigate } from "react-router";

export function LandingPage() {
  const navigate = useNavigate();
  function handleSignIn() {
    navigate("/signin");
  }
  function handleSignUp() {
    navigate("/signup");
  }
  return (
    <div>
      <Button label={"Sign In"} onClick={handleSignIn}></Button>
      <Button label={"Sign Up"} onClick={handleSignUp}></Button>
    </div>
  );
}
