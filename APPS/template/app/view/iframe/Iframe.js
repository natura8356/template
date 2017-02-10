
Ext.define('template.view.iframe.Iframe',{
    extend: 'eui.panel.BasePanel',
    xtype: 'iframe-iframe',
    requires: [
        'template.view.iframe.Source'
    ],
    layout: 'border',
    items: [
        {
            xtype: 'iframe-source',
            region: 'center'
        },
        {
            xtype: 'tabpanel',
            collapsible: true,
            title: 'source',
            width: '50%',
            resizable: true,
            region: 'east',
            items: [
                {
                    xtype: 'common-sourcepanel',
                    title: 'js',
                    url: 'resources/source/iframe/Source.js',
                    lang: 'js'
                },
                {
                    xtype: 'common-sourcepanel',
                    title: 'html',
                    url: 'resources/customer/customer.html',
                    lang: 'html'
                }
            ]
        }
    ]
});
