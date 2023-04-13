import type { Product } from "@chec/commerce.js/types/product";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useQueryState from "../../hooks/useQueryState";
import type { mySearchArgs } from "../../hooks/useSearchProducts";
import useSearchProducts from "../../hooks/useSearchProducts";
import BookCard from "../Card/BookCard";
import ProductList from "../ProductList";
import { Loader } from "../utils/loader";

function ExploreList() {
  const { query, setQuery } = useQueryState();
  const { data, isLoading, isError } = useSearchProducts(query as mySearchArgs);

  if (isError) return null;
  if (isLoading) return <Loader />;

  const products = data?.data || [];
  const meta = data?.meta || {};
  return (
    <div>
      <div className=" bg-cauroselBg pb-16">
        <div className="mx-2 grid  grid-cols-2  gap-8  sm:grid-cols-3 lg:grid-cols-6">
          {products.map((p: Product, i: number) => {
            return <BookCard product={p} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ExploreList;
