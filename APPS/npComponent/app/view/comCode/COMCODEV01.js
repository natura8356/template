Ext.define('npComponent.view.comCode.COMCODEV01',{
    extend: 'Ext.container.Container',
    xtype: 'COMCODEV01',
    layout: 'hbox',
    height: 50,
    margin: 10,
    defaults: {
        margin: '27 5 0 0'
    },
    items: [
        {
            xtype: 'container',
            margin: 0,
            layout: 'vbox',
            flex: 1,
            items: [
                {
                    width: 100,
                    hideHeaderICon: false,
                    xtype: 'euipanel',
                    title:'통합공통코드관리'
                },
                {
                    margin: '5 0 5 5',
                    xtype: 'component',
                    html : '시스템관리 > 코드관리 > 통합공통코드관리'
                }
            ]
        },
        {
            iconCls: 'x-fa fa-folder-open',
            xtype: 'euibutton',
            text: '조회',
            handler: 'onLoadData'
        },
        {
            iconCls: 'x-fa fa-folder-open',
            xtype: 'euibutton',
            text: '저장',
            handler: 'onSave'
        }
    ]
});