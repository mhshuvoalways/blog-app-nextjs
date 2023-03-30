import { useState } from "react";

const Search = ({ search, onSearchHanlder }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchTyping, setSearchTyping] = useState(false);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="px-5 py-4 outline-0 rounded-full shadow-sm w-full focus:ring appearance"
        value={searchTyping ? searchValue : search}
        onChange={(e) => {
          setSearchTyping(true);
          setSearchValue(e.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            setSearchTyping(false);
            onSearchHanlder(searchValue);
          }
        }}
      />
    </div>
  );
};

export default Search;
