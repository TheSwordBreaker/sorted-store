import { book1 } from "../../public/Images/images.js";
import Image from "next/image";
import ProductCardItem from "./ProductCardItem";
import BookCard from "./Card/BookCard";
import type { Product } from "@chec/commerce.js/types/product.js";

interface myProps {
  products: Product[];
  title: string;
  className?: string;
}
const ProductList = ({ title, products, className }: myProps) => {
  return (
    <>
      <div className={`mx-[-1rem] my-5 ${className}`}>
        <div>
          <h1 className=" my-3 ml-4 font-Lora text-2xl font-bold text-fontColor">
            {title}
          </h1>
        </div>

        <div className=" bg-cauroselBg px-4">
          <div className="cardsContainer scrollbar-hide  flex  gap-7 overflow-x-scroll">
            {products.map((p: Product, i: number) => {
              return <BookCard product={p} key={i} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
