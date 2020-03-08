import React, { useState } from "react";

function SearchParam() {
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
}

export default SearchParam;
