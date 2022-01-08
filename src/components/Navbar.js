import React from "react";

export default function Navbar() {
  return (
    <div>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="https://allmovieshub.shop">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://google.co.in">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Contact
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Links
          </a>
        </li>
        {/* <li class="nav-item">
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
          >
            Disabled
          </a>
        </li> */}
      </ul>
    </div>
  );
}
