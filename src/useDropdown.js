import React, { useState } from "react";

function useDropdown(label, defaultState, options) {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const dropdown = () => {
    return (
      <label htmlFor={id}>
        <select
          id={id}
          value={state}
          name={id}
          onChange={e => e.target.value}
          onBlur={e => e.target.value}
          disabled={options.length === 0}
        >
          <options value="All">All</options>
          {options.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    );
  };
  return [state, dropdown, setState];
}

export default useDropdown;
