// 初始化 state 放在这里
const initialState = {
  userInfo: {
    name: '小光',
    gender: '男',
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_INFO':
      action.userInfo = Object.assign({}, state.userInfo, action.userInfo);
      return Object.assign({}, state, {userInfo: action.userInfo});
    case 'CLEAR_REDUX_STORE':
      return {userInfo: {}};
    default:
      return state;
  }
}

export default reducer;
