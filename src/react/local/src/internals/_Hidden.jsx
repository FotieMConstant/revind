import React from "react";
import Hidden from "../../../components/Hidden/Hidden";

function _Hidden() {
  return (
    <>
      <b>Below paragraph is hidden</b>
      <Hidden>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero omnis
          officiis magnam id nobis nisi consequuntur quam dolores sequi blanditiis rem
          quasi quos repellendus, repudiandae accusantium, voluptatibus velit.
          Perspiciatis et, reprehenderit iste architecto quisquam laborum consequatur
          dolor molestiae libero voluptate, porro quo laudantium nostrum cum aut expedita.
          Culpa, perferendis!
        </p>
      </Hidden>
      <Hidden hover md all={false}>
        <button>This should be invisible above md</button>
      </Hidden>
    </>
  );
}

export default _Hidden;
