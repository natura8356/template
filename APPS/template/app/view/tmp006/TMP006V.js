Ext.define('template.view.tmp006.TMP006V', {
    // 하나의 프로그램 최상단 일경우 확장.
    extend: 'eui.container.BaseContainer',
    xtype: 'TMP006V',
    title: 'TMP006V',
    requires: [
        'template.view.tmp006.TMP006V01',
        'template.view.tmp006.TMP006V02',
        'template.view.tmp006.TMP006C',
        'template.view.tmp006.TMP006M'
    ],
    controller: 'TMP006C',
    viewModel: 'TMP006M',

    items: [
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
                    width: 200,
                    reference: 'leftTree',
                    xtype: 'TMP006V02',
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
                    flex:1,
                    xtype: 'TMP006V03',
                    bind: {
                        store: '{STORE02}'
                    }
                }
            ]
        }
    ]

});