import React, { useEffect, useState } from "react";
import Card from "../card/Card";

const Api = () => {
  let [api, setAis] = useState([]);

  useEffect(() => {
    fetch("https://random-data-api.com/api/v2/appliances")
      .then((res) => res.json())
      .then((data) => setAis(data));
  }, []);

  return (
    <div>
      <Card
      api={api}

      ></Card>
    </div>
  );
};

export default Api;
