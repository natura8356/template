Ext.define('template.view.common.Combo01', {
    extend: 'eui.form.field.ComboBox',
    alias: 'widget.combo01',
    store: {
        fields:[],
        proxy: {
            type: 'rest',
            url: 'TMP004S_GRID_COMBO.do',
            reader: {
                type: 'json',
                rootProperty: 'comboData'
            }
        }
    }

});