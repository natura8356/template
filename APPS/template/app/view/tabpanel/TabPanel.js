
Ext.define('template.view.tabpanel.TabPanel',{
    extend: 'Ext.panel.Panel',
    requires: [
        'template.view.tabpanel.Source'
    ],
    xtype: 'tabpanel-tabpanel',
    layout: 'border',
    items: [
        {
            xtype: 'tabpanel-source',
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
                    url: 'resources/source/tabpanel/Source.js',
                    lang: 'js'
                }
            ]
        }
    ]
});
