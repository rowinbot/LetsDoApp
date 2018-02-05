import SignIn from './SignIn'
import { connect } from 'react-redux';

import withBackHandler from '../backHandler';

function mapStateToProps(state) {
  return {
    ui: state.colors.ui
  };
}

export default connect(
  mapStateToProps
)(withBackHandler(SignIn));