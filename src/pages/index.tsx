import { type NextPage } from "next";
import Head from "next/head";
// importing style

// components
import Banner from "../component/Banner";
import SearchBox from "../component/SearchBox";
import TopHeader from "../component/TopHeader";
import HeaderText from "../component/HeaderText";
import CategoryNav from "../component/CategoryNav";
import BooksCarousel from "../component/BooksCarousel";
import BottomMenu from "../component/BottomMenu";
import ProductList from "../component/ProductList";
import GetBooks from "../component/GetBooks";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sort-ed</title>
        <meta name="description" content="Sorted store front" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-mainBgColor p-4">
        <TopHeader />
        <HeaderText />
        <SearchBox />
        <Banner images={[]} />
        <CategoryNav />
        <BooksCarousel />
        <BottomMenu />
        <ProductList title="IT Engineering "/>
        {/* <GetBooks></GetBooks> */}
        <ProductList
          className="pb-20"
          title="Computer Engineering "
        />
      </main>
    </>
  );
};

export default Home;
