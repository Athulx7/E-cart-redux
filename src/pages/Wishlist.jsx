import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { removeItemFromWishlist } from "../redux/wishlists";
import { addToCart } from "../redux/cart";

function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlistRedeucer);

  const dispatch = useDispatch()

  const handleWishlist =(item)=>{
    dispatch(addToCart(item))
    dispatch(removeItemFromWishlist(item.id))

  }
  return (
    <>
      <Link to='/'>
        <button className="btn btn-success m-5"> <i class="fa-solid fa-arrow-left me-3"></i>Back To Home</button>
      </Link>

      <Row className="m-4">
        {wishlistItems?.length > 0 ? (
          wishlistItems.map((item) => (
            <Col>
              <Card style={{ width: "18rem" }} className="mt-4">
                <Card.Img
                  variant=""
                  src={item.image}
                  style={{ height: "250px" }}
                  className="p-4"
                />
                <Card.Body>
                  <Card.Title className="text-center fw-bold">
                    {item.title.substring(0, 12)}
                  </Card.Title>
                  <Card.Text>
                    <p>{item.description.substring(0, 50)} ...</p>

                    <p className="fw-bolder text-center">
                      Price : &#x20B9; {item.price}{" "}
                    </p>
                  </Card.Text>
                  <div className="d-flex align-items-center justify-content-between ">
                    <Button variant="outline-danger" onClick={()=>dispatch(removeItemFromWishlist(item.id))}>
                      <i class="fa-solid fa-trash heart"></i>
                    </Button>
                    <Button variant="outline-success" onClick={()=>handleWishlist(item)}>
                      <i class="fa-solid fa-cart-shopping cart"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div  style={{height:'50vh'}} className="d-flex justify-content-center align-items-center flrx-column">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8vxcXbyvy5JHHV_7wMO_HQv-j6aZxX0I5MA&s"  alt="" />
          </div>
        )}
      </Row>
    </>
  );
}

export default Wishlist;
