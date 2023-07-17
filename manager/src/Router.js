import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeEdit from "./components/EmployeeEdit";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="employee create">
        <Stack.Screen
          name="login"
          component={LoginForm}
          options={{ title: "Please Login" }}
        />
        <Stack.Screen
          onRight={() => {
            EmployeeCreate();
          }}
          rightTitle="Add"
          name="employees"
          component={EmployeeList}
          options={{ title: "Employee List" }}
        />
        <Stack.Screen
          name="employeeCreate"
          component={EmployeeCreate}
          options={{ title: "Create Employee" }}
        />
        <Stack.Screen
          name="employeeEdit"
          component={EmployeeEdit}
          options={{ title: "Edit Employee" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Router;
