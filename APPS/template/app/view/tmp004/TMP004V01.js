Ext.define('template.view.tmp004.TMP004V01',{
    extend: 'Ext.container.Container',
    xtype: 'TMP004V01',

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
//                    showPrintBtn: true,
//                    rowAddBtnText: '신규',
//                    showRowAddBtn: true,
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
//    layout: 'hbox',
//    height: 50,
//    margin: 10,
//    defaults: {
//        margin: '27 5 0 0'
//    },
//    items: [
//        {
//            xtype: 'container',
//            margin: 0,
//            layout: 'vbox',
//            flex: 1,
//            items: [
//                {
//                    width: 100,
//                    hideHeaderICon: false,
//                    xtype: 'euipanel',
//                    title: '운영관리'
//                },
//                {
//                    margin: '5 0 5 5',
//                    xtype: 'component',
//                    html : '임대관리 > 임대운영사 정보 > 운영기초관리'
//                }
//            ]
//        },
//
//        {
//            iconCls: 'x-fa fa-folder-open',
//            xtype: 'euibutton',
//            text: '조회',
//            handler: 'onLoadData'
//        },
//        {
//            iconCls: 'x-fa fa-folder-open',
//            xtype: 'euibutton',
//            text: '저장',
//            handler: 'onSave'
//        }
//    ]
});