import { useState, useEffect } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";

const Options = ({ optionsType }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionsType}`)
      .then((res) => setItems(res.data))
      .catch((e) => {
        console.log(e);
      });
  }, [optionsType]);

  const ItemComponent = optionsType === "scoops" ? ScoopOption : ToppingOption;
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
};

export default Options;
