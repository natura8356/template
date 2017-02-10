
Ext.define('template.view.style.Style',{
    extend: 'Ext.panel.Panel',
    xtype: 'style-style',
    layout: "border",
    items: [
        {
            xtype: 'style-source',
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
                    url: 'resources/source/style/Source.js',
                    lang: 'js'
                }
            ]
        }
    ]
});
