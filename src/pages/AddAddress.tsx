import React from "react";

const AddAddress = () => {
  return (
    <>
      <div className="absolute bottom-0 w-screen items-center  bg-mainBgColor px-8 pt-10 pb-6 font-Lora text-fontColor">
        <p className="py-4 text-signUp font-bold">Select Address</p>
        <div className="flex flex-col py-4">
          <label
            htmlFor="address"
            className="py-2 text-getBooksText2 font-light"
          >
            COMPLETE ADDRESS
          </label>
          <input
            className="bg-transparent font-bold placeholder-secondaryTextCol outline-0"
            id="address"
            type="address"
            aria-label="address"
            placeholder="Enter full address"
          />
        </div>
        <div className="flex flex-col py-4">
          <label
            htmlFor="pinCode"
            className="py-2 text-getBooksText2 font-light"
          >
            PIN-CODE
          </label>
          <input
            className="bg-transparent font-bold placeholder-secondaryTextCol outline-0"
            id="pinCode"
            type="pinCode"
            aria-label="pinCode"
            placeholder="Enter your pin code"
          />
        </div>
        <div className="flex flex-col pt-4 pb-8">
          <label
            htmlFor="landmark"
            className="py-2 text-getBooksText2 font-light"
          >
            NEARBY LAND MARK (optional)
          </label>
          <input
            className="bg-transparent font-bold placeholder-secondaryTextCol outline-0"
            id="landmark"
            type="landmark"
            aria-label="landmark"
            placeholder="near KFC"
          />
        </div>
        <button className="w-full bg-accorBg py-4 text-fontColor ">Save</button>
      </div>
    </>
  );
};

export default AddAddress;
