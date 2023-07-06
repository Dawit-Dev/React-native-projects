import React from 'react'
import { Card, CardSection, Input, Button } from '../components/common'
import { StyleSheet, Text, View } from 'react-native'

const LoginForm = () => {
  return (
    <Card>
          <CardSection>
              <Input
                  label="Email"
                  placeholder="email@gmail.com"
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
export default LoginForm
