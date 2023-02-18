import type { Product } from "@chec/commerce.js/types/product";
import { atom } from "jotai";
import type { IPerson } from "../component/cart/AddPersonalDetails";

export const changePubAtom = atom<string | null>(null);
export const openAddressAtom = atom(false);

export const openPersonalAtom = atom(false);
export const personAtom = atom<IPerson | null>(null);
