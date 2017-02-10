Ext.define('template.view.process.step05.STEP05M', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.STEP05M',

    formulas: {

    },
    stores: {
        STORE01: {
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
        }
    }
});