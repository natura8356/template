/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('npComponent.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main_np',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'npComponent.view.main.MainController',
        'npComponent.view.main.MainModel',
        'npComponent.view.main.List',
        'npComponent.view.comUser.COMUSERV'
    ],
    controller: 'main_np',
    viewModel: {
        type:'main_np'
    },
    layout: 'border',
    items: [
        {
            title: 'Menu',
            region: 'west',
            xtype: 'leftmenu_np',
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
                    xtype: 'COMUSERV'
                }
            ]
        }
    ]
});
