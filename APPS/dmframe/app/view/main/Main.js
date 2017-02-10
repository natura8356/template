/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('dmframe.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main-dmframe',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'dmframe.view.dashboard.Dashboard',
        'dmframe.view.main.MainController',
        'dmframe.view.main.MainModel',
        'dmframe.view.header.DmHeader',
        'dmframe.view.header.DmMenuNav',
        'dmframe.view.dashboard.Dashboard'
    ],
    scrollable: 'y',
    controller: 'app-main-dmframe',
    viewModel: 'app-main-dmframe',

    items: [
        {
            xtype: 'container',
            autoEl: 'header',
            items: [
                {
                    xtype: 'dmheader'
                },
                {
                    xtype: 'dmmenunav'
                }
            ]
        },
        {
            xtype: 'tabpanel',
            id: 'contentPanel',
            height: 800,
            region: 'center',
            items: [
                {
                    title: 'HOME',
                    id: 'mainContainer',
                    xtype: 'dmdashboard'
                }
            ]
        },

        {
            autoEl: 'footer',
            xtype: 'component',
            html : '<div class="inWrap">Copyrightⓒ 2016 DAELIM All rights reserved.</div>'
        }

    ]
});
