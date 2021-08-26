import React from "react";
import { useState } from "react";

function Input({ handleChangeName, text }) {
  const [name, steName] = useState();

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        placeholder={text}
        onChange={(event) => {
          steName(event.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          handleChangeName(name);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Input;
