import React from "react";

export function InputBox({ label, placeholder, onChange, type }) {
  return (
    <>
      <div className="text-sm py-2 text-black text-left">{label}</div>
      <input
        type={type}
        onChange={onChange}
        className="w-full px-1 py-2 border-2 rounded-xl border-slate-950"
        placeholder={placeholder}
      ></input>
    </>
  );
}
