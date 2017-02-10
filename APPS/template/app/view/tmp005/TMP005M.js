Ext.define('template.view.tmp005.TMP005M', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.TMP005M',

   
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
        }
    }
});