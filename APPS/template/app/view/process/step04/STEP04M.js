Ext.define('template.view.process.step04.STEP04M', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.STEP04M',

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
        STORE04: {
            autoLoad: true,
            proxy: {
                type: 'rest',
                url: 'resources/data/TMP00401.json?read',
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
        },
        STORE02: {
            autoLoad: true,
            proxy: {
                type: 'rest',
                url: 'resources/data/TMP00402.json?read',
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