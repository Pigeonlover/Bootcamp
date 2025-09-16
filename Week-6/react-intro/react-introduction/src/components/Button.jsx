import React from "react";
import "./Button.css";

export default function Button() {
  return (
    <div>
      <button className="main-button">Clickity-click</button>
    </div>
  );
}

// In-line styling: if you just need to style one little thing, and don't want to add a whole new CSS file.
// We can do that with Tailwind. It's a package we can install to do direct styling in the HTML/JSX file
