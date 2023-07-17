import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CardSection } from "./common";

const ListItem = () => {
  const { name } = props.employee;

  return (
    <CardSection>
      <Text style={styles.titleStyle}>{name}</Text>
    </CardSection>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

export default ListItem;
