Ext.define('npComponent.view.comUser.COMBOGROUP', {
    extend: 'eui.form.field.ComboBox',
    alias: 'widget.comboGroup',
    store: {
        fields:[],
        proxy: {
            type: 'rest',
            url: '/APPS/npComponent/comUserCB.do',
            reader: {
                type: 'json',
                rootProperty: 'comboData'
            }
        }
    }

});