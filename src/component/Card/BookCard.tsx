import Image from "next/image";

const BookCard = (props: any) => {
  const imgsrc =
    "https://cdn.chec.io/merchants/48536/assets/m8EE9ruJrmqySVCw%7Cbigdata.jpeg";
  return (
    <div className=" mt-16 flex flex-col justify-center   bg-white md:mt-20 md:h-80 md:w-56">
      <div className="mx-[1.25rem] -mt-10 sm:mx-6">
        <div className="img-cover relative aspect-[12/17] w-full ">
          <Image
            className="img-shadow img-border z-10"
            src={imgsrc}
            alt="books"
            fill
          />

          <div className="absolute top-1 left-1 h-full w-full bg-bookBg"> </div>
        </div>
      </div>

      <div className="mx-4  mt-3.5 mb-2.5 flex flex-col font-bitter">
        <div className="text-sm font-bold sm:text-base md:text-lg">
          {" "}
          Engineering Maths
        </div>
        <div className="md:text-md text-xs font-normal sm:text-sm md:text-base">
          Sem I{" "}
        </div>
        <div className="flex items-center justify-between">
          <div className=" text-sm font-bold  sm:text-base md:text-lg">
            {" "}
            <span className="text-base font-extrabold md:text-lg"> ₹ </span> 200
          </div>
          <div>
            <button className=" flex h-6 w-6   items-center justify-center rounded bg-addBtn  text-fontColor">
              <p className="text-lg ">+</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
