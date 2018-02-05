import SignUp from './SignUp'
import { connect } from 'react-redux';
import { changeColor } from '../../actions/colors'

function mapStateToProps(state) {
  return {
    ui: state.colors.ui,
    routes: state.routes
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeUserType: color => {
      dispatch(changeColor(color))
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);