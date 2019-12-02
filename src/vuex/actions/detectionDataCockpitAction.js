import initData from '../state/detectionDataCockpitState'

export default {
  detecitonData: (state = {...initData.detecitonData}, action) => {
    switch (action.type) {
      case 'retrieve':
        return action.response;
      default:
        return state;
    }
  }
}
