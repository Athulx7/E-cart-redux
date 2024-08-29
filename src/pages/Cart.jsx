import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, removeItemsFromCart } from "../redux/cart";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
//used to navigate a particular path or page 

const navigate = useNavigate()

  const [total,setTotal] = useState(0)
  const getTotal = ()=>{
    let sum = 0;
    cartItems.forEach(element => {
      sum = sum + element.price
      
    })
    setTotal(sum);
  }

  useEffect(()=>{
    getTotal()
  },[cartItems])

  const handleCart = ()=>{
    alert("thank you ... your order placed succesfully")
    dispatch(emptyCart())
    navigate('/')

  }
  return (
    <>
      <div
        style={{ marginTop: "100px" }}
        className="d-flex justify-content-between"
      >
        <div className="row  ms-5 w-100 ">
          <div className="col-lg-6 m-5">
            <table className="table shadow border">
              <thead>
                <tr className="text-center">
                  <th>#</th>
                  <th>Product title</th>
                  <th>image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              {cartItems?.length > 0 ? (
                cartItems.map((items) => (
                  <tr className="mt-3 text-center">
                    <td>{items.id}</td>
                    <td>{items.title.slice(0, 20)}..</td>
                    <td>
                      <img src={items.image} alt="" width={100} />
                    </td>
                    <td>{items.price}</td>
                    <td>
                      <Button
                        onClick={() => dispatch(removeItemsFromCart(items.id))}
                        variant="outline-danger"
                        className="ms-3 mt-2"
                      >
                        <i className="fa-solid fa-trash fs-5 "></i>
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <div>nothing to diaplay</div>
              )}
            </table>
          </div>
        </div>

        <div className="col-lg-4 me-5 mt-5 " style={{}}>
          <div className="border shadow p-5">
            <h3 className="text-primary">Cart summry</h3>
            <h5>
              total number of product:{" "}
              <span className="text-primary">{cartItems?.length}</span>
            </h5>
            <h3>
              total price : <span className="text-warning fw-bolder">₹ {total}</span>
            </h3>
            <button className="btn btn-success rounded w-100" onClick={handleCart}>CHECK OUT</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
