Ext.define('calendar.view.calendar.Panel', {
    extend: 'Ext.calendar.panel.Panel',
    xtype: 'app-calendar',

    config: {
        createButton: {
            margin: '10 0 0 0'
        },
        sideBar: {
            bodyPadding: 0,
            ui: 'default',
            title: 'Ext JS Calendar'
        },
        sideBarHeader: null
    },

    privates: {
        createSideBar: function() {
            var result = this.callParent();
            result.items.unshift(Ext.apply({
                weight: -1
            }, this.getSideBarHeader()));
            return result;
        }
    }
});
