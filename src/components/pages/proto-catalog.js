import React, { useState, useEffect } from "react";


export default function() {
    const [initialData, setInitialData] = useState([{}])

  useEffect(() =>{
    fetch("https://adw-e-commerce-backend.herokuapp.com/data").then(
        respone => respone.json()
    ).then(data => setInitialData(data))})

  return (
    <div>
      <div class="header">
        <h1>Droids For Sale:</h1>
      </div>
      <div class="catalog_body">
        <table>
          <tr>
            <td>Model Image</td>
            <td>Model</td>
            <td>Price(USD)</td>
            <td>Description</td>
          </tr>
          <tr>
            <td id ="b1"></td>
            <td>{initialData.productName1}</td>
            <td>&#36;{initialData.price1}</td>
            <td>{initialData.description1}</td>
          </tr>
          <tr>
            <td id="b2"></td>
            <td>{initialData.productName2}</td>
            <td>&#36;{initialData.price2}</td>
            <td>{initialData.description2}</td>
          </tr>
          <tr>
            <td id="Droideka"></td>
            <td>{initialData.productName3}</td>
            <td>&#36;{initialData.price3}</td>
            <td>{initialData.description3}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}