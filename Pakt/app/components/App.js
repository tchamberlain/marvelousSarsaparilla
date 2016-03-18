import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  PropTypes,
} from 'react-native';
import SwitchRoute from '../containers/SwitchRoute';
import Login from './Login';
import GetPakts from '../containers/GetPakts';
import CreatePakt from '../containers/CreatePakt';

import {Scene, Router, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'

const scenes = Actions.create(
  <Scene  key="root">
    <Scene type="replace" key="login" initial={true} component={Login} title="Login"/>
    <Scene key="createPakt" type="replace" component={CreatePakt} title="CreatePakt"/>
    <Scene key="paktList" type="replace" component={GetPakts} title="PaktList"/>
    {/*<Scene key="camera" type="replace" component={Camera} title="Camera"/>*/}
  </Scene>
);

const App = () => (
  <View style={{flex: 1}}>
    <Router style={{flex: .4}} scenes={scenes}/>
    <View style={{flex: .1}}>
      <SwitchRoute/> 
    </View>
  </View>
)

export default App;
