Ext.define('template.view.tmp003.TMP003V', {
    extend: 'eui.container.BaseContainer',
    xtype: 'TMP003V',
    title: 'TMP003V',
    requires: [
        'template.view.tmp003.TMP003C',
        'template.view.tmp003.TMP003M',
        'template.view.tmp003.process01.PROCESS01V'
    ],
    controller: 'TMP003C',
    viewModel: 'TMP003M',

    items: [
        {
            xtype: 'euiheader',
            title: '운영관리'
        },
        {
            xtype: 'TMP003V01'
        },
        {
            xtype: 'euitabpanel',
            margin: 10,
            items: [
                {
                    xtype: 'PROCESS01V'
                },
                {
                    xtype: 'PROCESS02V'
                }
            ]
        }
    ]

});