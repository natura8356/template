Ext.define('Override.grid.column.Column', {
    override: 'Ext.grid.column.Column',
    onRender: function () {
        this.callParent(arguments);
    }
});