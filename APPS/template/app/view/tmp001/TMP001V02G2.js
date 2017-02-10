Ext.define('template.view.tmp001.TMP001V02G2', {
    extend: 'eui.grid.Panel',
    xtype: 'TMP001V02G2',
    height: 100,
    viewModel: {
        stores: {
            STORE01: {
                model : 'template.model.Base',
                proxy: {
                    type: 'rest',
                    actionMethods: {
                        read: 'GET',
                        create: 'POST',
                        update: 'POST',
                        destroy: 'POST'
                    },
                    url: 'resources/data/data1.json?TMP001V02G2',
                    reader: {
                        type: 'json',
                        rootProperty: 'data'
                    }
                }
            }
        }
    },

    bind: {
        store: '{STORE01}'
    },

    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 2
    },
    selModel: {
        mode: 'SIMPLE',
        selType: 'checkboxmodel'
    },

    title: '지로번호',
    header: {
        xtype: 'header',
        titlePosition: 0,
        items: [
            {
                xtype: 'toolbar',
                ui: 'plain',
                items: [
                    '->',
                    {
                        xtype: 'euibutton',
                        text: '추가',
                        iconCls: 'x-fa fa-plus-square'
                    },
                    {
                        xtype: 'euibutton',
                        text: '삭제',
                        iconCls: 'x-fa fa-remove'
                    }
                ]
            }
        ]
    },

    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: '업체명',
            dataIndex: 'd1'
        },
        {
            text: '대표자명',
            dataIndex: 'd2'
        },
        {
            text: '사업자등록번호',
            dataIndex: 'd3'
        },
        {
            text: '설립일',
            dataIndex: 'd4'
        },
        {
            text: '전화번호',
            dataIndex: 'd5'
        },
        {
            text: '주소',
            dataIndex: 'd6'
        },
        {
            text: '비고',
            dataIndex: 'd7'
        }
    ]
});