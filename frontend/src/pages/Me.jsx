import React, { useCallback, useEffect, useMemo, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { MyName } from "../providers/NameContext";

export function Me() {
  const navigate = useNavigate();
  const { setName } = useContext(MyName);

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
            setName(res.data.info);
            navigate("/dashboard");
          }
        });
    };
  }, []);
}
