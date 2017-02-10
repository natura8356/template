Ext.define('template.view.tmp004.TMP004V', {
    extend: 'eui.container.BaseContainer',
    xtype: 'TMP004V',
    title: 'TMP004V(0)',
    requires: [
        'template.view.tmp004.TMP004C',
        'template.view.tmp004.TMP004M',
        'template.view.tmp004.TMP004V01',
        'template.view.tmp004.TMP004V02',
        'template.view.tmp004.TMP004V03',
        'template.view.tmp004.TMP004V04'
    ],
    controller: 'TMP004C',
    viewModel: 'TMP004M',

    items: [
        {
            xtype: 'euiheader',
            title: '운영관리'
        },
        {
            reference: 'INPUT_FORM',
            xtype: 'TMP004V01'
        },
        {
            xtype: 'TMP004V02'
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
                    reference: 'leftGrid',
                    xtype: 'TMP004V03',
                    listeners: {
                    	itemclick: 'onRightGridLoad'
                    },
                    bind: {
                        store: '{STORE01}'
                    }

                },
                {
                	reference: 'rightGrid',
                    margin: '0 0 0 5',
                    flex: 4,
                    xtype: 'TMP004V04',
                    bind: {
                        store: '{STORE02}'
                    }
                }
            ]
        }
    ]

});