import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { fetchAllCategories } from "../../services/categoryService";
import rating from '../../images/rating.png'

const PharmaProducts = (props) => {
  const [keyword, setKeyword] = useState("");
  const [pagenumber, setPageNumber] = useState("");
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { search } = useSelector((state) => state.headerReducer);
  const { loading, error, products, page, pages } = productList;

  const [categoriesData, setCategoriesData] = useState([]);
  const [categoryIndex, setCategoryIndex] = useState("");
  const getAllCategories = async () => {
    try {
      const data = await fetchAllCategories();
      setCategoriesData(data?.categories);
    } catch (e) {
      console.log(e);
    }
  };

  const onSearchTags = (categoryId) => {
    const id = categoryIndex === categoryId ? "" : categoryId
    setCategoryIndex(id)
    dispatch(listProduct(search, pagenumber, id));
  }
  const onSearchAllTags=()=>{
    if(categoryIndex!=""){
    setCategoryIndex("")
    dispatch(listProduct(search, pagenumber));
    }
  }
  useEffect(() => {
    dispatch(listProduct(search, pagenumber));
  }, [dispatch, search, pagenumber])

  useEffect(() => {
    getAllCategories();
  }, [])

  useEffect(() => {
    setCategoryIndex("");
  }, [search])
  
  return (
    <div className="products" id="products">
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
            <h1>All Products</h1>
              <div className="shopcontainer row">
                {loading ? (
                  <div className="mb-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                  <div className="categories">
                    <button className={`btn ${"" === categoryIndex ? "btnsecondary" : "btnprimary"}`} onClick={onSearchAllTags}>All Products</button>
                    {categoriesData?.map(item => (<button key={item._id} className={`btn ${item._id === categoryIndex ? "btnsecondary" : "btnprimary"}`} onClick={() => onSearchTags(item._id)}>{item.name}</button>))}  
                  </div>
                  <div className="productCards">
                    {products.map((product) => (
                      <>
                      <Link to={`/products/${product._id}`}>
                      <div
                        className="prodcard"
                        key={product._id}
                      >
                        <div className="border-product">
                          <Link to={`/products/${product._id}`}>
                            <div className="shopBack">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              
                                {product.name}
                            </p>
                            <div className="rating">
                            <img src={rating} alt="rating" className="rating"/>
                            <p className="ratingval">{product.rating}</p>
                            </div>
                            </div>
                            {/* <Rating
                              value={product.rating}
                              text={`${product.numReviews} reviews`}
                            /> */}
                            <h3>${product.price}</h3>
                        </div>
                      </div>
                      </Link>
                      </>
                    ))}
                    </div>
                  </>
                )}

                {/* Pagination */}
                <Pagination
                  pages={pages}
                  page={page}
                  keyword={search ? search : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default PharmaProducts;
