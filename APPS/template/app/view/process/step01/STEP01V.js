Ext.define('template.view.process.step01.STEP01V', {
    extend: 'eui.container.BaseContainer',
    xtype: 'STEP01V',
    title: '기본정보',
    requires: [
        'template.view.process.step01.STEP01C',
        'template.view.process.step01.STEP01M',
        'template.view.process.step01.STEP0102',
        'template.view.process.step01.STEP0103',
        'template.view.process.step01.STEP0104'
    ],
    controller: 'STEP01C',
    viewModel: 'STEP01M',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'STEP0102'
        },
        {
            margin: 10,
            flex: 1,
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    margin: '0 5 0 0',
                    flex: 6,
                    xtype: 'STEP0103',
                    bind: {
                        store: '{STORE01}'
                    }

                },
                {
                    margin: '0 0 0 5',
                    flex: 4,
                    xtype: 'STEP0104',
                    bind: {
                        store: '{STORE02}'
                    }
                }
            ]
        }
    ]

});