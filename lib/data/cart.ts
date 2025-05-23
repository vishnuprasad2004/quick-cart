import { ItemType } from "./phones";

interface CartItemType extends ItemType {
  quantity: number;
  dateAdded: Date;
}


const cart: CartItemType[] = [];

export const addToCart = (item: ItemType) => {
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1, dateAdded: new Date() });
  }
};


export const removeFromCart = (itemId: number) => {
  const itemIndex = cart.findIndex((cartItem) => cartItem.id === itemId);
  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
  }
};

export const getCartItems = () => {
  return cart;
};