import { create } from "zustand";
import { persist } from "zustand/middleware";

// store map to keep a single store per user
const stores = {};

export const getCartStore = (userEmail) => {
  const key = userEmail || "guest";

  if (!stores[key]) {
    stores[key] = create(
      persist(
        (set, get) => ({
          items: [],
          totalQuantity: 0,
          totalPrice: 0,

          addItem: (item) => {
            const { items, totalQuantity, totalPrice } = get();
            const existingItem = items.find((i) => i.id === item.id);

            if (existingItem) {
              if (existingItem.quantity < 10) {
                set({
                  items: items.map((i) =>
                    i.id === item.id
                      ? { ...i, quantity: i.quantity + 1, totalPrice: i.totalPrice + item.price }
                      : i
                  ),
                  totalQuantity: totalQuantity + 1,
                  totalPrice: totalPrice + item.price,
                });
              }
            } else {
              set({
                items: [...items, { ...item, quantity: 1, totalPrice: item.price }],
                totalQuantity: totalQuantity + 1,
                totalPrice: totalPrice + item.price,
              });
            }
          },

          removeItem: (id) => {
            const { items, totalQuantity, totalPrice } = get();
            const existingItem = items.find((i) => i.id === id);
            if (!existingItem) return;

            set({
              items: items.filter((i) => i.id !== id),
              totalQuantity: totalQuantity - existingItem.quantity,
              totalPrice: totalPrice - existingItem.totalPrice,
            });
          },

          decreaseItem: (id) => {
            const { items, totalQuantity, totalPrice } = get();
            const existingItem = items.find((i) => i.id === id);
            if (!existingItem) return;

            if (existingItem.quantity === 1) {
              set({
                items: items.filter((i) => i.id !== id),
                totalQuantity: totalQuantity - 1,
                totalPrice: totalPrice - existingItem.price,
              });
            } else {
              set({
                items: items.map((i) =>
                  i.id === id
                    ? { ...i, quantity: i.quantity - 1, totalPrice: i.totalPrice - i.price }
                    : i
                ),
                totalQuantity: totalQuantity - 1,
                totalPrice: totalPrice - existingItem.price,
              });
            }
          },

          clearCart: () => {
            set({ items: [], totalQuantity: 0, totalPrice: 0 });
          },
        }),
        {
          name: `cart-storage-${key}`,
        }
      )
    );
  }

  return stores[key];
};
