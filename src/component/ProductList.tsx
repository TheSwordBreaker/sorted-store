import { book1 } from "../../public/Images/images.js";
import Image from "next/image";

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

        <div className=" bg-sliderBg px-4">
          <div className="cardsContainer scrollbar-hide  flex  gap-7 overflow-x-scroll">
            <div className="bookCard  bookCard2 my-10 flex h-auto w-auto flex-col items-center justify-center px-2 text-mainBgColor">
              <div className="cardImg relative mt-[-1rem]">
                <div className=" absolute top-1 left-1 h-full w-full bg-bookBg"></div>
                <Image
                  className=" relative  h-[7.5rem] w-[5.8rem]"
                  alt=""
                  src={book1}
                />
              </div>

              <div className="bookDetails mt-2  w-max">
                <p className="bookTitle secondSliderCT font-Bitter font-bold">
                  Engineering Maths
                </p>
                <p className="sem">Sem I</p>
                <div className="priceAndAdd flex items-center justify-between">
                  <span className="price secondSliderCT font-bold">₹ 350</span>
                  <button className="addBtn flex items-center rounded  bg-addBtn p-2   text-fontColor">
                    <p className=" leading-3">+</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="bookCard  bookCard2 my-10 flex h-auto w-auto flex-col items-center justify-center px-2 text-mainBgColor">
              <div className="cardImg relative mt-[-1rem]">
                <div className=" absolute top-1 left-1 h-full w-full bg-bookBg"></div>
                <Image
                  className=" relative  h-[7.5rem] w-[5.8rem]"
                  alt=""
                  src={book1}
                />
              </div>

              <div className="bookDetails mt-2  w-max">
                <p className="bookTitle secondSliderCT font-Bitter font-bold">
                  Engineering Maths
                </p>
                <p className="sem">Sem I</p>
                <div className="priceAndAdd flex items-center justify-between">
                  <span className="price secondSliderCT font-bold">₹ 350</span>
                  <button className="addBtn flex items-center rounded bg-mainBgColor p-2   text-fontColor">
                    <p className=" leading-3">+</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="bookCard  bookCard2 my-10 flex h-auto w-auto flex-col items-center justify-center px-2 text-mainBgColor">
              <div className="cardImg relative mt-[-1rem]">
                <div className=" absolute top-1 left-1 h-full w-full bg-bookBg"></div>
                <Image
                  className=" relative  h-[7.5rem] w-[5.8rem]"
                  alt=""
                  src={book1}
                />
              </div>

              <div className="bookDetails mt-2  w-max">
                <p className="bookTitle secondSliderCT font-Bitter font-bold">
                  Engineering Maths
                </p>
                <p className="sem">Sem I</p>
                <div className="priceAndAdd flex items-center justify-between">
                  <span className="price secondSliderCT font-bold">₹ 350</span>
                  <button className="addBtn flex items-center rounded bg-mainBgColor p-2   text-fontColor">
                    <p className=" leading-3">+</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="bookCard  bookCard2 my-10 flex h-auto w-auto flex-col items-center justify-center px-2 text-mainBgColor">
              <div className="cardImg relative mt-[-1rem]">
                <div className=" absolute top-1 left-1 h-full w-full bg-bookBg"></div>
                <Image
                  className=" relative  h-[7.5rem] w-[5.8rem]"
                  alt=""
                  src={book1}
                />
              </div>

              <div className="bookDetails mt-2  w-max">
                <p className="bookTitle secondSliderCT font-Bitter font-bold">
                  Engineering Maths
                </p>
                <p className="sem">Sem I</p>
                <div className="priceAndAdd flex items-center justify-between">
                  <span className="price secondSliderCT font-bold">₹ 350</span>
                  <button className="addBtn flex items-center rounded bg-addBtn p-2   text-fontColor">
                    <p className=" leading-3">+</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
