import create from "zustand";
import { Product } from "../types/types";

export interface WishlistStore {
  wishlistProducts: Product[];
  isOpen: boolean;
  actions: {
    updateWishlist: (product: Product) => void;
    openWishlistDrawer: () => void;
    closeWishlistDrawer: () => void;
  };
}

export const useWishlistStore = create<WishlistStore>((set) => ({
  wishlistProducts: [],
  isOpen: false,
  actions: {
    openWishlistDrawer: () => set(() => ({ isOpen: true })),
    closeWishlistDrawer: () => set(() => ({ isOpen: false })),
    updateWishlist: (product) =>
      set(({ wishlistProducts }) => ({
        wishlistProducts: wishlistProducts.find(({ id }) => id === product.id)
          ? wishlistProducts.filter(({ id }) => id !== product.id)
          : [...wishlistProducts, product],
      })),
  },
}));

export const useWishlistState = () =>
  useWishlistStore(({ wishlistProducts, isOpen }) => ({
    wishlistProducts,
    isOpen,
  }));

export const useWishlistActions = () =>
  useWishlistStore(({ actions }) => actions);
