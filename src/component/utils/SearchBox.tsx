import Image from "next/image.js";
import { useEffect, useState } from "react";
import { search as SearchIcon } from "../../../public/Images/images";
import useQueryState from "../../hooks/useQueryState";

const SearchBox = () => {
  const { query, setQuery } = useQueryState();

  const [search, setSearch] = useState(query.search || "");
  useEffect(() => {
    setSearch(query?.search ?? "");
  }, [query.search]);

  function handleKeyPress(e: any) {
    if (e.key === "Enter") {
      setQuery({ ...query, search: search });
    }
  }

  return (
    <>
      <div className="search-bar align-center mb-4 flex justify-center border  border-borderColor bg-searchBarBg px-2">
        <Image className="" src={SearchIcon} alt="Search icon"></Image>
        <input
          value={search}
          className=" w-full bg-searchBarBg p-2  text-[13px] text-pop-white200  outline-none"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={handleKeyPress.bind(this)}
          placeholder="search"
        />
      </div>
    </>
  );
};

export default SearchBox;
