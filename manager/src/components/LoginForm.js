import React from 'react'
import { connect } from 'react-redux'
import { emailChanged } from '../actions'
import { Card, CardSection, Input, Button } from '../components/common'
import { StyleSheet, Text, View } from 'react-native'

const LoginForm = (props) => {
    const onEmailChange = (text) => {
      props.emailChanged(text);
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
              />
      </CardSection>
          <CardSection>
              <Button>
                  Login
              </Button>
      </CardSection>
    </Card>
  );
}

const mapStateToProps = state => {
    return {
        email: state.auth.email
    }
}

const styles = StyleSheet.create({})
export default connect(mapStateToProps, { emailChanged })(LoginForm)
