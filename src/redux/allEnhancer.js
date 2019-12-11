
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import actions from './actions'

const mapState = (state, ownProps) => ({ ...state })

const mapDispatch = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)