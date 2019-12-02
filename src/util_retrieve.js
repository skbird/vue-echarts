const calHeight = (self) => {
    let documentHeight = document.body.offsetHeight;
    let headerHeight = self.$refs.headerSearch.$el.offsetHeight;

    let elTable = self.$refs.table.$el;
    elTable.style.height = (documentHeight - 204 - headerHeight) + 'px';

    let innerHeight = documentHeight - 240 - headerHeight;

    let bodyWrapper = elTable.children[2];
    if (bodyWrapper) {
        bodyWrapper.style.height = innerHeight + 'px';
    }
    let fixedBodyWrapper = elTable.children[3].children[1];
    if (fixedBodyWrapper) {
        fixedBodyWrapper.style.height = innerHeight + 'px';
    }
};

const refresh = async (self, force) => {
    let {doException, myEqual, timeout} = self.Util;

    force = true === force ? true : false;
    self.loading = true;
    let {beanName} = self;
    try {
        await Promise.race([
            self.$store.dispatch("ajaxRequest", {
                state: [beanName + 'Page'],
                type: 'retrieve',
                url: '/api/' + self.packageName + '/' + beanName + '/retrieve',
                params: self.params,
                shouldCallAPI: (state, params) => {
                    let page = eval('state.' + beanName + 'Page');
                    if (!page.results || 0 >= page.results.length || force) {
                        return true;
                    }
                    if (!myEqual(params, page.params)) {
                        if (!myEqual(params, page.params, ['pageNum'])) {
                            params.pageNum = 1;
                        }
                        return true;
                    }
                    return false;
                }
            }),
            timeout()
        ]);
    } catch (ex) {
        doException(self, ex)
    } finally {
        self.loading = false;
    }
}

const onUpdate = (self, row, options) => {
    let {myToast} = self.Util;

    options = options || {};
    let {modify} = options;
    modify = modify || 'modify';

    let id = 0;
    if (row.id) {
        id = row.id;
    }

    if (!id) {
        if (!self.selected || 0 == self.selected.length) {
            myToast(self, '请选择要修改的记录', 'info');
            return;
        }
        if (1 < self.selected.length) {
            myToast(self, '当前选择了多条记录, 请选择一条记录', 'info');
            return;
        }

        id = self.selected[0].id
    }

    self.$refs[modify].open(id);
};

const onDelete = async (self) => {
    let {myToast, timeout, doException, myConfirm} = self.Util;

    if (!self.selected || 0 >= self.selected.length) {
        myToast(self, '请选择要删除的记录', 'info');
        return;
    }

    let ids = self.selected.map((item, index) => {
        return item.id;
    });

    let doAction = async () => {
        self.loading = true;
        try {
            await Promise.race([
                self.$store.dispatch("ajaxRequest", {
                    state: [self.beanName + 'Page'],
                    type: 'delete',
                    url: '/api/' + self.packageName + '/' + self.beanName + '/delete',
                    params: {
                        ids
                    }
                }),
                timeout()
            ]);

            myToast(self, '删除成功', 'success');

            if (0 >= self.page.results.length) {
                self.refresh();
            }
        } catch (ex) {
            doException(self, ex)
        } finally {
            self.loading = false;
        }
    };

    myConfirm(self, null, doAction);
}

const onUploadSuccess = async (self, url) => {
    let {timeout} = self.Util;

    let {beanName} = self;
    await Promise.race([
        self.$store.dispatch("ajaxRequest", {
            state: '',
            type: '',
            url: '/api/' + self.packageName + '/' + beanName + '/import',
            params: {
                url
            }
        }),
        timeout(6000000)
    ]);

    self.params.pageNum = 1;
    self.refresh(true);
}

export {
    calHeight, refresh, onDelete,
    onUpdate, onUploadSuccess
};