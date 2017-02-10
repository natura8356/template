Ext.define('template.view.process.step01.STEP0102',{
    extend: 'eui.form.Panel',
    xtype: 'STEP0102',
    tableColumns: 2,
    title: '사업자 기본정보',
    defaults: {
        allowBlank: false
    },

    margin: 10,
    header: {
        xtype: 'header',
        titlePosition: 0,
        items: [
            {
                iconCls: 'x-fa fa-folder-open',
                xtype: 'euibutton',
                text: '저장',
                handler: 'onSave'
            }
        ]
    },
    items: [
        {
            fieldLabel: '사업자명',
            xtype: 'euifieldcontainer',
            allowBlank: false,
            items: [
                {
                    width: '40%',
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
                }
            ]
        },
        {
            fieldLabel: '사업자주소',
            xtype: 'euitext',
            bind: {
                value: '{RECORD.field2}'
            }
        },
        {
            fieldLabel: '임대사업자번호',
            xtype: 'euitext',
            bind: {
                value: '{RECORD.field3}'
            }
        },
        {
            fieldLabel: '대표자명',
            xtype: 'euitext',
            bind: {
                value: '{RECORD.field4}'
            }
        },
        {
            fieldLabel: '설립일',
            xtype: 'euidate',
            bind: {
                value: '{RECORD.field5}'
            }
        },
        {
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
            colspan: 2,
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
        }
    ]
});