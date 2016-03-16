import React, {
  StyleSheet,
  Component,
  View,
  Text,
  Navigator,
  TouchableOpacity
} from 'react-native';
var PaktView = require('./paktcomponent');
var LoginPage = require('./Login');
var PaktListPage = require('./PaktList');


const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'lightgray',
    flex: 1,
    flexDirection:'row'
  },
  navItem: {
    flex: .33,
    margin: 25
  }
});

export default class Counter extends Component {
  constructor(props) {
    super(props);
  } 

  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'LoginPage') {
      return (
        <LoginPage
          navigator={navigator} />
      );
    } else if (routeId === 'CreatePage') {
      return (
        <CreatePage
          navigator={navigator} />
      );
    } else if (routeId === 'SinglePaktPage') {
      return (
        <MainPage
            navigator={navigator} />
      );
    } else if (routeId === 'CameraPage') {
      return (
        <MainPage
            navigator={navigator} />
      );
    } else if (routeId === 'PaktListPage') {
      return (
        <PaktListPage
          navigator={navigator} />
      );
    } else {
      //do we need a page for the 'otherwise' case?? 
      return this.noRoute(navigator);
    }
  }

   handlePress(){
        navigator.push({
            id: 'PaktListPage',
          });
    }

  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <View style={{flex: 1}}>
        <Navigator style={{flex: .9}}
          initialRoute={{id: 'LoginPage'}}
          renderScene={this.renderScene.bind(this)}
        />
        <View style={{flex: .1}}>
         <View style= {styles.navBar}> 
            <Text style={styles.navItem} onPress={this.handlePress}>Pakts</Text>
            <Text style={styles.navItem} onPress={this.handlePress}>Camera</Text>
            <Text style={styles.navItem} onPress={this.handlePress}>Something else?</Text>
         </View>
        </View>
      </View>
    );
  }
}