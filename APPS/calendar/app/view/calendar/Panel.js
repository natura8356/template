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
        getSwitcherItems: function() {
    	    var views = this.getViews(),
    	        items = [],
                key, o;
    		
    	    for (key in views) {
    	        o = views[key];
    	        if (o) {
    	            items.push({
    	                text: o.label,
    	                value: key,
    	                weight: o.weight
    	            });                	
    	        }
    	    }
        },
        createSideBar: function() {
            var result = this.callParent();
            result.items.unshift(Ext.apply({
                weight: -1
            }, this.getSideBarHeader()));
            return result;
        }
    }
});
