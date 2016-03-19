import { connect } from 'react-redux';
// import { fetchPaktsIfNeeded } from '../actions'
import CreatePaktForm from '../components/CreatePaktForm';


//EVENTUALLY WE NEED TO GIVE THE USER'S FACEBOOK FRIENDS AS A PROP
// function mapStateToProps(state) {
//   return {
//       ...state
//   };
// }

function mapDispatchToProps() {
  return {
    handleSubmit: (thing) => {
      console.log(thing, 'heres the form thing i guess');    
    },
  };
}

const CreatePakt = connect(
  mapDispatchToProps,
  null
)(CreatePaktForm);


export default CreatePakt;
