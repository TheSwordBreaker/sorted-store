import type { GetServerSideProps } from "next";
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
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

//todo
// 1. take search from url params
// 2. add dropdown for category like sem , publication , branch
// 3. use  fetch() to handle all actions like search , category , sort
// 4. add sort by price , name , rating
// 5. add filter by price , rating , publication , branch , sem
// 6. add pagination
// 7. add loading state
// 8. add error state
// 9. add empty state
// 10. make card litter bit resposnvie
// 11. avoid text overlay

const Explore: NextPage = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  const fetch = async () => {
    const query: any = {};

    const search = router.query?.search;

    if (search) query["search"] = search;

    console.log(search);

    const results = await commerce.products.list(query);
    console.log(results.data);
    setProducts(results.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Head>
        <title>Sort-ed</title>
        <meta name="description" content="Sorted store front" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-mainBgColor p-4">
        <TopHeader />

        <SearchBox />

        <CategoryNav />
        <CategoryNav />

        <BottomMenu />
        <ProductList className="pb-20" title="" products={products} />
        {/* <GetBooks></GetBooks> */}
      </main>
    </>
  );
};

export default Explore;
