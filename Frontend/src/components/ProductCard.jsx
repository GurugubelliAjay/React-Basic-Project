import PropTypes from "prop-types";
import { useState } from "react";
import { useProductStore } from "../store/product.js";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    await deleteProduct(pid);
  };

  const handleUpdateProduct = async (pid) => {
    await updateProduct(pid, updatedProduct);
  };

  return (
    <div className="card shadow-sm">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text fw-bold">&#x20B9;{product.price}</p>
        <button
          className="btn btn-warning me-2"
          data-bs-toggle="modal"
          data-bs-target={`#updateModal${product._id}`}
        >
          <i className="bi bi-pencil"></i>
        </button>
        <button className="btn btn-danger" onClick={() => handleDeleteProduct(product._id)}>
          <i className="bi bi-trash"></i>
        </button>
      </div>

      {/* Update Modal */}
      <div className="modal fade" id={`updateModal${product._id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Product</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Product Name"
                value={updatedProduct.name}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
              />
              <input
                type="number"
                className="form-control mb-3"
                placeholder="Price"
                value={updatedProduct.price}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, price: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control"
                placeholder="Image URL"
                value={updatedProduct.image}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, image: e.target.value })
                }
              />
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                onClick={() => handleUpdateProduct(product._id)}
                data-bs-dismiss="modal"
              >
                Update
              </button>
              <button className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define propTypes
ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
