import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";
const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    category: "",
    stockQuantity: "",
    releaseDate: "",
    productAvailable: false,
  });
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("imageFile", image);
    formData.append(
      "product",
      new Blob([JSON.stringify(product)], { type: "application/json" })
    );

    axios
      .post("http://localhost:8080/api/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Product added successfully:", response.data);
        alert("Product added successfully");
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        alert("Error adding product");
      });
  };

  return (
    <div className="container">
      <div className="center-container">
        <div className="form-container">
          <h2 className="form-title">Add New Product</h2>
          <form className="row g-3" onSubmit={submitHandler}>
            <div className="col-md-6">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Product Name"
                onChange={handleInputChange}
                value={product.name}
                name="name"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Brand</label>
              <input
                type="text"
                name="brand"
                className="form-control"
                placeholder="Enter Brand Name"
                value={product.brand}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                placeholder="Add product description"
                value={product.description}
                name="description"
                onChange={handleInputChange}
                rows="3"
              ></textarea>
            </div>
            <div className="col-md-6">
              <label className="form-label">Price ($)</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Price"
                onChange={handleInputChange}
                value={product.price}
                name="price"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                value={product.category}
                onChange={handleInputChange}
                name="category"
              >
                <option value="">Select category</option>
                <option value="Laptop">Laptop</option>
                <option value="Headphone">Headphone</option>
                <option value="Mobile">Mobile</option>
                <option value="Electronics">Electronics</option>
                <option value="Toys">Toys</option>
                <option value="Fashion">Fashion</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">Stock Quantity</label>
              <input
                type="number"
                className="form-control"
                placeholder="Stock Available"
                onChange={handleInputChange}
                value={product.stockQuantity}
                name="stockQuantity"
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Release Date</label>
              <input
                type="date"
                className="form-control"
                value={product.releaseDate}
                name="releaseDate"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Upload Image</label>
              <input
                className="form-control"
                type="file"
                onChange={handleImageChange}
              />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="productAvailable"
                  checked={product.productAvailable}
                  onChange={(e) =>
                    setProduct({ ...product, productAvailable: e.target.checked })
                  }
                />
                <label className="form-check-label">Product Available</label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn-submit">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
