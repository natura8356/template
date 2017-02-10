Ext.define('template.view.tmp001.TMP001V02', {
    extend: 'Ext.container.Container',
    xtype: 'TMP001V02',
    title: '발주사(리츠)관리',
    requires: [
        'template.view.tmp001.TMP001V02F1'
    ],

    defaultListenerScope: true,


    items: [
        {
            xtype: 'TMP001V02C1',
            listeners: {
                itemdblclick: 'subGridReload'
            }
        },
        {
            margin: 5,
            xtype: 'TMP001V02G2'
        }
    ],

    subGridReload: function (grid, record) {
        var store = this.down('TMP001V02G2').store;
        if(!record){
            store.removeAll();
            return;
        }

        store.load({
            params : {
                keyField: record.get('field1')
            }
        })
    },

    /***
     * 최초 렌더링 시점 처리
     */
    onRender: function () {
        this.down('TMP001V02C1').relayEvents(this, ['euitabload']);
        this.callParent(arguments)
    }
});