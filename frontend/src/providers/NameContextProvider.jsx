import React, { useState } from "react";
import { MyName } from "./NameContext";

export const NameContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  return (
    <MyName.Provider value={{ name, setName }}>{children}</MyName.Provider>
  );
};
