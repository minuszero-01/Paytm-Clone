import React from "react";

export function InputBox({ label, placeholder, onChange }) {
  return (
    <>
      <div className="text-sm py-2 text-black text-left">{label}</div>
      <input
        onChange={onChange}
        className="w-full px-1 py-2 border-2 rounded-xl border-slate-950"
        placeholder={placeholder}
      ></input>
    </>
  );
}
