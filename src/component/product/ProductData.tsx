// importing images
import { currency, stars5 } from "../../../public/Images/images";

import Image from "next/image";
const ProductData = () => {
  return (
    <>
      <div className="productDataContainer mb-2 p-2 text-fontColor">
        <div className="headingTxt mb-2">
          <p className="font-Bitter text-sm"> Sem I</p>
          <h1 className=" font-Lora text-[1.75rem] ">Engineering Maths</h1>
        </div>
        <div className="priPubRat mb-2">
          <div className="PriPub mb-2 flex justify-between">
            <div className="Pri flex items-center">
              <Image className="ml-[-0.4rem]" src={currency} alt="note"></Image>
              <p className="prPrice font-Bitter text-2xl">200</p>
            </div>
            <div className="pubContainer flex items-center  justify-between gap-3 ">
              <div className="active-pub actPub ">
                <div className="pubCircle border-1 flex h-[1.68rem] w-[1.68rem] items-center justify-center rounded-full border bg-nR ">
                  <p className="text-center   font-Bitter   text-xs font-bold text-mainBgColor">
                    NR
                  </p>
                </div>
              </div>
              <div className="active-pub ">
                <div className="pubCircle border-1 flex h-[1.68rem] w-[1.68rem] items-center justify-center rounded-full border bg-tN ">
                  <p className="text-center   font-Bitter   text-xs font-bold text-mainBgColor">
                    TN
                  </p>
                </div>
              </div>
              <div className="active-pub ">
                <div className="pubCircle border-1 flex h-[1.68rem] w-[1.68rem] items-center justify-center rounded-full border bg-tK ">
                  <p className="text-center   font-Bitter   text-xs font-bold text-mainBgColor">
                    TK
                  </p>
                </div>
              </div>
              <div className="active-pub ">
                <div className="pubCircle border-1 flex h-[1.68rem] w-[1.68rem] items-center justify-center rounded-full border bg-tC ">
                  <p className="text-center   font-Bitter   text-xs font-bold text-mainBgColor">
                    TC
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ratPub  flex justify-between">
            <div className="rat flex items-center gap-3 ">
              <p className="ratDigit">4.5</p>
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
