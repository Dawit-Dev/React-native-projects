import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Picker } from "@react-native-picker/picker";
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input, Card } from './common';

const EmployeeForm = () => {
  return (
    <View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
});

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.EmployeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm)
