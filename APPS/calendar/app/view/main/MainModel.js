/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('calendar.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.app-main-calendar',

    data: {
        user: null,         // { name, icon }
        calendars: null
    }

    //TODO - add data, formulas and/or methods to support your view
});
