const initDataPage = {
  status: 1,
  pageNum: 1,
  numPerPage: 10,
};

const initDataRetrieve = {
    page: {},
    results: [],
    params: {
        ...initDataPage
    }
};

const initData = (options) => {
    if(!options) {
        return initDataRetrieve;
    }

    return Object.assign({}, initDataRetrieve, {
        params: Object.assign({}, initDataRetrieve.params, options)
    });
}

export {
  initDataPage, initDataRetrieve, initData
}
