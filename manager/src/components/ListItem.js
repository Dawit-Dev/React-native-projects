 import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CardSection } from "./common";

const ListItem = (props) => {
  const navigation = useNavigation();

  const onRowPress = () => {
    navigation.navigate("employeeEdit", { employee: props.employee });
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
