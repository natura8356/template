Ext.define('template.view.tmp001.TMP001V02F1', {
    extend: 'eui.form.Panel',
    xtype: 'TMP001V02F1',
    tableColumns: 6,


    dockedItems: [
        {
            xtype: 'toolbar',
            ui: 'plain',
            items: [
                '->',
                {
                    xtype: 'euibutton',
                    text: '추가',
                    handler: 'onOrderCmpAdd',
                    iconCls: 'x-fa fa-plus-square'
                },
                {
                    xtype: 'euibutton',
                    text: '저장',
                    disabled: true,
                    bind: {
                        disabled: '{!formStatus.validAndDirty}'
                    },
                    handler: 'onOrderCmpSave',
                    iconCls: 'x-fa fa-plus-square'
                },
                {
                    xtype: 'euibutton',
                    text: '취소',
                    disabled: true,
                    bind: {
                        disabled: '{!formStatus.validAndDirty}'
                    },
                    handler: 'onOrderCmpReject',
                    iconCls: 'x-fa fa-plus-square'
                },
                {
                    xtype: 'euibutton',
                    disabled: true,
                    handler: 'onOrderCmpDel',
                    bind: {
                        disabled: '{formStatus.phantom}'
                    },
                    text: '삭제',
                    iconCls: 'x-fa fa-remove'
                }
            ]
        }
    ],
    defaults: {
        allowBlank: false
    },
    items: [
        {
            colspan: 3,
            fieldLabel: '발주번호',
            xtype: 'euitext',
            name: 'field1',
            bind: {
                value: '{RECORD.field1}'
            }
        },
        {
            colspan: 3,
            fieldLabel: '사업자등록번호',
            xtype: 'euitext',
            bind: {
                value: '{RECORD.field2}'
            }
        },
        {
            colspan: 3,
            fieldLabel: '임대사업자번호',
            xtype: 'euitext',
            bind: {
                value: '{RECORD.field3}'
            }
        },
        {
            colspan: 3,
            fieldLabel: '대표자명',
            xtype: 'euitext',
            bind: {
                value: '{RECORD.field4}'
            }
        },
        {
            colspan: 3,
            fieldLabel: '설립일',
            xtype: 'euidate',
            bind: {
                value: '{RECORD.field5}'
            }
        },
        {
            colspan: 3,
            allowBlank: true,
            fieldLabel: '팩스번호',
            xtype: 'euitext',
            bind: {
                value: '{RECORD.field6}'
            }
        },
        {
            allowBlank: true,
            fieldLabel: '주소',
            colspan: 4,
            xtype: 'euifieldcontainer',
            items: [
                {
                    width: '20%',
                    triggers: {
                        search: {
                            cls: 'x-form-search-trigger',
                            handler: 'onClearClick',
                            scope: 'this'
                        }
                    },
                    xtype: 'euitext',
                    bind: '{RECORD.field7}'
                },
                {
                    width: '60%',
                    xtype: 'euitext',
                    bind: '{RECORD.field8}'
                },
                {
                    width: '20%',
                    xtype: 'euitext',
                    bind: '{RECORD.field9}'
                }
            ]
        },
        {
            colspan: 2,
            allowBlank: true,
            fieldLabel: '전화번호',
            xtype: 'euitext',
            bind: {
                value: '{RECORD.field10}'
            }
        },
        {
            colspan: 6,
            fieldLabel: '비고',
            xtype: 'euitext',
            bind: {
                value: '{RECORD.field11}'
            }
        },

        {
            colspan: 2,
            fieldLabel: '로고',
            allowBlank: true,
            xtype: 'euifile',
            bind: {
                value: '{RECORD.field12}'
            }
        },
        {
            colspan: 2,
            fieldLabel: '직인',
            allowBlank: true,
            xtype: 'euifile',
            bind: {
                value: '{RECORD.field13}'
            }
        },
        {
            colspan: 2,
            fieldLabel: '인감',
            allowBlank: true,
            xtype: 'euifile',
            bind: {
                value: '{RECORD.field14}'
            }
        }
    ]
});