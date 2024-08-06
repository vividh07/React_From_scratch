import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap shadow-lg bg-white gap-3 justify-center px-3 py-2 rounded-3xl">
            <button
              onClick={()=>setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={()=>setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={()=>setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={()=>setColor("tomato")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "tomato" }}
            >
              Tomato
            </button>
            <button
              onClick={()=>setColor("gray")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "gray" }}
            >
              Gray
            </button>
            <button
              onClick={()=>setColor("	#7F00FF")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "	#7F00FF" }}
            >
              Voilet
            </button>
            <button
              onClick={()=>setColor("mediumSeaGreen")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "MediumSeaGreen" }}
            >
              MediumSeaGreen
            </button>
            <button
              onClick={()=>setColor("lightGreen")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "lightGray" }}
            >
              LightGray
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
