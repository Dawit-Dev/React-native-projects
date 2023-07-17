import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Actions } from "@react-native-router/flux";
import { CardSection } from "./common";

const ListItem = (props) => {
  const onRowPress = () => {
    Actions.employeeCreate({ employee: props.employee });
  };
  const { name } = props.employee;

  return (
    <TouchableWithoutFeedback onPress={onRowPress}>
      <View>
        <CardSection>
          <Text style={styles.titleStyle}>{name}</Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

export default ListItem;
