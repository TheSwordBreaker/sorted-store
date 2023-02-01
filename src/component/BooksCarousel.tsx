import { book1 } from "../../public/Images/images.js";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import Image from "next/image";

const BooksCarousel = () => {
  return (
    <>
      <div className="booksContainer mx-[-1rem] my-3 flex h-[19.6rem] flex-col  justify-center bg-bookCarouselBg text-fontColor">
        <Splide
          className="splide"
          tag="div"
          hasTrack={false}
          aria-label="Books"
          options={{
            type: "loop",
            arrows: false,
            pagination: false,
            gap: "2rem",
            padding: "0",
            perPage: 1,
            focus: "center",
            padding: "5rem",
            fixedWidth: "100%",
            speed: 500,
          }}
        >
          <SplideTrack className="">
            <SplideSlide>
              <div className="bookCard my-2 flex w-full flex-col items-center justify-center text-mainBgColor">
                <div className="cardImg relative mt-[-3rem]">
                  <div className=" absolute top-1 left-1 h-full w-full bg-bookBg"></div>
                  <Image
                    className=" relative  h-[11.25rem] w-[8.34rem]"
                    alt=""
                    src={book1}
                  />
                </div>

                <div className="bookDetails mt-2">
                  <p className="bookTitle font-Bitter font-bold">
                    Engineering Maths
                  </p>
                  <p className="sem">Sem I</p>
                  <div className="priceAndAdd flex justify-between">
                    <span className="price font-bold">₹ 350</span>
                    <button className="addBtn flex items-center rounded  bg-addBtn p-2   text-fontColor">
                      <p className=" leading-3">+</p>
                    </button>
                  </div>
                </div>
              </div>
            </SplideSlide>
          </SplideTrack>
        </Splide>
        {/* <div className="splide">
          <div className="splide__slider">
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    alt=""
                  />
                </li>
                <li className="splide__slide">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    alt=""
                  />
                </li>
                <li className="splide__slide">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    alt=""
                  />
                </li>
                <li className="splide__slide">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default BooksCarousel;
