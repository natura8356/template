/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('template.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    requires: [
       'Ext.plugin.Viewport',
       'Ext.window.MessageBox',
       'template.view.main.MainController',
       'template.view.main.MainModel',
       'template.view.main.List',
       'template.view.tmp007.TMP007V',
        'template.view.form.Panel',
       'template.view.template.tmp011.TMP011V'
    ],

    controller: 'main',
    viewModel: {
        type:'main'
    },
    layout: 'border',
    items: [
        {
            title: 'Menu#{행추가}',
            region: 'west',
            xtype: 'leftmenu',
            margin: '5 0 0 5',
            width: 200,
            collapsed: false,
            collapsible: true, // make collapsible
            itemId: 'west-region-container',
            split: true
        },
        {
            title: 'Main View',
            region: 'center', // center region is required, no width/height
            // specified
            xtype: 'tabpanel',
            itemId: 'maintab',
            margin: '5 5 0 0',
            items: [
                {
                    closable: true,
                    xtype: 'TMP011V'
                }
            ]
        },
        {
            xtype: 'toolbar',
            region: 'south',
            items: [
                '->',
                {
                    xtpe: 'component',
                    html: 'copy right ....'
                }
            ]
        }
    ]
});
