import Image from "next/image.js";
import { search } from "../../../public/Images/images.js";

const SearchBox = () => {
  //todo
  // 1. auto suggest panael
  // 2. search on enter
  // 3. it must send query through url params like search=mobile

  return (
    <>
      <div className="search-bar align-center mb-4 flex justify-center border  border-borderColor bg-searchBarBg px-2">
        <Image className="" src={search} alt="Search icon"></Image>
        <input
          className=" w-full bg-searchBarBg  p-2 text-fontColor  outline-none"
          type="text"
          placeholder="search"
        />
      </div>
    </>
  );
};

export default SearchBox;
