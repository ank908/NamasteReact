import React, { useState } from "react";
// import './styles.css'
function ChipsInput() {
  const [chip, setChip] = useState("");
  const [chipArray, setChipArray] = useState([]);

  function handle(event) {
    if (event.key == "Enter") {
      setChipArray((prev) => [...prev, chip]);
    }
  }

  function clearChip(e) {
    const chipToRemove = e.target.previousSibling.textContent;
    setChipArray((prev) => prev.filter((item) => item !== chipToRemove));
    console.log(chipToRemove);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        value={chip}
        onChange={(e) => setChip(e.target.value)}
        onKeyDown={handle}
        style={{ padding: "8px", width: "200px" }}
      />
      <div className="chipContainer">
        {chipArray.map((item, index) => (
          <div key={index} className="chip">
            {item}
            <button className="chipClear" onClick={clearChip}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
