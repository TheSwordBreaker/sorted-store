import { useQuery } from "@tanstack/react-query";
import { atomWithStorage } from "jotai/utils";
import commerce from "../lib/commerce";

export interface mySearchArgs {
  search?: string;
  sem?: string;
  publication?: string;
}

export default function useSearchProducts(options: mySearchArgs | undefined) {
  const query: any = {
    category_slug: [],
  };

  if (options) {
    const { search, sem, publication } = options;
    if (search) query["query"] = search;
    if (sem) query.category_slug.push(sem);
    // if (publication) query.category_slug.push(publication);
  }

  console.log(query);

  return useQuery({
    queryKey: ["search", query],
    queryFn: async () => commerce.products.list(query),
    staleTime: 5 * 60 * 1000,
  });
}
