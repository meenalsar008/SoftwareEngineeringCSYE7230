import React from "react";

const TopTotal = (props) => {
  const { orders, products } = props;
  let totalSale = 0;
  if (orders) {
    console.log(orders);
    console.log("****")
    orders.map((order) =>
      order.isPaid === true ? (totalSale = totalSale + order.totalPrice) : null
    );
  }
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle">
              <i className="text-primary fas fa-usd-circle"></i>
              {/* <i class="text-primary fas fa-regular fa-money-bill"></i> */}
            </span>
            <div className="text">
              <h4 className="mb-1">Total Sales</h4>{" "}
              <span>${totalSale.toFixed(0)}</span>
            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle">
              <i class="text-secondary fas fa-shopping-cart"></i>
            </span>
            <div className="text">
              <h4 className="mb-1">Total Orders</h4>
              {orders ? <span>{orders.length}</span> : <span>3</span>}
            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle">
              <i className="text-warning fas fa-shopping-basket"></i>
            </span>
            <div className="text">
              <h4 className="mb-1">Total Products</h4>
              {products ? <span>{products.length}</span> : <span>0</span>}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TopTotal;
