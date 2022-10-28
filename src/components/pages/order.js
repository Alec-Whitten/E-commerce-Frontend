import React from "react";

export default function() {
  const axios = require("axios");
  const API_KEY = "ef170af5c4a4921fa4b6f97e7864b9c72a9216670ae8d3708ed2405fa9c54fdc";
  const id = "6fa2b8a7-5ff8-4a80-bcf6-e7eb360a9105";
  const address = "6fa2b8a7-5ff8-4a80-bcf6-e7eb360a9105@mailslurp.com";

  async function handleOnSubmit(e){
    e.preventDefault();
    await axios({
      method: "POST",
      url: `https://api.mailslurp.com/sendEmail?apiKey=${API_KEY}`,
      data: {
        senderId: id,
        to: address,
        subject: "Order for: " + document.getElementById('name').value,
        body: "Customer: " + document.getElementById('name').value + "<br>"
          + "email: " + document.getElementById('email').value + "<br>"
          + "Phone#: " + document.getElementById('phone').value + "<br>"
          + "Number of B1s requested: " + document.getElementById('b1_quantity').value + "<br>"
          + "Number of B2s requested: " + document.getElementById('b2_quantity').value + "<br>"
          + "Number of Droikas requested: " + document.getElementById('Droidikas_quantity').value,
      },
    })
    document.getElementById('form').reset()
  }
  return (
    <div>
      <div class="header">
        <h1 id="order_header">Order Form:</h1>
      </div>

      <div id="order_form">
        <form id="form" method="post" onSubmit={handleOnSubmit}>
            <div class="field">
                <h2>Buyer Contact Information:</h2>
                <label for="name">Name: </label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required/>
                <small></small>
            </div>
            <div class="field">
                <label for="email">Email: </label>
                <input type="text" id="email" name="email" placeholder="Enter your email address" required/>
                <small></small>
            </div>
            <div class="field">
                <label for="phone">Phone Number: </label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                <small></small>
            </div>
            <div class="field">
                <h2>Quantity of Products:</h2>
                <label for="b1_quantity">B1s (max of 100): </label>
                <input type="number" id="b1_quantity" name="b1_quantity" placeholder="0" min="0" max="100" />
            </div>
            <div class="field">
                <label for="b2_quantity">B2s (max of 50): </label>
                <input type="number" id="b2_quantity" name="b2_quantity" placeholder="0" min="0" max="50" />
            </div>
            <div class="field">
                <label for="Droidikas_quantity">Droidikas (max of 10): </label>
                <input type="number" id="Droidikas_quantity" name="Droidikas_quantity" placeholder="0" min="0" max="10" />
            </div>

            <input id="submit_button" type="submit" name="submit" value="Send Order"/>
        </form>
      </div>
      <div class="lower_body">
        <p>
            Once submitted a sales representive will reach out to you about your order
            in 3-5 buisness days.
        </p>
      </div>
    </div>
    
  );
}