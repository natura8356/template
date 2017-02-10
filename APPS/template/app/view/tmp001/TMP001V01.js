Ext.define('template.view.tmp001.TMP001V01',{
    extend: 'Ext.container.Container',
    xtype: 'TMP001V01',

    items: [
        {
            xtype: 'toolbar',
            margin: '0 10 10 10',
            ui: 'plain',
            items: [
                {
                    xtype: 'euiheadernav',
                    text: '임대관리 > 임대운영사 정보 > 운영기초'
                },
                '->',
                {
                    bind: '{STORE01}',
                    showPrintBtn: true,
                    rowAddBtnText: '신규',
                    showRowAddBtn: true,
                    showRowDelBtn: true,
                    showSaveBtn: true,
                    xtype: 'euicommand',
                    params: {
                        PGMID: 'A000',
                        POSIT: '1'
                    },
                    listeners: {
                        rowaddbtnclick: function () {

                        },
                        rowdeletebtnclick: function () {

                        },
                        savebtnclick: function () {
                            
                        }
                    }
                }
            ]
        },
        {
            xtype: 'toolbar',
            margin: '0 10 10 10',
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
                    text: '검색',
                    handler: 'dataSearch'
                }
            ]
        }
    ]
})