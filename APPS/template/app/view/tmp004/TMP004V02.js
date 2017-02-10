Ext.define('template.view.tmp004.TMP004V02',{
    extend: 'eui.form.Panel',
    xtype: 'TMP004V02',
    tableColumns: 2,

    defaults: {
        allowBlank: false
    },
    margin: 10,
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
                    bind: '{RECORD.BIZPRSN_NO}'
                },
                {
                    width: '60%',
                    xtype: 'euitext',
                    bind: '{RECORD.CPNY_NM}'
                }
            ]
        },
        {
            fieldLabel: '사업자등록번호',
            xtype: 'euitext',
            bind: {
                value: '{RECORD.BIZPRSN_NO}'
            }
        },
        {
            fieldLabel: '임대사업자번호',
            xtype: 'euitext',
            bind: {
                value: '{RECORD.LEAS_BIZPRSN_NO}'
            }
        },
        {
            fieldLabel: '대표자명',
            xtype: 'euitext',
            bind: {
                value: '{RECORD.RPSTPRSN_NM}'
            }
        },
        {
            fieldLabel: '설립일',
            xtype: 'euidate',
            altFormats: 'Y-m-d',
            bind: '{RECORD.ESTT_DT}'
        },
        {
            allowBlank: true,
            fieldLabel: '팩스번호',
            xtype: 'euitext',
            bind: {
                value: '{RECORD.FAX_NO}'
            }
        },
        {
            allowBlank: true,
            fieldLabel: '주소',
            xtype: 'euifieldcontainer',
            items: [
                {
                    width: '10%',
                    triggers: {
                        search: {
                            cls: 'x-form-search-trigger',
                            handler: 'onClearClick',
                            scope: 'this'
                        }
                    },
                    xtype: 'euitext',
                    bind: '{RECORD.POST_NO}'
                },
                {
                    width: '45%',
                    xtype: 'euitext',
                    bind: '{RECORD.ADDR_1}'
                },
                {
                    width: '45%',
                    xtype: 'euitext',
                    bind: '{RECORD.ADDR_2}'
                }
            ]
        }
    ]
});