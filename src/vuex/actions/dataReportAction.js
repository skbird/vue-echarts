import initData from '../state/detectionDataCockpitState'

export default {
  checkReportData: (state = {...initData.checkReportData}, action) => {
    switch (action.type) {
      case 'getCheckData':
        return action.response;
      default:
        return state;
    }
  },
  checkBatchesData: (state = {...initData.checkReportData}, action) => {
    switch (action.type) {
      case 'getCheckBatches':
        return action.response;
      default:
        return state;
    }
  },
  riskCountReportData: (state = {...initData.riskCountReportData}, action) => {
    switch (action.type) {
      case 'getRiskCountReport':
        return action.response;
      default:
        return state;
    }
  }
}
