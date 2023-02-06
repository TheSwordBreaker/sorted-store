import { shieldLock, arrow } from "../../public/Images/images.js";
import Image from "next/image";

const GetBooks = () => {
  return (
    <>
      <div className="item-center flex justify-evenly border border-solid border-fontColor  bg-addBgColor font-Lora text-fontColor">
        <div className="my-auto">
          <Image className=" w-7" src={shieldLock} alt="banner" />
        </div>
        <div className="mx-2 items-center justify-center py-5">
          <p className="text-getBooksText">Get your books</p>
          <p className="text-getBooksText2">
            linked email id&lsquo;s and whatsapp
          </p>
        </div>
        <div className=" my-auto items-center justify-center object-fill py-5 px-4 ">
          <Image src={arrow} alt="getBooks" />
        </div>
      </div>
    </>
  );
};

export default GetBooks;
