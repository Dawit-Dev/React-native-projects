import _ from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
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
    const { name, phone, shift } = props
    props.employeeSave({ name, phone, shift, uid: props.employee.uid })
}

  return (
    <Card>
      <EmployeeForm />
      <CardSection>
        <Button onPress={onButtonPress}>Save Changes</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.EmployeeForm

  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
