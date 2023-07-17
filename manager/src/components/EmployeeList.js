import _ from "lodash";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, ListView } from "react-native";
import { employeesFetch } from "../actions";
import ListItem from './ListItem'

const EmployeeList = (props) => {
  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    props.employeesFetch();
  }, []);

  useEffect(() => {
    createDataSource(props);
  }, [props.employees]);

  const createDataSource = ({ employees }) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    setDataSource(ds.cloneWithRows(employees));
  };

  if (!dataSource) {
    return <Text>Loading...</Text>;
  }

  renderRow = (employee) => {
    return <ListItem employee={employee} />;
  };

  return (
    <ListView
      enableemptySections
      dataSource={dataSource}
      renderRow={renderRow}
    />
  );
};

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

const styles = StyleSheet.create({});

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
