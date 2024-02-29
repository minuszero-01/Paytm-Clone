import React, { useCallback, useEffect, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export function Me() {
  const navigate = useNavigate();

  useEffect(() => {
    window.onload = async () => {
      await axios
        .get("http://localhost:3000/", {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.data.message == "Failed") {
            navigate("/landingpage");
          } else if (res.data.message == "Success") {
            navigate("/dashboard");
          }
        });
    };
  }, []);
}
