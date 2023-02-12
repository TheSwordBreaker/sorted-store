import { book1 } from "../../public/Images/images.js";
import Image from "next/image";
import ProductCardItem from "./ProductCardItem";
import BookCard from "./Card/BookCard";

// type myprop{
//   title:string;
// }
const ProductList = (props: any) => {
  return (
    <>
      <div className="mx-[-1rem] my-5">
        <div>
          <h1 className=" my-3 ml-4 font-Lora text-2xl font-bold text-fontColor">
            {props.title}
          </h1>
        </div>

        <div className=" bg-cauroselBg px-4">
          <div className="cardsContainer scrollbar-hide  flex  gap-7 overflow-x-scroll">
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
