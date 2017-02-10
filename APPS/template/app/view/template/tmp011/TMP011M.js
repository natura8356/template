Ext.define('template.view.template.tmp011.TMP011M', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.TMP011M',

    stores: {
        STORE01: {
            autoLoad: true,
            fields: [
                {
                    name: "col1",
                    type: "string"
                },
                {
                    name: "col2",
                    type: "string",
                    convert: function (v, record) {
                        return record.get('col1')+'@'+record.get('col2');
                    }
                },
                {
                    name: "col3",
                    type: "string",
                    convert: function (v, record) {
                        return record.get('col2')+'@'+record.get('col3');
                    }
                }
            ],
            proxy: {
                type: 'rest',
                url: 'resources/data/statdata1.json',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            },
            sorters: [
                'col3'
            ]
        }
    }
});