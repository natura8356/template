Ext.define('template.view.calendar.Calendar', {
    extend: 'eui.panel.BasePanel',
    xtype: 'calendar-calendar',
    requires: [
        'template.view.calendar.Source'
    ],
    layout: 'border',
    items: [
        {
            xtype: 'calendar-source',
            region: 'center'
        },
        {
            xtype: 'panel',
            width: '50%',
            collapsible: true,
            title: 'source',
            resizable: true,
            region: 'east',
            layout: 'fit',
            items: [
                {
                    xtype: 'common-sourcepanel',
                    region: 'center',
                    url: 'resources/source/calendar/Source.js',
                    lang: 'js'
                }
            ]
        }
    ]
});
