import React from "react";
import ItemDetailCard from "../components/ItemDetailCard";

const ItemDetail = ({ route }) => {
  const { item } = route.params;

  return <ItemDetailCard item={item} />;
};

export default ItemDetail;
