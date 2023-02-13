import Image from "next/image";

interface Props {
  onClick: () => void;
}
import { btnArrow } from "../../../public/Images/images";

const BuyAllBtn = ({ onClick }: Props) => {
  return (
    <button className="relative mx-auto my-6 flex w-full max-w-md items-center justify-center gap-5 border border-btnPurple py-3 px-4 text-fontColor">
      <p className=" font-bitter text-base font-bold ">Buy All Books</p>
      <Image src={btnArrow} alt="Buy now btn icon"></Image>
      <p className="  absolute bottom-[-0.5rem]  bg-green-500 px-1 font-bitter text-[0.7rem]">
        5% DISCOUNT
      </p>
    </button>
  );
};

export default BuyAllBtn;
