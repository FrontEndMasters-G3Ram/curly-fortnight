import React, { useState } from "react";

function useDropdown(label, defaultState, options) {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const dropdown = () => {
    return (
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={state}
          name={id}
          onChange={e => setState(e.target.value)}
          onBlur={e => setState(e.target.value)}
          disabled={options.length === 0}
        >
          <option value="All">All</option>
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
