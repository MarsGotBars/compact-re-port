import React from "react";
import "./card.css";
export default function Card() {
  return (
    <main>
      <button>
        see more
      </button>
      {/* functies toevoegen om over te switchen */}
      <div>
        <div>
          <h1>Marcin</h1>
          <h2>Developer</h2>
        </div>
        <figure>
          <img src="" alt="" />
        </figure>
      </div>
      <article>
        {/* list with title? */}
        <ul>
          <li>Zwemmen</li>
          <li>Golf</li>
          <li>Gym</li>
        </ul>
      </article>
      <div>
        {/* this div should be hidden first */}
        <h3>Code gerelateerde vaardigheden</h3>
        {/* graphs or circles? */}
      </div>
    </main>
  );
}
