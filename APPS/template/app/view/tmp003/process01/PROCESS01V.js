Ext.define('template.view.tmp003.process01.PROCESS01V', {
    extend: 'Ext.container.Container',
    xtype: 'PROCESS01V',
    title: '기본정보',
    requires: [
        'template.view.tmp003.process01.PROCESS01C',
        'template.view.tmp003.process01.PROCESS01M'
    ],
    controller: 'PROCESS01C',
    viewModel: 'PROCESS01M',

    items: [
        {
            xtype: 'PROCESS0101'
        },
        {
            margin: 5,
            tabBar: {
                items: [
                    {
                        xtype: 'tbfill'
                    },
                    {
                        iconCls: 'x-fa fa-print',
                        xtype: 'euibutton',
                        text: '엑셀업로드'
                    },
                    {
                        iconCls: 'x-fa fa-print',
                        xtype: 'euibutton',
                        text: '엑셀다운로드'
                    },
                    {
                        iconCls: 'x-fa fa-print',
                        xtype: 'euibutton',
                        text: '버튼1'
                    },
                    {
                        iconCls: 'x-fa fa-folder-open',
                        xtype: 'euibutton',
                        text: '버튼2'
                    }
                ]
            },
            xtype: 'euitabpanel',
            items: [
                {
                    xtype: 'PROCESS0102'
                },
                {
                    xtype: 'PROCESS0103'
                }
            ]
        }
    ]

});