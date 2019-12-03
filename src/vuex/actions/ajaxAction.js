import initData from '../state/ajaxState'

export default {
  checkData: (state = {...initData.checkData}, action) => {
    switch (action.type) {
      case 'checkReportData':
        return action.response;
      default:
        return state;
    }
  }
}
