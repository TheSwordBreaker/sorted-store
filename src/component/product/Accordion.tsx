import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { icon_Book, bookInfo } from "../../../public/Images/images";
import Image from "next/image";
import type { Product } from "@chec/commerce.js/types/product";

export interface myProps {
  product: Product;
  defaultOpen?: boolean;
}
export default function Accordion({ product, defaultOpen }: myProps) {
  const isOpen = defaultOpen ?? false;
  return (
    <div className="w-full pt-6">
      <div className=" w-full max-w-md  p-2  text-fontColor">
        <Disclosure defaultOpen={isOpen}>
          {({ open }) => (
            <>
              <Disclosure.Button className="  flex  w-full  justify-between   bg-addBgColor py-3 px-4 text-left text-sm font-medium ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 ">
                <Image src={bookInfo} alt=""></Image>
                <span className="my-auto ml-[-8rem] font-Lora text-sm">
                  Book info
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } my-auto h-5 w-5 text-fontColor`}
                />
              </Disclosure.Button>
              <Disclosure.Panel
                aria-expanded="true"
                data-headlessui-state="open"
                className=" mt-3 bg-addBgColor px-4 pt-4 pb-2 font-Lora text-sm font-medium"
              >
                <div className="my-1 flex justify-between">
                  <p>Publication</p>
                  <p>Nirali</p>
                </div>
                <div className="my-1 flex justify-between">
                  <p>Dimension</p>
                  <p>A4</p>
                </div>
                <div className="my-1 flex justify-between">
                  <p>iso Number</p>
                  <p>12345678987</p>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <br />

        <Disclosure as="div" className="">
          {({ open }) => (
            <>
              <Disclosure.Button className="   flex  w-full  justify-between  bg-addBgColor py-3 px-4 text-left text-sm font-medium ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <Image src={icon_Book} alt=""></Image>
                <span className="my-auto ml-[-5rem] font-Lora text-sm">
                  About publication
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-fontColor`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" mt-3 bg-addBgColor px-4 pt-4 pb-2 text-justify font-Lora text-sm font-medium tracking-wide">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Nirali
                Prakashan is one of India’s oldest, most authoritative academic
                content Publisher with about 40 years of expertise and more than
                20,000 titles published till date. <br /> &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;We publish syllabus-oriented
                textbooks and reference books specially curated by academicians,
                researchers and professors of India’s most well-renowned
                Universities for a host of fields such as Pharmacy , Engineering
                , Management , CBSE, Commerce , Science , Arts, Junior College
                (11th & 12th) & Primary & Secondary Education (Maharashtra
                Board).
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
