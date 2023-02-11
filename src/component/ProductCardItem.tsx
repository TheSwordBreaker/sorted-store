import { book1 } from "../../public/Images/images.js";
import Image from "next/image";

const ProductCardItem = (props: any) => {
  return (
    <>
      <div className="bookCard   my-10 flex h-auto w-auto flex-col items-center justify-center py-5 px-2 text-mainBgColor">
        <div className="relative mt-[-1rem]">
          <div className=" absolute top-1 left-1 h-full w-full bg-bookBg"></div>
          <Image
            width={600}
            height={500}
            className=" relative   h-[11.25rem] w-[8.34rem]"
            alt=""
            src={`${props.image}`}
          />
        </div>

        <div className="bookDetails mt-2  w-max mx-4">
          <p className="bookTitle secondSliderCT font-Bitter font-bold">
            {props.title}
          </p>
          <p className="sem">sem {props.semNum}</p>
          <div className="priceAndAdd flex items-center justify-between">
            <span className="price secondSliderCT font-bold">
              {props.price}
            </span>
            <button className="addBtn flex items-center rounded  bg-addBtn p-2   text-fontColor">
              <p className=" leading-3">+</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardItem;
