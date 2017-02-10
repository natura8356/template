Ext.define('template.view.tmp004.TMP004M', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.TMP004M',

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
            fields: [
                {
                    name: "BEGN_DT",
                    type: "date"
                },
                {
                    name: "END_DT",
                    type: "date"
                }
            ],
            autoLoad: true,
            proxy: {
                type: 'rest',
               // url: '/APP/template/TMP0041S_GRID.do',
                url: ' resources/data/TMP00301.json',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        },
        STORE02: {
            fields: [
                {
                    name: "BEGN_DT",
                    type: "date"
                },
                {
                    name: "END_DT",
                    type: "date"
                }
            ],
            proxy: {
                type: 'rest',
                url: 'TMP0042S_GRID.do',
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