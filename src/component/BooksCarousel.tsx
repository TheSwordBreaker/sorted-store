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
            perPage: 3,
            focus: "center",
            padding: "5rem",
            fixedWidth: "100%",
            speed: 500,
          }}
        >
          <SplideTrack>
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

        {/* style  */}
        <style global jsx>{`
          .splide {
            padding: 0 !important;
            height: 19rem !important;
          }
          .splide__slide {
             max-width: 11rem;
          }

          .splide__slide img {
          }

          .splide__slide.is-active.card {
            opacity: 1;
          }
          .splide__slide.is-active.is-visible {
            /* border: 1px solid red; */
            height: 19rem;
            width: 10.5rem !important;
            margin-top: 0 !important;
            height: 19rem !important;
          }
          .splide__slide.is-active.is-visible img {
            height: 11rem !important;
            border: 1px solid #d6d6d6;
            /* margin-top: -1rem; */
          }
          .splide__slide.is-next,
          .splide__slide.is-prev {
            height: 10rem !important;
          }
        `}</style>
      </div>
    </>
  );
};

export default BooksCarousel;
