Ext.define('template.view.tmp003.process01.PROCESS0101',{
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'PROCESS0101',
    margin: 5,
    padding: 5,
    items: [
        {
            reference: 'cmpKey',
            xtype: 'euitext',
            triggers: {
                search: {
                    cls: 'x-form-search-trigger',
                    handler: 'onClearClick',
                    scope: 'this'
                }
            },
            cellCls: 'null',
            fieldLabel: '플랫폼사용자',
            width: 200
        },
        '->',
        {
            xtype: 'euibutton',
            iconCls: 'x-fa fa-filter',
            width: 50,
            text: '검색',
            handler: 'dataSearch'
        }
    ]
});