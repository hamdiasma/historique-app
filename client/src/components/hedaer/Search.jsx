import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  return (
    <form className="search-form">
      <input
        type="text"
        name="search"
        value={setSearch}
        id="search"
        onChange={(e) =>
          setSearch(e.target.value.toLowerCase().replace(/ /g, ""))
        }
      />
      <div className="search_icon">
        <i className="fas fa-search"></i>
        <span>Search</span>
      </div>
      <div className="close_search"> &times;</div>
    </form>
  );
}

export default Search;
