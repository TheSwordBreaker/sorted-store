import Image from "next/image";
import Link from "next/link";
import {
  navHome,
  cart,
  more,
  explore,
  rewards,
} from "../../../public/Images/images";

const BottomMenu = () => {
  return (
    <>
      <div className="fixed bottom-2 left-1/2 z-10  mx-auto  flex -translate-x-1/2 items-center justify-center  bg-mainBgColor font-Lora text-[0.688rem]">
        <ul className="  flex w-[19.12rem]   justify-between ">
          <Link href={`/`}>
            <li className="  flex  w-[3.75rem] flex-col items-center justify-center py-4 px-4 text-fontColor">
              <Image className="navIcon mb-2" src={navHome} alt="Home" />{" "}
              <p>Home</p>
            </li>
          </Link>
          <Link href={`/`}>
            <li className=" flex    w-[3.75rem]  flex-col items-center justify-center py-4 px-4 text-fontColor">
              <Image className="navIcon mb-2" src={explore} alt="Explore" />{" "}
              <p>Explore</p>
            </li>
          </Link>
          {/* <Link href={`/`}>
            <li className=" flex  w-[3.75rem]  flex-col items-center justify-center py-4 px-4 text-fontColor">
              <Image className="navIcon mb-2" src={rewards} alt="rewards" />{" "}
              <p>rewards</p>
            </li>
          </Link> */}
          <Link href={`/Cart`}>
            <li className=" flex  w-[3.75rem]  flex-col items-center justify-center py-4 px-4 text-fontColor">
              <Image className="navIcon mb-2" src={cart} alt="Cart" />{" "}
              <p>Cart</p>
            </li>
          </Link>
          <Link href={`/`}>
            <li className=" flex  w-[3.75rem]  flex-col items-center justify-center py-4 px-4 text-fontColor  ">
              <Image className="navIcon mb-2" src={more} alt="more" />{" "}
              <p>more</p>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default BottomMenu;
