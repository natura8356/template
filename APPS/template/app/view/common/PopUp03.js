Ext.define('template.view.common.PopUp03', {
    extend: 'eui.container.Popup',
    alias: 'widget.popup03',

    store: {
        type: 'buffered',
        remoteSort: true,
        fields: [],
        leadingBufferZone: 10,
        pageSize: 5,
        proxy: {
            type: 'rest',
            url: '/APPS/template/TMP002S_GRID.do',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});