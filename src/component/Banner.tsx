import Image from "next/image";
import { banner } from "../../public/Images/images";

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

      <div className="bannerContainer mb-3">
        <Image src={banner} alt="banner  " className=" mx-auto"></Image>
      </div>
    </>
  );
};

export default Banner;
