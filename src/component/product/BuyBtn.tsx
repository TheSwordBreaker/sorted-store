import Image from "next/image";
import { buyNow } from "../../../public/Images/images";

const BuyBtn = () => {
  return (
    <button className="my-6 mx-auto flex w-full w-[80vw] items-center justify-center gap-7 bg-btnPurple px-4 py-3 text-fontColor">
      <p className=" font-bitter text-base font-bold ">Buy Now</p>
      <Image src={buyNow} alt="Buy now btn icon"></Image>
    </button>
  );
};

export default BuyBtn;
