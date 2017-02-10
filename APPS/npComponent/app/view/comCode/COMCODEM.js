Ext.define('npComponent.view.comCode.COMCODEM', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.COMCODEM',

    stores: {
        STORE01: {
        	type: 'tree',
        	fields: [
               
            ],
            proxy: {
                type: 'ajax',
                //the store will get the content from the .json file
                //url: 'resources/data/tmp005/COMMONMENU.json',
                url: '/APPS/npComponent/comCode.do',
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
             /*   {
                    name: "BEGN_DT",
                    type: "date"
                },
                {
                    name: "REV_DNT",
                    type: "date"
                }*/
            ],
            proxy: {
                type: 'rest',
                url: '/APPS/npComponent/comCodeGR.do',
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