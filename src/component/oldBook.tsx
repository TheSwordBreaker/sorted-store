import { book1 } from "../../public/Images/images.js";

const BooksCarousel = () => {
  return (
    <>
      <div className="booksContainer mx-[-1rem] h-[19.6rem] bg-bookCarouselBg text-fontColor">
        <div className="middleBookCard">
          <img alt="" />
          <div className="bookDetails">
            <p className="bookTitle font-Bitter"> Engineering Maths</p>
            <p className="sem">Sem I</p>
            <div className="priceAndAdd">
              <span className="price">₹ 350</span>
              <button className="addBtn">+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksCarousel;
