import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        style={{ width: "100%", height: "300px" }}
        className="d-flex justify-content-center align-items-center flex-coloumn mt-5 bg-primary text-light"
      >
        <div className="d-flex justify-content-evenly mb-5 w-100">
          <div style={{ width: "400px" }}>
            <h4>
              {" "}
              <i class="fa-solid fa-cart-shopping me-2 "></i> E-kart
            </h4>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quasi modi, expedita optio eos magni cupiditate alias temporibus?
              Expedita eos accusantium iste ipsam vitae officiis pariatur culpa
              deleniti omnis aliquam! lorem
            </h6>
          </div>

          <div className="d-flex flex-column">
            <h4>Links</h4>
            <Link style={{ color: "white", textDecoration: "none" }} to="/">
              HOME
            </Link>
            <Link
              to="/wishlist"
              style={{ color: "white", textDecoration: "none" }}
            >
              WISHLIST
            </Link>
            <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
              CART
            </Link>
          </div>

          <div className="d-flex flex-column">
            <h4>guides</h4>
            <Link to='https://react-bootstrap.netlify.app/' style={{textDecoration:'none',color:'white'}} target="_blank">
            React
            </Link>
            <Link to='https://react-bootstrap.netlify.app/' style={{textDecoration:'none',color:'white'}} target="_blank">
            React bootstrap 
            </Link>
            <Link to='https://react-bootstrap.netlify.app/' style={{textDecoration:'none',color:'white'}} target="_blank">
            Boots watch
            </Link>
          </div>

          <div className=""> 
            <h4>Contact</h4>
            <div className="d-flex ">
              <input type="text" className="form-control rounded" placeholder="enter email id" />
              <button className="ms-3 w-50 btn btn-warning">Submit</button>
            </div>
           <div className="d-flex justify-content-evenly mt-4" style={{fontSize:'28px'}}>
            <Link style={{textDecoration:'none',color:'white'}} target="_blank"><i class="fa-brands fa-instagram"></i></Link>
            <Link style={{textDecoration:'none',color:'white'}} target="_blank"><i class="fa-brands fa-facebook"></i></Link>
            <Link style={{textDecoration:'none',color:'white'}} target="_blank"><i class="fa-brands fa-x-twitter"></i></Link>
            <Link style={{textDecoration:'none',color:'white'}} target="_blank"><i class="fa-brands fa-github"></i></Link>
           </div>
          </div>
        </div>
       
      </div>
      <p className="text-center text-light fw-bold bg-primary">copyright &#169; 2024 E-kart build with react redux </p>
    </>
  );
}

export default Footer;
