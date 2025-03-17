import React from 'react';
import Swal from 'sweetalert2';
import './Cart.css';

const Cart = () => {
  const price=29000;
  
  const handleBuyNow = () => {
    Swal.fire({
      title: "Confirm Purchase",
      text: `Are you sure you want to buy this item? where price is ${price}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Buy it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Purchased!",
          "Your item has been successfully purchased.",
          "success"
        );
      }
    });
  };

  return (
    <div className="product-card">
      <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="Product" />
      <h3>Camnon Digital Camera</h3>
      <p><strong>Rs. {price} </strong></p>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
};

export default Cart;
