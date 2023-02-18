import { useAtom } from "jotai";
import React from "react";
import { arrow } from "../../../public/Images/images";
import { changePubAtom } from "../../lib/bottomSheet";
import Image from "next/image";

function ChangePublication() {
  const [changePub, setChangePub] = useAtom(changePubAtom);

  if (!changePub) return null;
  return (
    <div
      id="drawer-bottom-example"
      className="fixed right-0 bottom-0 left-0 z-40 w-full transform-none overflow-y-auto   bg-mainBgColor p-4 px-8 text-fontColor transition-transform"
      aria-labelledby="drawer-bottom-label"
    >
      <div className="py-4">
        <p className="text-signUp">Change Publication</p>
        <p className="text-getBooksText2">Broadband Communication System</p>
      </div>

      <div>
        <ul className="flex  items-center justify-between py-2 font-Lora">
          <p className="p-3">TK</p>
          <li className="">Nirali Publication</li>
          <li>₹ 127.00</li>
        </ul>
        <ul className="flex  items-center justify-between py-2 font-Lora">
          <p className="p-3">TK</p>
          <li className="">Nirali Publication</li>
          <li>₹ 127.00</li>
        </ul>
        <ul className="flex  items-center justify-between py-2 font-Lora">
          <p className="p-3">TK</p>
          <li className="">Nirali Publication</li>
          <li>₹ 127.00</li>
        </ul>
        <ul className="flex  items-center justify-between py-2 font-Lora">
          <p className="p-3">TK</p>
          <li className="">Nirali Publication</li>
          <li>₹ 127.00</li>
        </ul>
        <ul className="flex  items-center justify-between py-2 font-Lora">
          <p className="p-3">TK</p>
          <li className="">Nirali Publication</li>
          <li>₹ 127.00</li>
        </ul>
      </div>

      <button
        onClick={() => {
          setChangePub(null);
        }}
        type="button"
        data-drawer-hide="drawer-bottom-example"
        aria-controls="drawer-bottom-example"
        className="absolute top-2.5 right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 "
      ></button>

      <button
        onClick={() => {
          setChangePub(null);
        }}
        className="inline-flex w-full  items-center justify-center bg-accorBg py-4 font-Lora  text-sm text-btnText font-medium focus:outline-none"
      >
        <Image className="rotate-180" src={arrow} alt="" /> back
      </button>
    </div>
  );
}

export default ChangePublication;
