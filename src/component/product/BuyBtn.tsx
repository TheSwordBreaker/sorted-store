import Image from "next/image";
import { buyNow } from "../../../public/Images/images";

interface Props {
  onClick: () => void;
}

const BuyBtn = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="mx-auto my-6 flex  w-full max-w-md items-center justify-center gap-7 bg-btnPurple py-3 px-4 text-fontColor"
    >
      <p className=" font-bitter text-base font-bold ">Buy Now</p>
      <Image src={buyNow} alt="Buy now btn icon"></Image>
    </button>
  );
};

export default BuyBtn;
