"use client";

import Image from "next/image";
import { FaPlus, FaMinus, FaTrash, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { getCartStore } from "@/app/store/cartStore";

import styles from "./CartCard.module.css";
import Link from "next/link";
import { useToast } from "@/hooks/useToast";

export default function CartCard() {
  const { data: session, status } = useSession();
  const { success, error, info } = useToast();

  const userEmail = session?.user?.email || "guest";
  const useCart = getCartStore(userEmail);

  const {
    items,
    totalQuantity,
    totalPrice,
    addItem,
    decreaseItem,
    removeItem,
    clearCart,
  } = useCart();

  if (status !== "authenticated") return null;

  // If cart is empty
  if (items.length === 0) {
    return (
      <div className={styles.emptyCard}>
        <FaShoppingCart size={48} />
        <h3>Your cart is empty</h3>
        <p>Add some delicious items to place an order 🍔</p>
        <Link href="/menu" className={styles.menuButton}>
          Go to Menu
        </Link>
      </div>
    );
  }


  const handleAddItem = (item) => {
    try {
      addItem(item);
      success(`Added ${item.name} to cart`);
    } catch (err) {
      console.error(err);
      error(`Failed to add ${item.name}`);
    }
  };

  const handleDecreaseItem = (item) => {
    try {
      decreaseItem(item.id);
      success(`Decreased quantity of ${item.name}`);
    } catch (err) {
      console.error(err);
      error(`Failed to decrease ${item.name}`);
    }
  };

  const handleRemoveItem = (item) => {
    try {
      removeItem(item.id);
      info(`${item.name} removed from cart`);
    } catch (err) {
      console.error(err);
      error(`Failed to remove ${item.name}`);
    }
  };

  const handleClearCart = () => {
    try {
      clearCart();
      info("Cart cleared");
    } catch (err) {
      console.error(err);
      error("Failed to clear cart");
    }
  };

  const handlePlaceOrder = () => {
    try {
      if (items.length === 0) {
        info("Your cart is empty!");
        return;
      }
      success("Order placed successfully!");
      clearCart();
    } catch (err) {
      console.error(err);
      error("Failed to place order");
    }
  };

  return (
    <div className={styles.card}>
      {/* Cart Summary */}
      <h2 className={styles.title}>Cart Summary</h2>

      <div className={styles.summary}>
        <div>
          <span>Total Items:</span>
          <strong>{totalQuantity}</strong>
        </div>
        <div>
          <span>Total Price:</span>
          <strong>Rs {totalPrice.toFixed(2)}</strong>
        </div>
      </div>

      {/* Items */}
      <h3 className={styles.subtitle}>Your Items:</h3>

      <div className={styles.items}>
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={70}
              height={70}
              className={styles.image}
            />

            <div className={styles.name}>{item.name}</div>

            <div className={styles.controls}>
              <button onClick={() => handleDecreaseItem(item)}>
                <FaMinus />
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => handleAddItem(item)}>
                <FaPlus />
              </button>
            </div>

            <div className={styles.price}>Rs {item.totalPrice.toFixed(2)}</div>

            <button
              className={styles.delete}
              onClick={() => handleRemoveItem(item)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className={styles.actions}>
        <button className={styles.order} onClick={handlePlaceOrder}>
          <FaShoppingCart />
          Place Order
        </button>
        <button className={styles.cancel} onClick={handleClearCart}>
          <FaTimes />
          Cancel
        </button>
      </div>
    </div>
  );
}
