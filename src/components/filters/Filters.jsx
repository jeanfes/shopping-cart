import { useId } from "react";
import { useFilters } from "../../hooks/useFilters";
import "./Filters.css";

const Filters = () => {
    const { filters, setFilters } = useFilters();
    const minPriceId = useId();
    const categoryId = useId();

    const handleChange = (e) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            minPrice: e.target.value,
        }));
    }

    const handleCategoryChange = (e) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            category: e.target.value,
        }));
    }

    return (
        <aside className="filters">
            <div>
                <label htmlFor={minPriceId}>
                    Price
                </label>
                <input
                    type="range"
                    min="0"
                    max="1500"
                    name="min-price"
                    id={minPriceId}
                    value={filters.minPrice}
                    onChange={handleChange}
                />
                <p>
                    Min price: {filters.minPrice}
                </p>
            </div>
            <div>
                <label htmlFor={categoryId}>
                    Category
                </label>
                <select name="category-products" id={categoryId} onChange={handleCategoryChange}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="home-decoration">Home Decoration</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="skincare">Skin Care</option>
                    <option value="groceries">Groceries</option>
                </select>
            </div>
        </aside>
    );
}

export default Filters;