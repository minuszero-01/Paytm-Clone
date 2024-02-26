import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Button } from "../Components/Button";

export function Me() {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        label={"LogIn"}
        onClick={async () => {
          const res = await axios
            .get("http://localhost:3000/", {
              headers: {
                authorization: "Bearer " + localStorage.getItem("token"),
              },
            })
            .then((res) => {
              if (res.data.message == "Failed") {
                navigate("/signin");
              } else if (res.data.message == "Success") {
                navigate("/dashboard");
              }
            });
        }}
      ></Button>
    </div>
  );
}
