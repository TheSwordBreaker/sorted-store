import { InferGetServerSidePropsType, type NextPage } from "next";
import Head from "next/head";
// importing style

// components
import Banner from "../component/utils/Banner";
import SearchBox from "../component/utils/SearchBox";
import TopHeader from "../component/utils/TopHeader";
import HeaderText from "../component/HeaderText";
import CategoryNav from "../component/CategoryNav";
import BooksCarousel from "../component/BooksCarousel";
import BottomMenu from "../component/utils/BottomMenu";
import ProductList from "../component/ProductList";
import GetBooks from "../component/GetBooks";
import commerce from "../lib/commerce";
import type { Product } from "@chec/commerce.js/types/product";

export async function getServerSideProps() {
  const { data: products } = await commerce.products.list({
    category_slug: "home",
  });

  // console.log(products);

  return {
    props: {
      products,
    },
  };
}

interface myProps {
  products: Product[];
}

const Home: NextPage<myProps> = ({ products }) => {
  return (
    <>
      <Head>
        <title>Sort-ed</title>
        <meta name="description" content="Sorted store front" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flickity/1.0.0/flickity.css"></script>
      </Head>
      <main className=" bg-mainBgColor p-4">
        <TopHeader />
        <HeaderText />
        <SearchBox />
        <Banner images={[]} />
        <CategoryNav />
        <BooksCarousel products={products} />
        <BottomMenu />
        <ProductList
          className="pb-20"
          title="IT Engineering "
          products={products}
        />
        {/* <GetBooks></GetBooks> */}
        <ProductList
          className="pb-20"
          title="Computer Engineering "
          products={products}
        />
      </main>
    </>
  );
};

export default Home;
