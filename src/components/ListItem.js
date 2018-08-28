import React, { Component } from "react";
import { Text, TouchableWithOutFeedback, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { CardSection } from "./common";

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithOutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleS}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithOutFeedback>
    );
  }
}

const styles = {
  titleS: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
