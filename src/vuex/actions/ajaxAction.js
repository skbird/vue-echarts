import initData from '../state/ajaxState'

export default {
  checkData: (state = {...initData.checkData}, action) => {
    switch (action.type) {
      case 'retrieve':
        return action.response;
      default:
        return state;
    }
  }
}