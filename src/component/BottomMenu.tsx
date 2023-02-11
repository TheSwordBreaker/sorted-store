import Image from "next/image";
import { navHome } from "../../public/Images/images";

const BottomMenu = () => {
  return (
    <>
      <div className="fixed left-1/2 bottom-2 z-10  mx-auto  flex -translate-x-1/2 items-center justify-center  bg-mainBgColor font-Lora text-[0.688rem]">
        <ul className="  flex w-[19.12rem]   justify-between ">
          <li className="  flex  w-[3.75rem] flex-col items-center justify-center py-4 px-4 text-fontColor">
            <Image src={navHome} alt="Home" /> <p>Home</p>
          </li>
          <li className=" flex   w-[3.75rem]  flex-col items-center justify-center py-4 px-4 text-fontColor">
            <Image src={navHome} alt="Explore" /> <p>Explore</p>
          </li>
          <li className=" flex  w-[3.75rem]  flex-col items-center justify-center py-4 px-4 text-fontColor">
            <Image src={navHome} alt="rewards" /> <p>rewards</p>
          </li>
          <li className=" flex  w-[3.75rem]  flex-col items-center justify-center py-4 px-4 text-fontColor">
            <Image src={navHome} alt="Cart" /> <p>Cart</p>
          </li>
          <li className=" flex  w-[3.75rem]  flex-col items-center justify-center py-4 px-4 text-fontColor  ">
            <Image src={navHome} alt="more" /> <p>more</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BottomMenu;
