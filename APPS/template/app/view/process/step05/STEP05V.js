Ext.define('template.view.process.step05.STEP05V', {
    extend: 'eui.panel.BasePanel',
    xtype: 'STEP05V',
    title: '기본정보',
    requires: [
        'template.view.process.step05.STEP05C',
        'template.view.process.step05.STEP05M',
        'template.view.process.step05.STEP0501',
        'template.view.process.step05.STEP0502',
        'template.view.process.step05.STEP0503'
    ],
    controller: 'STEP05C',
    viewModel: 'STEP05M',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    hideHeaderICon: true,
    margin: 10,
    tbar: [
        {
            allowBlank: false,
            reference: 'cmpKey',
            xtype: 'euicombo',
            fieldLabel: '동',
            labelWidth: 50,
            width: 200
        },
        '->',
        {
            xtype: 'euibutton',
            iconCls: 'x-fa fa-filter',
            width: 50,
            text: '검색',
            handler: 'dataSearch'
        },
        {
            xtype: 'tbseparator'
        },
        {
            xtype: 'euibutton',
            iconCls: 'x-fa fa-save',
            width: 50,
            text: '저장'
        }
    ],
    items: [
        {
            flex:.4,
            margin: '0 5 0 0',
            bind: {
                store: '{STORE01}'
            },
            xtype:'STEP0501',
            listeners: {
                itemdblclick: 'onM1ItemDblClick'
            }
        },
        {
            flex:.6,
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    margin: '0 5 0 5',
                    xtype:'STEP0502',
                    bind: {
                        store: '{STORE02}'
                    },
                    listeners: {
                        itemdblclick: 'onM2ItemDblClick'
                    },
                    flex:1
                },
                {
                    margin: '0 5 0 5',
                    xtype:'STEP0503',
                    height: 200
                }
            ]
        }

    ]

});