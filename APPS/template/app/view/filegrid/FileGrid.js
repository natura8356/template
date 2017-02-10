
Ext.define('template.view.filegrid.FileGrid',{
    extend: 'Ext.panel.Panel',
    xtype: 'filegrid-filegrid',
    layout: 'border',
    items: [
        {
            xtype: "filegrid-source",
            region: 'center'
        },
        {
            xtype: 'panel',
            collapsible: true,
            title: 'source',
            width: '50%',
            resizable: true,
            region: 'east',
            layout: 'fit',
            items: [
                {
                    xtype: 'tabpanel',
                    items: [
                        {
                            xtype: 'common-sourcepanel',
                            title: 'Source.js',
                            url: 'resources/source/fileGrid/Source.js',
                            lang: 'js'
                        },
                        {
                            xtype: 'common-sourcepanel',
                            title: 'Tag.js',
                            url: 'resources/source/fileGrid/Tag.js',
                            lang: 'js'
                        },
                        {
                            xtype: 'common-sourcepanel',
                            title: 'java',
                            url: 'resources/source/fileGrid/Java.txt'
                        }
                    ]
                }
            ]
        }
    ]
});
