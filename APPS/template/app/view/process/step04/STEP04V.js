Ext.define('template.view.process.step04.STEP04V', {
    extend: 'eui.container.BaseContainer',
    xtype: 'STEP04V',
    title: '기본정보',
    requires: [
        'template.view.process.step04.STEP04C',
        'template.view.process.step04.STEP04M',
        'template.view.process.step04.STEP0402',
        'template.view.process.step04.STEP0403'
    ],
    controller: 'STEP04C',
    viewModel: 'STEP04M',
    layout: 'fit',
    margin: 10,
    header: {
        xtype: 'header',
        titlePosition: 0,
        items: [

        ]
    },
    items: [
        {
            xtype: 'euipanel',
            title: '모계좌별 가상계좌 관리',
            header: {
                xtype: 'header',
                titlePosition: 0,
                items: [
                    {
                        iconCls: 'x-fa fa-folder-open',
                        xtype: 'euibutton',
                        text: '양식 Download',
                        handler: 'onSave'
                    },
                    {
                        iconCls: 'x-fa fa-folder-open',
                        xtype: 'euibutton',
                        text: '가상계좌 Upload',
                        handler: 'onSave'
                    },
                    {
                        iconCls: 'x-fa fa-folder-open',
                        xtype: 'euibutton',
                        text: '가상 계좌부여동호) Download',
                        handler: 'onSave'
                    }
                ]
            },
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    margin: '0 5 0 0',
                    flex: 7,
                    xtype: 'STEP0402',
                    bind: {
                        store: '{STORE04}'
                    }

                },
                {
                    margin: '0 0 0 5',
                    flex: 3,
                    xtype: 'STEP0403',
                    bind: {
                        store: '{STORE02}'
                    }
                }
            ]
        }
    ]

});