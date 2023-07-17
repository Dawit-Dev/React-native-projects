import React from 'react'
import { connect } from 'react-redux'
import EmployeeForm from './EmployeeForm'
import { StyleSheet, Text, View } from 'react-native'
import { Card, CardSection, Button } from './common'

const EmployeeEdit = () => {
  return (
      <Card>
          <EmployeeForm />
          <CardSection>
              <Button>
                  Save Changes
              </Button>
          </CardSection>
    </Card>
  )
}

const styles = StyleSheet.create({})

export default connect()(EmployeeEdit)
