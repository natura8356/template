/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('dmframe.view.dashboard.Dashboard', {
    extend: 'Ext.container.Container',
    xtype: 'dmdashboard',
    requires: [
        'dmframe.view.dashboard.RightGrid',
        'dmframe.view.dashboard.Calendar',
        'dmframe.view.dashboard.ToDoList',
        'dmframe.view.dashboard.LeftGrid'
    ],

//    controller: 'dmdashboard',

    height: 728,
//    scrollable: 'y',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'container',
            autoEl: 'article',
            height: 348,
//            layout: 'fit',
            items: [
                {
                    xtype: 'container',
                    cls: 'inWrap',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            width: 380,
                            height: 322,
                            xtype: 'todolist'
                        },
                        {
                            xtype: 'tomokcalendar'
                        }

                    ]
                }
            ]
        },
        {
            height: 534,
            xtype: 'container',
            autoEl: 'section',
            items: [
                {
                    xtype: 'container',
                    cls: 'inWrap',
                    items: [
                        {
                            xtype: 'dbleftgrid'
                        },
                        {
                            xtype: 'dbrightgrid'
                        }
                    ]
                }

            ]
        }
    ]
});
