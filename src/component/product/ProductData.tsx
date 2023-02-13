// importing images
import { currency, stars5 } from "../../../public/Images/images";

import Image from "next/image";
import type { Product } from "@chec/commerce.js/types/product";

interface myProps {
  product: Product;
}
const ProductData = ({ product }: myProps) => {
  return (
    <>
      <div className=" mx-auto mb-2  p-2 text-fontColor">
        <div className="headingTxt mb-6">
          <p className="font-bitter text-xs font-normal text-pop-white150">
            {" "}
            Sem I
          </p>
          <h1 className="  font-Lora text-3xl">{product.name}</h1>
        </div>
        <div className="priPubRat mb-2 max-w-md">
          <div className="PriPub mb-2 flex justify-between">
            <div className="Pri flex items-center">
              <Image className="ml-[-0.4rem]" src={currency} alt="note"></Image>
              <p className="prPrice font-bitter text-2xl text-pop-white400">
                {product.price.raw}
              </p>
            </div>
            <div className="pubContainer flex items-center  justify-between gap-3 ">
              <div className="active-pub actPub ">
                <div className="border-1 pubCircle flex h-[1.68rem] w-[1.68rem] items-center justify-center rounded-full border bg-nR ">
                  <p className="text-center   font-bitter   text-xs font-bold text-mainBgColor">
                    NR
                  </p>
                </div>
              </div>
              <div className="active-pub ">
                <div className="border-1 pubCircle flex h-[1.68rem] w-[1.68rem] items-center justify-center rounded-full border bg-tN ">
                  <p className="text-center   font-bitter   text-xs font-bold text-mainBgColor">
                    TN
                  </p>
                </div>
              </div>
              <div className="active-pub ">
                <div className="border-1 pubCircle flex h-[1.68rem] w-[1.68rem] items-center justify-center rounded-full border bg-tK ">
                  <p className="text-center   font-bitter   text-xs font-bold text-mainBgColor">
                    TK
                  </p>
                </div>
              </div>
              <div className="active-pub ">
                <div className="border-1 pubCircle flex h-[1.68rem] w-[1.68rem] items-center justify-center rounded-full border bg-tC ">
                  <p className="text-center   font-bitter   text-xs font-bold text-mainBgColor">
                    TC
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ratPub  flex justify-between">
            <div className="rat flex items-center gap-3 ">
              <p className="ratDigit text-pop-white400">4.5</p>
              <div className="ratStarts">
                <Image src={stars5} alt="stats"></Image>
              </div>
            </div>
            <div className="pub">
              <p className="font-Lora font-bold ">Nirali Publication</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductData;
