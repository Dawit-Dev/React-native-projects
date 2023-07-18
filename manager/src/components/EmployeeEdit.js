import _ from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Communications from "react-native-communications";
import EmployeeForm from "./EmployeeForm";
import { employeeUpdate, employeeSave } from "../actions";
import { StyleSheet } from "react-native";
import { Card, CardSection, Button } from "./common";

const EmployeeEdit = (props) => {
  useEffect(() => {
    _.each(props.employee, (value, prop) => {
      props.employeeUpdate({ prop, value });
    });
  }, []);

  const onButtonPress = () => {
    const { name, phone, shift } = props;
    props.employeeSave({ name, phone, shift, uid: props.employee.uid });
  };

  const onTextPress = () => {
    const { phone, shift } = props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  };

  return (
    <Card>
      <EmployeeForm />
      <CardSection>
        <Button onPress={onButtonPress}>Save Changes</Button>
      </CardSection>
      <CardSection>
        <Button onPress={onTextPress}>Text Schedule</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.EmployeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(
  EmployeeEdit
);
