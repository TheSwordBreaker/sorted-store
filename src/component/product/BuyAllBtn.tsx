import Image from "next/image";
import {
  //  buyNow,

  btnArrow,
} from "../../../public/Images/images";
const BuyAllBtn = () => {
  return (
    <button className="relative my-6 mx-auto flex  w-[80vw] items-center justify-center gap-5 border border-btnPurple px-4 py-3 text-fontColor">
      <p className=" font-Bitter text-base font-bold ">Buy All Books</p>
      <Image src={btnArrow} alt="Buy now btn icon"></Image>
      <p className="  absolute bottom-[-0.5rem]  bg-green-500 px-1 font-Bitter text-[0.7rem]">
        5% DISCOUNT
      </p>
    </button>
  );
};

export default BuyAllBtn;
