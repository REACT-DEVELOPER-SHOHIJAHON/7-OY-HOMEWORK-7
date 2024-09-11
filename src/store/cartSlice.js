import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("products")),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Harakat yukidan mahsulot identifikatoridan foydalanib, savatdagi mahsulot indeksini topish
    addProductToCart: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      // Mahsulot allaqachon savatda yo'qligini tekshirish
      if (index !== -1) {
        // Mahsulot allaqachon savatda, miqdorini yangilang
        // Agar mahsulot savatda topilmasa, uni 1 miqdori bilan qo'shish
        state.products[index].quantity += 1;
      } else {
        // Mahsulot savatda emas, yangi mahsulot qo'shing
        state.products.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const { addProductToCart } = cartSlice.actions;
export default cartSlice.reducer;
