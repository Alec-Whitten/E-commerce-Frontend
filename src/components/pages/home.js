import React from "react";
import { NavLink } from "react-router-dom";

export default function() {
  return (
    <div>
      <div class="header">
        <h1>CIS Military Wares</h1>
      </div>

      <div class="body-info">
        <p>Are you a company in need of security? Why go through an expensive agency with unreliable human workers when you could join the wave of automation sweeping the galaxy? 
          Imagine having reliable 24/7 security at a fraction of the cost. Our droids never tire, or have monthly wages. They also dont sue for on the job injuries.
          Weither you just need a hand fun of B1s for perimeter defense, or a Droideka to keep unwanted theives and militia away, we have it all.
          What are you waiting for? Secure your buisness today!
        </p>

        <div class="gap"/>

        <p>Our droids await you:<NavLink to="/catalog" id="catalog_body_link"> catalog</NavLink>
        </p>
      </div>
    </div>
  );
}