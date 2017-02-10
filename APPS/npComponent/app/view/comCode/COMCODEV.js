Ext.define('npComponent.view.comCode.COMCODEV', {
    // 하나의 프로그램 최상단 일경우 확장.
    extend: 'eui.container.BaseContainer',
    xtype: 'COMCODEV',
    requires: [
        'npComponent.view.comCode.COMCODEV01',
        'npComponent.view.comCode.COMCODEV02',
        'npComponent.view.comCode.COMCODEV03',
        'npComponent.view.comCode.COMCODEC',
        'npComponent.view.comCode.COMCODEM'
    ],
    controller: 'COMCODEC',
    viewModel: 'COMCODEM',

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
                    xtype: 'COMCODEV02',
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
                    xtype: 'COMCODEV03',
                    bind: {
                        store: '{STORE02}'
                    }
                }
            ]
        }
    ]

});