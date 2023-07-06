import React from 'react'
import { connect } from 'react-redux'
import { emailChanged } from '../actions'
import { Card, CardSection, Input, Button } from '../components/common'
import { StyleSheet, Text, View } from 'react-native'

const LoginForm = () => {
    const onEmailChange = (text) => {
        onEmailChange(text)
    }
  return (
    <Card>
          <CardSection>
              <Input
                  label="Email"
                  placeholder="email@gmail.com"
                  onChangeText={onEmailChange}
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

const styles = StyleSheet.create({})
export default connect(null, { emailChanged })(LoginForm)
