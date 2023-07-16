import React from "react";
import { connect } from "react-redux";
import { employeeUpdate } from "../actions";
import { Card, CardSection, Input, Button } from "./common";

const EmployeeCreate = () => {
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
      <CardSection></CardSection>
      <CardSection>
        <Button>Create</Button>
      </CardSection>
    </Card>
  );
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
