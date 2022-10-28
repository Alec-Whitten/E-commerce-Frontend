import React, { useEffect } from "react";


export default function() {

  useEffect(() =>{fetch("https://adw-e-commerce-backend.herokuapp.com/")})

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
            <td>B1</td>
            <td>&#36;1,800</td>
            <td>Our most basic droid. Best suited for light combat situautions. The B1 operates most effectively in a squad. Its light frame allows it to be deployed in most envirements. all B1s com equiped with the tride and true CIS standard issue battle rifle.</td>
          </tr>
          <tr>
            <td id="b2"></td>
            <td>B2</td>
            <td>&#36;3,000</td>
            <td>More advanced thatn the B1, This model can take hits as well as dish them out. The B2 is equiped with a twin barrled wrist blaster and hevily armored.</td>
          </tr>
          <tr>
            <td id="Droideka"></td>
            <td>Droideka</td>
            <td>&#36;24,000</td>
            <td>One of Our more advanced models. The Droideka has an advanced anti-blaster shield and twin dull blaster cannons. It can easily take down squads single handedly.</td>
          </tr>
        </table>
      </div>
    </div>
  );
}