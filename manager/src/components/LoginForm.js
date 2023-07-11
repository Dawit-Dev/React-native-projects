import React from 'react'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, Button } from '../components/common'
import { StyleSheet } from 'react-native'

const LoginForm = (props) => {
    const onEmailChange = (text) => {
      props.emailChanged(text);
    };

    const onPasswordChange = (text) => {
        props.passwordChanged(text)
    }

    const onButtonPress = () => {
        const { email, password } = props
        props.loginUser({ email, password })
    }

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
          <CardSection>
              <Button onPress={onButtonPress}>
                  Login
              </Button>
      </CardSection>
    </Card>
  );
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}

const styles = StyleSheet.create({})
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)
