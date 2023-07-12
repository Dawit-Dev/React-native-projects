import React from "react";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import {
  Card,
  CardSection,
  Input,
  Button,
  Spinner,
} from "../components/common";
import { StyleSheet, View, Text } from "react-native";

const LoginForm = (props) => {
  const onEmailChange = (text) => {
    props.emailChanged(text);
  };

  const onPasswordChange = (text) => {
    props.passwordChanged(text);
  };

  const onButtonPress = () => {
    const { email, password } = props;
    props.loginUser({ email, password });
  };
    
    const renderButton = () => {
        if (props.loading) {
            return <Spinner size='large' />
        }
        return <Button onPress={onButtonPress}>Login</Button>;
    }

  const renderError = () => {
    if (props.error) {
      return (
        <View style={{ backgroundColor: "white" }}>
          <Text style={styles.errorTextStyle}>{props.error}</Text>
        </View>
      );
    }
  };

  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="email@gmail.com"
          onChangeText={onEmailChange}
          value={props.email}
        />
      </CardSection>
      <CardSection>
        <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          onChangeText={onPasswordChange}
          value={props.password}
        />
      </CardSection>

      {renderError()}

          <CardSection>
              {renderButton()}
      </CardSection>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
  };
};

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 21,
    alignSelf: "center",
    color: "red",
  },
});

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);
