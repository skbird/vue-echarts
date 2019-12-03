import initData from '../state/detectionDataCockpitState'

export default {
  checkReportData: (state = {...initData.checkReportData}, action) => {
    switch (action.type) {
      case 'getCheckData':
        return action.response;
      default:
        return state;
    }
  }
}