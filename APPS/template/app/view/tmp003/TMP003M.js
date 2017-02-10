Ext.define('template.view.tmp003.TMP003M', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.TMP003M',

    formulas: {
        formStatus: {
            bind: {
                bindTo: '{customerRecord}',
                deep: true
            },
            get: function (user) {
                if (!user) {
                    return {
                        dirty: true,
                        valid: false,
                        phantom: true,
                        validAndDirty: false,
                        disabled: true
                    }
                }
                var status = {
                    dirty: user ? user.dirty : true,
                    valid: user ? user.isValid() : false,
                    phantom: user.phantom,
                    disabled: false
                };
                status.validAndDirty = status.dirty && status.valid;

                return status;
            }
        }
    },
    stores: {
        STORE01: {
            autoLoad: true,
            proxy: {
                type: 'rest',
                url: 'resources/data/TMP00301.json?read',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                },
                writer: {
                    type: 'json',
                    allowSingle: false,
                    writeAllFields: true
                }
            }
        }
    }
});