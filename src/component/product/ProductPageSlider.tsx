import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { book1 } from "../../../public/Images/images.js";
import type { Product } from "@chec/commerce.js/types/product.js";

interface myProps {
  product: Product;
}
const ProductPageSlider = ({ product }: myProps) => {
  if (!product || !product?.image) return <>Not Found</>;

  return (
    <>
      <div className="my-8 flex w-full flex-col items-center justify-center ">
        <div className="max-w-14 relative aspect-[12/17] w-52 ">
          <Image
            fill
            src={product?.image?.url ?? ""}
            className="max-w-10"
            alt={product.name}
          />
        </div>
      </div>
    </>
  );
};

export default ProductPageSlider;
