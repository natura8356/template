Ext.define('template.view.template.tmp013.TMP013M', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.TMP013M',
   
    stores: {
        STORE01: {
            autoLoad: true,
            // 페이징 처리 지원.
            fields: [],
            // 한페이지당 로우수
            proxy: {
                type: 'rest',
                url: '/APPS/template/TMP002S_GRID.do',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        },
        STORE02: {
            autoLoad: true,
            fields : [],
            proxy: {
                type: 'rest',
                url: '/APPS/npComponent/comUser.do',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }
});