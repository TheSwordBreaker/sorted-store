import Image from "next/image";
import { navHome } from "../../public/Images/images";

const BottomMenu = () => {
  return (
    <>
      <div className="fixed bottom-0  z-10  mx-[-1rem] flex w-full items-center justify-center  border border-fontColor bg-mainBgColor ">
        <ul className="  flex w-[19.12rem]   justify-between ">
          <li className="  flex  w-[3.75rem] flex-col items-center justify-center py-5 px-4 text-fontColor">
            <Image src={navHome} alt="Home" /> <p>Home</p>
          </li>
          <li className=" flex   w-[3.75rem]  flex-col items-center justify-center py-5 px-4 text-fontColor">
            <Image src={navHome} alt="Explore" /> <p>Explore</p>
          </li>
          <li className=" flex  w-[3.75rem]  flex-col items-center justify-center py-5 px-4 text-fontColor">
            <Image src={navHome} alt="rewards" /> <p>rewards</p>
          </li>
          <li className=" flex  w-[3.75rem]  flex-col items-center justify-center py-5 px-4 text-fontColor">
            <Image src={navHome} alt="Cart" /> <p>Cart</p>
          </li>
          <li className=" flex  w-[3.75rem]  flex-col items-center justify-center py-5 px-4 text-fontColor  ">
            <Image src={navHome} alt="more" /> <p>more</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BottomMenu;
