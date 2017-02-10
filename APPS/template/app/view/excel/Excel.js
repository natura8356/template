
Ext.define('template.view.excel.Excel',{
    extend: 'Ext.panel.Panel',
    xtype: 'excel-excel',
    layout: "border",
    items: [
        {
            xtype: 'excel-source',
            region: 'center'
        },
        {
            xtype: 'panel',
            width: '50%',
            collapsible: true,
            title: 'source',
            resizable: true,
            region: 'east',
            layout: 'fit',
            items: [
                {
                    xtype: 'tabpanel',
                    items: [
                        {
                            xtype: 'common-sourcepanel',
                            title: 'js',
                            url: 'resources/source/excel/Source.js',
                            lang: 'js'
                        },
                        {
                            xtype: 'common-sourcepanel',
                            title: 'package 설치 가이드',
                            url: 'resources/source/excel/app.json',
                            lang: 'js'
                        }
                    ]
                }
            ]
        }
    ]
});
