import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { book1 } from "../../../public/Images/images.js";

const ProductPageSlider = () => {
  return (
    <>
      <div className=" h-72 grid-container">
        <div className=" justify-center item1">
          <Image
            className="w-42 isActive  h-56  p-0"
            src={book1}
            alt=""
          ></Image>
        </div>
        <div className="item2">
          <Image className="isAfter h-14" src={book1} alt=""></Image>
          <Image className="isAfter h-14" src={book1} alt=""></Image>
        </div>
        {/* <li>
              <Image className="w-18 h-14" src={book1} alt=""></Image>
            </li>
            <li>
              <Image className="w-18 h-14" src={book1} alt=""></Image>
            </li> */}
        {/* <SplideSlide>
            <Image src={book1} alt="1"></Image>
          </SplideSlide>
          <SplideSlide>
            <Image src={book1} alt="1"></Image>
          </SplideSlide>
          <SplideSlide>
            <Image src={book1} alt="1"></Image>
          </SplideSlide> */}
      </div>
      <style global jsx>{`
        .splide {
        }
        .isActive {
          width: 10rem;
        }
        .isAfter {
          width: 4.5rem;
        }
        .item1 { 
          grid-area: main;
         }
        .item2 { 
          grid-area: right;
         }
        .grid-container{
          display: grid;
          grid-template-areas:{
            'main main main main main right';
          }
        }
      `}</style>
    </>
  );
};

export default ProductPageSlider;
