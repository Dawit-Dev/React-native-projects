import React from "react";
import { Card, CardSection, Input, Button } from "./common";

const EmployeeCreate = () => {
  return (
    <Card>
      <CardSection>
        <Input label="Name" placeholder="Dawit" />
      </CardSection>
      <CardSection>
        <Input label="Phone" placeholder="333-666-999" />
      </CardSection>
      <CardSection></CardSection>
      <CardSection>
        <Button>Create</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default EmployeeCreate;
