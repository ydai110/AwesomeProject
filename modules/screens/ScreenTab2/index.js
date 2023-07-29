import {connect} from 'react-redux';
import React from 'react';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../redux/actions';
import ScreenTab2View from './view';

const ScreenTab2 = props => {
  function changeReduxStore(userInfo) {
    props.setUserInfo(userInfo);
  }
  console.log(props);
  return <ScreenTab2View {...props} changeReduxStore={changeReduxStore} />;
};

// 将 store 中的状态映射（map）到当前组件的 props 中，这样才能在该组建中访问 redux state
function mapStateToProps(state) {
  return {userInfo: state.reducers.userInfo};
}

// 将 actions 中定义的方法映射到当前组件的 props 中，这样才能在该组建中触发 action
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenTab2);
