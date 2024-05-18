import { AddToCartIcon, RemoveFromCartIcon } from "../../assets/Icons";
import { useCart } from "../../hooks/useCart";
import "./Products.css"

const Products = ({ products }) => {
    const { addToCart, removedFromCart, cart } = useCart();

    const isProductInCart = (productId) => {
        return cart.some((item) => item.id === productId);
    };

    return (
        <main className="products">
            <ul>
                {products.map((product) => {
                    const isProductAdded = isProductInCart(product.id);
                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> - <p>${product.price}</p>
                            </div>
                            <div>
                                <button onClick={isProductAdded ? () => removedFromCart(product) : () => addToCart(product)}>
                                    {
                                        isProductAdded ? <RemoveFromCartIcon /> : <AddToCartIcon />
                                    }
                                </button>

                            </div>
                        </li>
                    );
                })}
            </ul>
        </main >
    );
}

export default Products;