import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../Redux/Actions/ProductActions";

const Product = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const deletehandler = (id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <>
      <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
        <div className="card card-product-grid shadow-sm">
          <Link to="#" className="img-wrap">
            <img src={product.image} alt="Product" />
          </Link>
          <div className="info-wrap">
            <Link to="#" className="title text-truncate">
              {product.name}
            </Link>
            <div className="price mb-2">${product.price}</div>
            <div className="row">
              <Link
                to={`/product/${product._id}/edit`}
                className="btn btn-sm btn-outline-success p-2 col-md-5"
              >EDIT
                {/* <i className="fas fa-pen"></i> */}
              </Link>
              <Link
                to="#"
                className="btn btn-sm p-2 col-md-2"
              ></Link>
              <Link
                to="#"
                onClick={() => deletehandler(product._id)}
                className="btn btn-sm btn-outline-danger p-2 col-md-5"
              >DELETE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
