const onSubmitDialog = (self, options) => {
    let {doException, timeout} = self.Util;

    let doAction = async () => {
        options = options || {};
        let {url, state, type, onSubmitCallback} = options;
        if(undefined == state) {
            state = [self.beanName + 'Page'];
        }
        type = type || (self.update ? 'update' : 'create');
        url = url || '/api/' + self.packageName + '/' + self.beanName + '/' + type;

        let params = {...self.form};

        self.loadingSubmit = true;
        try {
            await Promise.race([
                self.$store.dispatch("ajaxRequest", {
                    state,
                    type,
                    url,
                    params
                }),
                timeout()
            ]);

            let msg = '添加成功';
            if (self.update) {
                msg = '修改成功';
            }
            myToast(self, msg, 'success');
            if (onSubmitCallback) {
                onSubmitCallback.call(self);
            }
            
            self.visible = false;
        } catch (ex) {
            doException(self, ex)
        } finally {
            self.loadingSubmit = false;
        }
    };

    self.$refs['form'].validate((valid) => {
        if (valid) {
            doAction();
        } else {
            return false;
        }
    });
}

let refreshDialog = async (self, id) => {
    let {doException, myAssign, timeout} = self.Util;

    self.loading = true;
    try {
        await Promise.race([
            self.$store.dispatch("ajaxRequest", {
                state: [self.beanName + 'Update'],
                type: 'get',
                url: '/api/' + self.packageName + '/' + self.beanName + '/get',
                params: {
                    id
                }
            }),
            timeout()
        ]);

        let updateData = eval('self.$store.state.' + self.beanName + 'Update');
        myAssign(self.form, {...updateData});
    } catch (ex) {
        doException(self, ex)
    } finally {
        self.loading = false;
    }
};

const initDataModify = {
    loading: false,
    loadingSubmit: false,
    visible: false,
    update: false,
};

export {
    onSubmitDialog, refreshDialog, initDataModify,
};