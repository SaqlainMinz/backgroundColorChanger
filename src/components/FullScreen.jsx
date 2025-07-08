import React, { useState } from "react";

import "../App.css";

function FullScreen() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen duration-300" style={{backgroundColor:color}} >
        <div  className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=>setColor('black')} className="outline-none px-4 py-1 rounded-full shadow-lg text-black-500 hover:bg-zinc-300">
              Black
            </button>
            <button onClick={()=>setColor('green')} className="outline-none px-4 py-1 rounded-full shadow-lg text-green-500 hover:bg-zinc-300">
              Green
            </button>
            <button onClick={()=>setColor('red')} className="outline-none px-4 py-1 rounded-full shadow-lg text-red-500 hover:bg-zinc-300">
              Red
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default FullScreen;
