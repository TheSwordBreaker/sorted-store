import Link from "next/link";
import React from "react";
import Image from "next/image";

function EmptyCart() {
  return (
    <div
      role="status"
      className="mx-auto flex h-full w-full flex-col   items-center justify-center bg-black"
    >
      <Link href="/" shallow>
        <div className="mx-28  rounded-sm bg-[#191919] px-6  ">
          <div className="relative  h-80 w-[70vw]">
            <Image src="/images/empty.png" alt={"empty_cart."} fill />
          </div>
        </div>
      </Link>
      <div className="mt-12 text-2xl tracking-wider text-white ">
        Empty Cart{" "}
      </div>
    </div>
  );
}

export default EmptyCart;
