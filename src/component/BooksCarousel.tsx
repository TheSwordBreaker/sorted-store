import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";
// import "@splidejs/react-splide/css/core";

// or only core styles
import "@splidejs/react-splide/css/core";

import BookCard from "./Card/BookCard";

const BooksCarousel = () => {
  const book1 =
    "https://cdn.chec.io/merchants/48536/assets/HaZz6NL5WXl78v53%7CBook1.png";

  return (
    <>
      <div className="mx-[-1rem] my-3 flex flex-col bg-bookCarouselBg text-fontColor">
        <Splide
          className="splide"
          tag="div"
          hasTrack={false}
          aria-label="Books"
          options={{
            type: "loop",
            arrows: false,
            pagination: false,
            rewind: true,
            gap: "0.4rem",
            perPage: 5,
            focus: "center",
            width: "100%",
            autoWidth: true,
            speed: 500,
          }}
        >
          <SplideTrack>
            <SplideSlide>
              <BookCard image={book1} />
            </SplideSlide>
          </SplideTrack>
        </Splide>

        {/* style  */}
        <style global jsx>{`
          .splide {
            // padding: 0 !important;
            // height: 19rem !important;
          }
          .splide__slide {
            // max-width: 11rem;
          }

          .splide__slide img {
          }

          .splide__slide.is-active.is-visible {
            /* border: 1px solid red; */
            // height: 19rem;
            // width: 10.5rem !important;
            // margin-top: 0 !important;
            // height: 19rem !important;
          }

          .splide__slide .book-card-base {
            scale: 75%;
          }

          .splide__slide.is-active .book-card-base {
            scale: 100%;
          }

          .splide__slide.is-next .book-card-base,
          .splide__slide.is-prev .book-card-base {
            scale: 75%;
          }
        `}</style>
      </div>
    </>
  );
};

export default BooksCarousel;
