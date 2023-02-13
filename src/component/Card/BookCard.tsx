import type { Product } from "@chec/commerce.js/types/product";
import Image from "next/image";
import Link from "next/link";
type my_props = {
  product?: Product;
};

const BookCard = ({ product }: my_props) => {
  const imgsrc =
    "https://cdn.chec.io/merchants/48536/assets/m8EE9ruJrmqySVCw%7Cbigdata.jpeg";

  const image = product?.image?.url || imgsrc;

  if (!product)
    return (
      <div className="max-w-56 book-card-base mt-16 flex flex-col justify-center   bg-white md:mt-20 md:h-80 md:w-56">
        <div className="mx-[1.15rem] -mt-10 h-48 sm:mx-6">
          <div className="img-cover relative aspect-[12/17] h-full w-full bg-bookBg "></div>
        </div>

        <div className="mx-4  mt-3.5 mb-3 flex h-28 flex-col font-bitter text-addBtn "></div>
      </div>
    );
  return (
    <Link href={`/Product/${encodeURIComponent(product?.permalink)}`}>
      <div className="max-w-56 book-card-base mt-16 flex flex-col justify-center   bg-white md:mt-20 md:h-80 md:w-56">
        <div className="mx-[1.15rem] -mt-10 sm:mx-6 ">
          <div className="img-cover relative aspect-[12/17] w-full ">
            <Image
              className="img-shadow img-border z-10"
              src={image}
              alt="books"
              fill
            />

            <div className="absolute top-1 left-1 h-full w-full bg-bookBg">
              {" "}
            </div>
          </div>
        </div>

        <div className="mx-4  mt-3.5 mb-3 flex flex-col font-bitter text-addBtn ">
          <div className="text-sm font-bold sm:text-base md:text-lg">
            {" "}
            {product.name}
          </div>
          <div className="md:text-md text-xs font-normal sm:text-sm md:text-base">
            Sem I{" "}
          </div>
          <div className="flex items-center justify-between">
            <div className=" text-sm font-bold  sm:text-base md:text-lg">
              {" "}
              <span className="text-base font-extrabold md:text-lg">
                {" "}
                ₹{" "}
              </span>{" "}
              {product.price.formatted}
            </div>
            <div>
              <button className=" flex h-6 w-6   items-center justify-center rounded bg-addBtn  text-fontColor">
                <p className="text-lg ">+</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
