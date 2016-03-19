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
  TouchableHighlight,
} from 'react-native';

import { Field } from 'react-redux-form/lib/native';

// const isRequired = (value) => !validator.isNull(value);

class CreatePaktForm extends React.Component {
    componentDidMount() {
    this.props.listThePakts();
  }

  render() {

    return (
      <form> 
        <Field model="user.name">
          <TextInput />
        </Field>
      </form>
    );
  }
}
export default CreatePaktForm;
