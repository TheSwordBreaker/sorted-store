import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

// importing Components
import TopHeader from "../../component/TopHeader";
import ProductPageSlider from "../../component/product/ProductPageSlider";
import ProductData from "../../component/product/ProductData";
// import AboutPublication from "../../component/product/AboutPublication";
import Accordion from "../../component/product/Accordion";
import BuyBtn from "../../component/product/BuyBtn";
import BuyAllBtn from "../../component/product/BuyAllBtn";

const ProductPage: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Head>
        <title>ProductPage || {pid}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        /> */}

        {/* <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script> */}
      </Head>

      <main className=" bg-mainBgColor p-4">
        <TopHeader></TopHeader>
        <ProductPageSlider></ProductPageSlider>
        <ProductData></ProductData>
        <BuyBtn></BuyBtn>
        <BuyAllBtn></BuyAllBtn>
        <Accordion></Accordion>
      </main>
    </>
  );
};

export default ProductPage;
