Ext.define('template.view.tmp002.TMP002V', {
    extend: 'eui.container.BaseContainer',
//    extend: 'Ext.panel.Panel',
    xtype: 'TMP002V',
    title: '템플릿001',
    requires: [
        'template.view.tmp002.TMP002C',
        'template.view.tmp002.TMP002M',
        'template.view.tmp002.TMP002V01',
        'template.view.tmp002.TMP002V02',
        'template.view.tmp002.TMP002V03'
    ],
    controller: 'TMP002C',
    viewModel: 'TMP002M',

    items: [
        {
            xtype: 'euiheader',
            title: '운영관리'
        },
        {
            xtype: 'TMP002V01'
        },
        {
            flex:1,
            margin: '0 10 15 10',
            reference: 'cusGrid',
            xtype: 'TMP002V02',
            bind: '{STORE01}'
        }
    ]

});