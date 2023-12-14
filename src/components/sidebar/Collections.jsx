import React from "react";

export default function Collections() {
  const notesLength = [7, 4, 0, 11];
  return (
    <div className="px-2 pt-4">
      <div className="flex justify-between mb-0.5 text-[#CFCFCF] font-medium text-sm border-b"> 
        <p>collections</p>
        <div className="space-x-2">
          <button>···</button>
          <button>+</button>
        </div>
      </div>
      <div>
        {notesLength.map((length, index) => (
          <div className="flex justify-between text-sm px-3 py-2 hover:bg-[#F1F1F1] rounded-lg" key={index}>
            <p>collection name</p>
            <p>{length}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
