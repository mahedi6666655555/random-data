import React, { useState } from "react";
const Card = ({ api }) => {
  // let [relode,setRelode]=useState([])

  let relode1 = () => {
    location.reload();
  };
  return (
    <div>
      <h1>{api.id}</h1>
      <h1>{api.brand}</h1>
      <h1>{api.equipment}</h1>
      <h1>{api.uid}</h1>
      <button onClick={relode1}>relode</button>
    </div>
  );
};

export default Card;
