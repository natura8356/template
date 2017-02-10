Ext.define('template.view.tmp007.TMP007V', {
    // 하나의 프로그램 최상단 일경우 확장.
    extend: 'eui.container.BaseContainer',
    xtype: 'TMP007V',
    title: 'TMP007V',
    requires: [
        'template.view.tmp007.TMP007V01',
        'template.view.tmp007.TMP007C',
        'template.view.tmp007.TMP007M'
    ],
    controller: 'TMP007C',
    viewModel: 'TMP007M',

    items: [
        {
            margin: 10,
            flex: 1,
            xtype: 'TMP007V01'
        }
    ]

});