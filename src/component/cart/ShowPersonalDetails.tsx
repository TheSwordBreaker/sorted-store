import React from "react";
import Image from "next/image";
import { rightArrow } from "../../../public/Images/images";
import auth from "../../lib/firebase";

const ShowPersonlDetails = () => {
  return (
    <>
      {/* add personal details page  */}
      <div className="mb-4 flex items-center justify-between bg-accorBg p-3 font-Lora text-sm">
        <p className=" text-fontColor ">Personal Details</p>
        <button className=" text-totalPriceText"> + Add</button>
      </div>

      <div className="Address mb-4 bg-accorBg p-3 font-Lora">
        <p className="flex justify-between font-Lora text-xs text-fontColor">
          Address
          <span>
            <Image alt="right arrow" src={rightArrow}></Image>
          </span>
        </p>
        <p className="mt-2 flex justify-between font-Lora text-xs text-secondaryTextCol">
          72, Shivkrupa Nagar, Hirawadi, <br />
          Panchavti , Nashik - 3
        </p>
      </div>
      {/* your details  */}
      <div className="details bg-accorBg p-3 font-Lora">
        <p className="flex justify-between font-Lora text-xs text-fontColor">
          Your Details
          <span>
            <Image alt="right arrow" src={rightArrow}></Image>
          </span>
        </p>
        <p className="mt-2 flex justify-between font-Lora text-xs text-secondaryTextCol">
          Mark Sir ,{" "}
          {auth.currentUser ? auth.currentUser.phoneNumber : "4324324320"}
        </p>
      </div>
    </>
  );
};

export default ShowPersonlDetails;
