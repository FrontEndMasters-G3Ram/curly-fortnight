import React from "react";

function SearchParam() {
  const location = "Seattle, WA";

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
          />
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
}

export default SearchParam;
