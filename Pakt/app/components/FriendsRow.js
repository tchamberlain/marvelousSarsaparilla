import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  PropTypes,
  TextInput,
  DatePickerIOS,
  TouchableHighlight,
} from 'react-native';
import Loading from './Loading';

const styles = StyleSheet.create({
  friend: {
    margin: 5,
  },
});

class FriendsRow extends React.Component {
  constructor(props) {
    super(props); 
     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {};
     this.state.dataSource =  ds.cloneWithRows(this.props.friends);
  }

  getInitialState() {
   }

  toggleFriendSelect = (rowData) => {
      const {friends} = this.props;
        //if only one selected friend allowed, de-select other friends
        if (true) {
          friends.forEach(function(x){
            if(x.selected === true){
              x.selected = false;
            }
          }); 
        }
      //if selection allowed
      if ( true ) {
        rowData.selected = !(rowData.selected);
        // this.setState({dataSource: this.state.dataSource.cloneWithRows(
        //  friends
        // )});
        this.forceUpdate();
      }
    }

  //component for displaying friends and highlighting selected friends
  _renderRow (rowData) {

  console.log('&&*&*&*&*&*&**&&*&*&**&*&  0))))do we have anything..?', this);

      return (
      <View>
        <TouchableHighlight onPress = {()=>this.toggleFriendSelect(rowData)} style={styles.friend}>
          <Image source={{uri: rowData.picture}} style={{width: 36, height: 36, borderRadius:18, borderWidth: 1, borderborderColor: (rowData.selected) ? 'blue' :'green'}}  />
        </TouchableHighlight>
          <Text style={{color: (rowData.selected) ? 'blue' :'black'}}>{rowData.name}</Text>
    </View>
    );
  }

  render() {
    // const {friends} = this.props;
    // let dataSource = new ListView.DataSource({
    //   rowHasChanged: (row1, row2) => row1 !== row2,
    // });      
    // dataSource = dataSource.cloneWithRows(friends);
    console.log('do we have a ds???????????',this.state.dataSource)
    return (
      <View>
      <ListView
        horizontal ='true'
        dataSource={this.state.dataSource}
        renderRow={(rowData)=> this._renderRow( rowData, this.props.friends)}

         />
      </View>
    );
  }
};

module.exports = FriendsRow;