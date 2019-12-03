import Vue from 'vue'
import Vuex from 'vuex'
import 'isomorphic-fetch'

import ajaxAction from './actions/ajaxAction';
import ajaxState from './state/ajaxState';
import detectionDataCockpitAction from './actions/detectionDataCockpitAction';
import detectionDataCockpitState from './state/detectionDataCockpitState';
import dataReportAction from './actions/dataReportAction';
import dataReportSate from './state/dataReportSate';

const reducers = {
  ...detectionDataCockpitAction,
  ...ajaxAction,
  ...dataReportAction,
}

const state = {
  ...detectionDataCockpitState,
  ...ajaxState,
  ...dataReportSate,
}

const mutations = {
  AJAXRESPONSE(state, action) {
    if (!action.state) {
      return;
    }

    let actionState = action.state;
    if (typeof actionState == 'string') {
      actionState = [actionState];
    }

    if ('[object Array]' == Object.prototype.toString.call(actionState)) {
      actionState.map((item) => {
        let subState = eval('state.' + item);
        let result = eval('reducers.' + item + '(subState, action)');
        eval('state.' + item + ' = result');
      })
    } else {
      throw 'Action.state only to be array or string, can not be ' + typeof actionState;
    }
  }
}

const actions = {
  ajaxRequest(context, actions) {
    const {
      state,
      type,
      url,
      params = {},
      shouldCallAPI = () => true
    } = actions;

    if (!shouldCallAPI(context.state, params)) {
      return;
    }

    if (url) {
      return callApi(url, params).then(
        response => context.commit('AJAXRESPONSE', {
          params: params,
          response: response,
          state: state,
          type: type,
          context: context
        }),
        error => {
          return Promise.reject(error.message || 'Something bad happened');
        }
      );
    } else { //URL not exists, change reducer directly
      return context.commit('AJAXRESPONSE', {
        params: params,
        response: params,
        state: state,
        type: type,
        context: context
      });
    }
  }
}

const doParams = (data, params, prefix) => {
  if (!params) {
    return;
  }

  if ('[object Object]' == Object.prototype.toString.call(params)) {
    for (let objName in params) {
      if (!params[objName]) {
        continue;
      }
      if (typeof params[objName] != 'object') {
        let tmpObjName = parseInt(objName);
        if (isNaN(tmpObjName)) {
          data.append(prefix + (prefix ? '.' : '') + objName, params[objName]);
        } else {
          data.append(prefix + (prefix && 0 <= prefix.indexOf('.') ? '[' + objName + ']' : ''), params[objName]);
        }
      } else {
        let tmpObjName = parseInt(objName);
        if (isNaN(tmpObjName)) {
          doParams(data, params[objName], prefix + (prefix ? '.' : '') + objName);
        } else {
          doParams(data, params[objName], prefix + (prefix ? '[' + objName + ']' : ''));
        }
      }
    }
  } else if ('[object Array]' == Object.prototype.toString.call(params)) {
    for (let i = 0; i < params.length; i++) {
      if (!params[i]) {
        continue;
      }

      if (typeof params[i] != 'object') {
        data.append(prefix + (prefix && 0 <= prefix.indexOf('.') ? '[' + i + ']' : ''), params[i]);
      } else {
        doParams(data, params[i], prefix + (prefix ? '[' + i + ']' : ''))
      }
    }
  } else {
    data.append(prefix, params);
  }
}

const callApi = (url, params) => {
  var data = new FormData();
  if (params) {
    doParams(data, params, '');
  }

  let fetchParams = {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    body: data
  };
  let completeUrl = url;
  if (0 != completeUrl.toLowerCase().indexOf('http')) {
    completeUrl = process.env.SERVER_URL + url;
  }
  return fetch(completeUrl, fetchParams)
    .then((response) => {
      return response.json().then(json => ({json, response}))
    }).then(({json, response}) => {
      if (!response.ok || !json) {
        return Promise.reject({message: "网络异常"});
      }
      if (json.code == 0) {
        return json.data;
      }
      if (!json.data) {
        json.data = '未知异常';
      }
      return Promise.reject({
        code: json.code,
        message: json.data
      });
    });
};

const showLogs = store => {
  store.subscribe((mutation, state) => {
    if ('development' == process.env.NODE_ENV) {
      console.log('vuex => ', mutation, state)
    }
  })
}

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [showLogs]
})
