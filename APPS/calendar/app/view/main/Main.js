Ext.define('calendar.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main-calendar',

    requires: [
        'calendar.view.calendar.Panel',
        'calendar.view.main.MainController',
        'calendar.view.main.MainModel'
    ],
    controller: 'app-main-calendar',
    viewModel: 'app-main-calendar',

    layout: 'fit',

    items: [{
        xtype: 'app-calendar',
//        xtype: 'panel',
        reference: 'calendar',
        sidebarTitle: 'Ext JS Calendar',
        views: {
            day: {
                startTime: 0,
                endTime: 24
            },
            week: {
                startTime: 0,
                endTime: 24
            }
        },
        bind: {
            store: '{calendars}'
        },
        sideBarHeader: {
            xtype: 'app-profile-side',
//            xtype: 'panel',
            bind: {
                user: '{user}'
            }
        }
    }]
});
