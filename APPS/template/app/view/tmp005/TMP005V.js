Ext.define('template.view.tmp005.TMP005V', {
    // 하나의 프로그램 최상단 일경우 확장.
    extend: 'eui.container.BaseContainer',
    xtype: 'TMP005V',
    title: 'TMP005V(0)',
    requires: [
        'template.view.tmp005.TMP005V01',
        'template.view.tmp005.TMP005V02',
        'template.view.tmp005.TMP005C',
        'template.view.tmp005.TMP005M'
    ],
    controller: 'TMP005C',
    viewModel: 'TMP005M',

    items: [
        {
            xtype: 'euiheader',
            title: '운영관리'
        },
        {

            xtype: 'TMP005V01'
        },
        {
            reference: 'tree',
            xtype: 'TMP005V02',
            bind: {
                store: '{STORE01}'
            }
        }
    ]

});