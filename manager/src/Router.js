import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
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
          name="employee create"
          component={EmployeeCreate}
          options={{ title: "Create Employee" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Router;
