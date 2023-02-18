import type { Product } from "@chec/commerce.js/types/product";
import { atom } from "jotai";

export const changePubAtom = atom<string | null>(null);
export const openAddressAtom = atom(false);
export const openPersonalAtom = atom(false);
