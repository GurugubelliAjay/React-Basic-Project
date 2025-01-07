import { useEffect } from "react";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Current Products</h1>
      <div className="row g-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4" key={product._id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="text-center text-muted">
            No products found 😢{" "}
            <a href="/create" className="text-primary">
              Create a product
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
