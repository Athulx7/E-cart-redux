import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./home.css";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/wishlists";
import { addToCart } from "../redux/cart";
function Home() {
  const respocnce = useFetch("https://fakestoreapi.com/products");
  const dispatch = useDispatch();

  return (
    <div
      className="ms-4"
    >
      <Row className="m-5">
        {respocnce?.length > 0 ? (
          respocnce.map((item) => (
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
                    <Button
                      variant="outline-danger"
                      onClick={() => dispatch(addToWishlist(item))}
                    >
                      <i class="fa-solid fa-heart heart"></i>
                    </Button>
                    <Button
                      variant="outline-success"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      <i class="fa-solid fa-cart-shopping cart"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div>Nothing to display</div>
        )}
      </Row>
    </div>
  );
}

export default Home;
