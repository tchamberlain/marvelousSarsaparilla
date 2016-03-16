import React, {
  StyleSheet,
  Component,
  View,
  Text,
  Navigator,
  TouchableOpacity
} from 'react-native';


var LoginPage = React.createClass({
  handlePress(){
        this.props.navigator.push({
            id: 'PaktListPage',
          });
    },
  render() {
    return (
      <View>
           <Text onPress={this.handlePress}>My Pakts</Text>
    </View>
    );
  }

});

module.exports = LoginPage;