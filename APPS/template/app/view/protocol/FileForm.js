
Ext.define('template.view.protocol.FileForm',{
    extend: 'eui.panel.BasePanel',
    xtype: 'protocol-fileform',
    requires: [
        'template.view.protocol.Source'
    ],
    layout: 'border',
    items: [
        {
            region: 'center',
            xtype: 'protocol-source'
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
                            title: 'js',
                            url: 'resources/source/protocol/Source.js',
                            lang: 'js'
                        },
                        {
                            xtype: 'common-sourcepanel',
                            title: 'java',
                            url: 'resources/source/protocol/Java.txt'
                        }
                    ]
                }
            ]
        }
    ]
});
