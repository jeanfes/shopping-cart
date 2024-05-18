import { useId } from "react";
import { CartIcon, ClearCartIcon } from "../../assets/Icons";
import { useCart } from "../../hooks/useCart";
import "./Cart.css";

const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
    return (
        <li>
            <img
                src={thumbnail}
                alt={title}
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small>
                    Quantity: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    );
}

const Cart = () => {
    const cartCheckboxId = useId();
    const { cart, addToCart, clearCart } = useCart();

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />
            <aside className="cart">
                <ul>
                    {cart.map(product => {
                        return (
                            <>
                                <CartItem
                                    key={product.id}
                                    {...product}
                                    addToCart={() => addToCart(product)}
                                />
                            </>
                        )
                    })}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                    Clear cart
                </button>
            </aside>
        </>
    );
}

export default Cart;