import React from "react";
const Card = ({api}) => {
    console.log(api);
  

  console.log(api);

  return (
    <div>
      <h1>{api.id}</h1>
      <h1>{api.brand}</h1>
      <h1>{api.equipment}</h1>
      <h1>{api.uid}</h1>
    </div>
  );
};

export default Card;
