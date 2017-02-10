Ext.define('template.view.tmp005.TMP005V01',{
    extend: 'Ext.container.Container',
    xtype: 'TMP005V01',

    items: [
        {
            xtype: 'toolbar',
            margin: '0 10 10 10',
            ui: 'plain',
            items: [
                {
                    xtype: 'euiheadernav',
                    text: '임대관리 > 임대운영사 정보 > 운영기초'
                },
                '->',
                {
                    bind: '{STORE01}',
                    showReloadBtn: true,
                    showSaveBtn: true,
                    xtype: 'euicommand',
                    params: {
                        PGMID: 'A000',
                        POSIT: '1'
                    },
                    listeners: {
                        reloadbtnclick: 'onLoadData',
                        savebtnclick: 'onSave'
                    }
                }
            ]
        }
    ]
});