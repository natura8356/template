Ext.define('template.view.tmp007.TMP007M', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.TMP007M',

    stores: {
        STORE01: {
        	type: 'tree',
        	fields: [
               
            ],
            proxy: {
                type: 'ajax',
                //the store will get the content from the .json file
                url: 'resources/data/tmp005/COMMONMENU.json',
                reader: {
                	rootProperty : function(node) {
                        return node.data || node.children;
                    }
                }
            },
            folderSort: true
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