import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import { Product } from "../types/types";

export interface WishlistStore {
  products: Product[];
  actions: {
    addToWishlist: (products: Product[]) => void;
  };
}

export const useWishlistStore = create<WishlistStore>((set) => ({
  products: [],
  actions: {
    addToWishlist: (products) => set(() => ({ products })),
  },
}));

export const useOnBoardingResourceState = () =>
  useWishlistStore(
    useShallow(({ products }) => ({
      products,
    }))
  );

export const useWishlistActions = () =>
  useWishlistStore(({ actions }) => actions);
