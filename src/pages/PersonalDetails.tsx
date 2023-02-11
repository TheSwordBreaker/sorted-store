import React from "react";

const PersonalDetails = () => {
  return (
    <>
      <div className="absolute bottom-0 w-screen items-center  bg-mainBgColor px-8 pt-10 pb-6 font-Lora text-fontColor">
        <p className="py-4 text-signUp font-bold">Personal Details</p>
        <div className="flex flex-col py-4">
          <label htmlFor="name" className="py-2 text-getBooksText2 font-light">
            FULL NAME
          </label>
          <input
            className="bg-transparent font-bold placeholder-secondaryTextCol outline-0"
            id="email"
            type="email"
            aria-label="email address"
            placeholder="Enter full name"
          />
        </div>
        <div className="flex flex-col py-4">
          <label htmlFor="email" className="py-2 text-getBooksText2 font-light">
            E-MAIL
          </label>
          <input
            className="bg-transparent font-bold placeholder-secondaryTextCol outline-0"
            id="email"
            type="email"
            aria-label="email address"
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex flex-col pt-4 pb-8">
          <label htmlFor="phone" className="py-2 text-getBooksText2 font-light">
            PHONE NO.
          </label>
          <input
            className="bg-transparent font-bold placeholder-secondaryTextCol outline-0"
            id="email"
            type="email"
            aria-label="email address"
            placeholder="Enter your mobile no"
          />
        </div>
        <button className="w-full bg-accorBg py-4 text-fontColor ">Save</button>
      </div>
    </>
  );
};

export default PersonalDetails;
