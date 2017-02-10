Ext.define('npComponent.view.comAtrt.COMATRTM', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.COMATRTM',
   
    stores: {
        STORE01: {
        	autoLoad : true,
        	type: 'tree',
        	fields: [
               
            ],
            proxy: {
                type: 'ajax',
                //the store will get the content from the .json file
                url: '/APPS/npComponent/comAtrt.do',
                params : {
                	searchCD : 'ADMIN'
                },
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