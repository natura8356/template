Ext.define('template.view.template.tmp012.TMP012M', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.TMP012M',
   
    stores: {
        STORE01: {
            autoLoad: true,
            // 페이징 처리 지원.
            type: 'buffered',
            remoteSort: true,
            fields: [],
            // 한페이지당 로우수
            pageSize: 50,
            proxy: {
                type: 'rest',
                url: '/APPS/template/TMP002S_GRID.do',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }
});