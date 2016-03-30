import { connect } from 'react-redux';
import { respondToPaktInvite, setSelectedUser } from '../actions';
import IndividualPakt from '../components/IndividualPakt';
var _ = require('lodash');

const mapStateToProps = (state) => {
  return {
    currentPakt: state.pakts.currentPakt,
    currentUserId: state.users.currentUser.id,
    accepted: state.pakts.currentPakt.Pakt_User.accepted,
    paktPictures: state.pakts.currentPakt.Pictures,
    selectedUser: state.users.selectedUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    respondtoInvite: (accepted, currentUserId, currentPaktId) => {
      dispatch(respondToPaktInvite(accepted, currentUserId, currentPaktId));
    },
    setSelectedUser: (userId) => {
      dispatch(setSelectedUser(userId));
    },
  };
};

const GetCurrentPakt = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualPakt);

export default GetCurrentPakt;
