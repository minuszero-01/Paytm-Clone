import React, { useEffect } from "react";
import axios from "axios";

export function Appbar() {
  return (
    <div className="flex justify-between rounded-full h-14 shadow">
      <div className="flex  flex-col justify-center h-full ml-4 ">PayTm</div>
      <div className="flex">
        <div className="flex mt-4 flex-col h-full mr-4">Harsh Hande</div>

        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">H</div>
        </div>
      </div>
    </div>
  );
}
