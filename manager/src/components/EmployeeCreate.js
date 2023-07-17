import React from "react";
import { StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../actions";
import { Card, CardSection, Input, Button } from "./common";

const EmployeeCreate = (props) => {
    const onButtonPress = () => {
        const { name, phone, shift } = props;
        props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }
  return (
    <Card>
      <CardSection>
        <Input
          label="Name"
          placeholder="Dawit"
          value={props.name}
          onChangeText={(value) =>
            props.employeeUpdate({ prop: "name", value })
          }
        />
      </CardSection>
      <CardSection>
        <Input
          label="Phone"
          placeholder="333-666-999"
          value={props.phone}
          onChangeText={(value) =>
            props.employeeUpdate({ prop: "phone", value })
          }
        />
      </CardSection>
      <CardSection>
        <Text style={styles.pickerTextStyle}>Shift</Text>
        <Picker
          style={{ flex: 1 }}
          selectedValue={props.shift}
          onValueChange={(value) =>
            props.employeeUpdate({ prop: "shift", value })
          }
        >
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardSection>
      <CardSection>
        <Button onPress={onButtonPress()}>Create</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
});

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
