import React from "react";
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../actions";
import { Card, CardSection, Button } from "./common";
import EmployeeForm from "./EmployeeForm";

const EmployeeCreate = (props) => {
    const onButtonPress = () => {
        const { name, phone, shift } = props;
        props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }
  return (
    <Card>
      <EmployeeForm {...props} />
      <CardSection>
        <Button onPress={onButtonPress()}>Create</Button>
      </CardSection>
    </Card>
  );
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
