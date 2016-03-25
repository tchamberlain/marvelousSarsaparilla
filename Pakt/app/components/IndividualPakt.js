import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  PropTypes,
  TouchableHighlight,
  Alert,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  heading: {
    flex: .1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  body: {
    flex: .9,
  },
  subtitle: {
    fontSize: 30,
    // flex: .8,
  },
  back: {
    marginRight: 12,
  },
});

const IndividualPakt = ({ currentPakt, respondtoInvite, accepted, currentUserId }) => (
  <View style={styles.container}>
    <View style={styles.heading} >
      <Image style={styles.back} source={{uri: 'http://uxrepo.com/static/icon-sets/ionicons/svg/chevron-left.svg'}} style={{width: 25, height: 25}}  />
      <Text style={styles.subtitle}>{currentPakt.name}</Text>
    </View>
    <View style={styles.body} >
      <Text>{currentPakt.description}</Text>
      {(accepted) ? null :
        <View>
          <TouchableHighlight onPress={() => respondtoInvite(true, currentUserId, currentPakt.id)}><Text>Accept</Text></TouchableHighlight>
          <TouchableHighlight onPress={() => Alert.alert(
            'Are you sure you want to decline this Pakt',
            null,
            [
              { text: 'Cancel' },
              { text: 'OK', onPress: () => respondtoInvite(false, currentUserId, currentPakt.id) },
            ]
          )
          }><Text>Decline</Text></TouchableHighlight>
        </View>
        }
      </View>
  </View>
);

export default IndividualPakt;
