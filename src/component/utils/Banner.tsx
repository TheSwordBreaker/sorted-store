import Image from "next/image";
import { banner1, banner2 } from "../../../public/Images/images";

type props = {
  images: string[];
};

const Banner = ({ images }: props) => {
  return (
    <>
      {false ?? (
        <div>
          Banner
          {images.map((img, key) => (
            <div key={key}>{img}</div>
          ))}
        </div>
      )}

      <div className="bannerContainer mb-3 flex items-center gap-4 overflow-hidden overflow-x-scroll ">
        <Image src={banner1} alt="banner  " className=" mx-auto"></Image>
        <Image src={banner2} alt="banner  " className=" mx-auto"></Image>
      </div>
      {/* <div
        className="gallery js-flickity"
        data-flickity-options='{ "wrapAround": true }'
      >
        <div className="gallery-cell">
          <Image src={banner1} alt="banner  " className=" mx-auto"></Image>
        </div>
        <div className="gallery-cell"></div>
        <div className="gallery-cell"></div>
        <div className="gallery-cell"></div>
        <div className="gallery-cell"></div>
      </div> */}
    </>
  );
};

export default Banner;
