import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    await createProduct(newProduct);
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Create New Product</h1>
      <div className="card p-4">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          className="form-control mb-3"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <button className="btn btn-primary w-100" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default CreatePage;
