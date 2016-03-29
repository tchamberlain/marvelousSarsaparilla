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
  ScrollView,
  Alert,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 65,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
  },
  pictureContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  heading: {
    marginTop: 15,
    fontSize: 22,
    justifyContent:'center',
  },
  subheading: {
    marginTop: 20,
    marginBottom: 4,
    fontSize: 15,
    justifyContent:'center',
  },
});

class PaktPics extends Component {
  constructor(props) {
    super(props);
  }

  renderPicsView() {
    const { paktPictures } = this.props;
    let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    dataSource = dataSource.cloneWithRows(paktPictures);

    return (
      <View>
        {paktPictures.length > 0 ? <Text style={styles.subheading}>Pictures:</Text> : null}
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) => <Image source={{uri: 'https://s3-us-west-1.amazonaws.com/pakt-test/' + rowData.path}}
                                     style={{width: 50, height: 50}} /> }
        />
      </View>
    );
  }

  render() {
    return this.renderPicsView();
  }

}

const IndividualPakt = ({ currentPakt, respondtoInvite, accepted, currentUserId, paktPictures }) => (
  <View style={styles.container}>
    <ScrollView
    // as boggs what this is here for 
      // ref={(scrollView) => { _scrollView = scrollView; }}
      automaticallyAdjustContentInsets={false}
      onScroll={() => { console.log('onScroll!'); }}
      scrollEventThrottle={200}
    >
        <Header open={currentPakt.open}  win={currentPakt.Pakt_User.win} paktName={currentPakt.name}/>
        <Text style={styles.subheading}>{currentPakt.description}</Text>
      <View>
        {(accepted) ? <PaktPics paktPictures={paktPictures} /> :
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

            <ShowFriends open={currentPakt.open} friends={currentPakt.Users}/>
          </View>
          }
      </View>
    </ScrollView>
  </View>
);

class ShowFriends extends React.Component {
  render(){
    const {open, friends} = this.props;
    //SWIIIIIIIIITCH THIS WHEN OPEN BECOMES THE DEEEEEFAUUUUUULLLLLT
    return (open === true) ? <FriendsView title={'Friends:'} friends={friends}/> : <WinnersLosersView friends={friends}/>;
  }
}

class FriendsView extends React.Component {
  render() {
    const {friends, title} = this.props;
    let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });      
    dataSource = dataSource.cloneWithRows(friends);
    return (
      <View>
        <Text style={styles.subheading}>{title}</Text>
        <ListView
          horizontal ='true'
          dataSource={dataSource}
          renderRow={(rowData) => <TabIcon rowData = {rowData} selected = {!rowData.invited} name = {rowData.name}></TabIcon>}
           />
      </View>
    );
  }
};

class WinnersLosersView extends React.Component {
  constructor(props) {
    super(props);
    const {friends} =  this.props;
    //make winners and losers array from the friends array
    this.state = {};
    this.state.losers = friends.filter(function(x){return x.Pakt_User.win === false});
    this.state.winners = friends.filter(function(x){return x.Pakt_User.win === true});
  }
  render(){
    return (
      <View>
        <FriendsView friends={this.state.winners} title={'Winners:'}/>
        <FriendsView friends={this.state.losers} title={'Losers:'}/>
      </View>
    );  
  };
}

// component for displaying friends and highlighting invited friends
class FriendIcon extends React.Component {
  togglFriendSelect = (friend) => {
    friend.invited = !(friend.invited);
    this.forceUpdate()
  }
    render(){
        return (
          <View>
            <TouchableHighlight onPress = {()=>this.toggleFriendInvite(this.props.rowData)} style={styles.friend}>
              <Image source={{uri: this.props.rowData.picture}} style={{width: 36, height: 36, borderRadius:18, borderWidth: 1, borderColor: (this.props.rowData.invited) ? 'blue' :'green'}}  />
            </TouchableHighlight>
              <Text style={{color: (this.props.rowData.invited) ? 'blue' :'black'}}>{this.props.name}</Text>
        </View>
        );
    }
}

class Header extends React.Component {
  renderWinLossHeading() {
    const { win, paktName } = this.props;
    return (
      win ? 'You won '+ paktName + '!' : 'You lost ' + paktName
    );
  }

  render(){
    const {open, paktName} = this.props;
      return (
        <View>
          <Text style={styles.heading}>{ open ? paktName : this.renderWinLossHeading() }</Text> 
       </View>
      );
  }
}

export default IndividualPakt;
