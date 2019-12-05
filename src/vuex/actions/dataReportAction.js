import initData from '../state/detectionDataCockpitState'

export default {
  topContentData: (state = {...initData.riskCountReportData}, action) => {
    switch (action.type) {
      case 'getTopContent':
        return action.response;
      default:
        return state;
    }
  },
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
  },
  monthComplaintReportData: (state = {...initData.monthComplaintReportData}, action) => {
    switch (action.type) {
      case 'getMonthComplaintReportData':
        return action.response;
      default:
        return state;
    }
  },
  dataReportProductPage: (state = {...initData.dataReportProductPage}, action) => {
    switch (action.type) {
      case 'retrieve':
        state = Object.assign({}, state, action.response);
        return Object.assign({}, state, {
          params: {...action.params}
        });
      default:
        return state;
    }
  },
  dataReportSupplierPage: (state = {...initData.dataReportSupplierPage}, action) => {
    switch (action.type) {
      case 'retrieve':
        state = Object.assign({}, state, action.response);
        return Object.assign({}, state, {
          params: {...action.params}
        });
      default:
        return state;
    }
  },
}
