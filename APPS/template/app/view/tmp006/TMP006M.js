Ext.define('template.view.tmp006.TMP006M', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.TMP006M',

    stores: {
        STORE01: {
        	type: 'tree',
        	fields: [
               
            ],
            proxy: {
                type: 'ajax',
                //the store will get the content from the .json file
                //url: 'resources/data/tmp005/COMMONMENU.json',
                url: 'TMP006S_TR.do',
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