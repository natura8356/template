Ext.define('template.view.tmp001.TMP001V03',{
    extend: 'Ext.container.Container',
    xtype: 'TMP001V03',
    requires: [
        'template.view.tmp001.TMP001V02C1'
    ],
    title: '임대운영사정보',
    defaultListenerScope: true,

    listeners: {
        euitabload: function (parameters) {
            console.log('탭 변경으로 인해 데이터 로드.', parameters)
        }
    },

    /***
     * 최초 렌더링 시점 처리
     */
    onRender: function () {
        this.down('TMP001V02C1').relayEvents(this, ['euitabload']);
        this.callParent(arguments)
    },

    items: [
        {
            xtype: 'TMP001V02C1'
        }
    ]
});