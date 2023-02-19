import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { mySearchArgs } from "./useSearchProducts";

export default function useQueryState(initialState = {}) {
  const router = useRouter();
  const [query, setQueryParams] = useState<mySearchArgs>(initialState);

  useEffect(() => {
    setQueryParams(router.query as mySearchArgs);
  }, [router.query]);

  const setQuery = (query = {}) => {
    router.push({ pathname: "/Explore", query }, undefined, {
      shallow: true,
    });
  };

  return { query, setQuery };
}
