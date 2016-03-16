import React, {
  StyleSheet,
  Component,
  View,
  Text,
  Navigator,
  TouchableOpacity
} from 'react-native';

export default class PaktListPage extends Component {
  constructor(props) {
    super(props);
  }

  handlePress(){
     this.props.navigator.push({
          id: 'PaktList',
        });
  }
  render() {
    return (
      <View>
        <Text>Pakt leeest haaaaaay</Text>
          <Text onPress={this.handlePress.bind(this)} style={{backgrondColor: 'yellow', color: 'green'}}>hmm</Text>
    </View>
    );
  }
}

module.exports = PaktListPage;