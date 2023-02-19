import { type NextPage } from "next";
import Head from "next/head";
// importing style

// components
import SearchBox from "../component/utils/SearchBox";
import TopHeader from "../component/utils/TopHeader";
import CategoryNav from "../component/CategoryNav";
import BottomMenu from "../component/utils/BottomMenu";
import Filter from "../component/Filter";
import ExploreList from "../component/Explore/ExploreList";

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
        <Filter />
        <BottomMenu />
        <ExploreList />
        {/* <GetBooks></GetBooks> */}
      </main>
    </>
  );
};

export default Explore;
