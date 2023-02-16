import type { GetServerSideProps } from "next";
import { type NextPage } from "next";

import Head from "next/head";
import { useRouter } from "next/router";

// importing Components
import TopHeader from "../../component/utils/TopHeader";
import ProductPageSlider from "../../component/product/ProductPageSlider";
import ProductData from "../../component/product/ProductData";
// import AboutPublication from "../../component/product/AboutPublication";
import Accordion from "../../component/product/Accordion";
import BuyBtn from "../../component/product/BuyBtn";
import BuyAllBtn from "../../component/product/BuyAllBtn";
import commerce from "../../lib/commerce";
import type { Product } from "@chec/commerce.js/types/product";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const permalink = params?.pid ?? "";

  const product = await commerce.products.retrieve(permalink as string, {
    type: "permalink",
  });

  console.log(product);

  return {
    props: {
      product,
    },
  };
};

export interface myProps {
  product: Product;
}

const ProductPage: NextPage<myProps> = ({ product }) => {
  const router = useRouter();

  console.log(product);

  async function buyNow() {
    const result = await commerce.cart.add(product.id);
    router.push("/Cart");
    console.log("buyNow");
  }

  function buyAllNow() {
    console.log("buyAllNow");
  }

  return (
    <>
      <Head>
        <title>Buy {product.name ?? " "}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-mainBgColor p-4">
        <TopHeader />
        <ProductPageSlider product={product} />
        <ProductData product={product} />
        <BuyBtn onClick={buyNow} />
        <BuyAllBtn onClick={buyAllNow} />
        <Accordion defaultOpen product={product} />
      </main>
    </>
  );
};

export default ProductPage;
