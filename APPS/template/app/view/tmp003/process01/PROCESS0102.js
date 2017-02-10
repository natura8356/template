Ext.define('template.view.tmp003.process01.PROCESS0102',{
    extend: 'Ext.container.Container',
    xtype: 'PROCESS0102',
    title: '탭1',
    defaults: {
        padding: 5
    },
    items: [
        {
            xtype: 'PROCESS010201'
        },
        {
            xtype: 'euitabpanel',
            tabBar: {
                items: [
                    {
                        xtype: 'tbfill'
                    },
                    {
                        iconCls: 'x-fa fa-folder-open',
                        xtype: 'euibutton',
                        text: '버튼2'
                    }
                ]
            },
            items: [
                {
                    xtype: 'PROCESS010202',
                    title: '서브탭1'
                },
                {
                    xtype: 'PROCESS010202',
                    title: '서브탭2'
                },
                {
                    xtype: 'PROCESS010202',
                    title: '서브탭3'
                }
            ]
        }
    ]
});