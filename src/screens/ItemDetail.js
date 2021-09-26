import React from "react";
import { View, Text } from "react-native";

const ItemDetail = ({ route }) => {
  const { item } = route.params;
  console.log(item);
  return (
    <View>
      <Text>{item.id}</Text>
    </View>
  );
};

export default ItemDetail;
