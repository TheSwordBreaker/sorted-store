import Image from "next/image.js";
import { logo, profile } from "../../public/Images/images.js";

const TopHeader = () => {
  return (
    <>
      <div className="TopHeader mb-6 flex justify-between">
        <div className="logo-box flex ">
          <Image className="" src={logo} alt="Sorted logo"></Image>
          <h1 className=" pl-4 font-Lora text-2xl font-bold tracking-[0.14em] text-fontColor">
            Sorted
          </h1>
        </div>
        <div className="profile ">
          <Image src={profile} alt="Sorted logo"></Image>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
