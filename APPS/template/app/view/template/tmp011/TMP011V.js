Ext.define('template.view.template.tmp011.TMP011V', {
    extend: 'eui.grid.Merge',
    xtype: 'TMP011V',
    title: '소계,합계 그리드(TMP011V)',
    requires: [
        'template.view.template.tmp011.TMP011C',
        'template.view.template.tmp011.TMP011M'
    ],
    controller: 'TMP011C',
    viewModel: 'TMP011M',

    bind: '{STORE01}',

    addSumRows: true,
    addTotalRow: true,

    listeners: {
        render: function () {
            var store = this.lookupViewModel().getStore('STORE01');
            store.load();
        }
    },

    groupFields: [
        {
            field: 'col1',
            mergeConfig: [
                {
                    field: 'col2',
                    cond: 'colspan',
                    value: 2
                },
                {
                    field: 'col3',
                    cond: 'hidden',
                    value: true
                }
            ]
        },
        {
            field: 'col2',
            mergeConfig: []
        }
    ],
    lastMergeColumn: ['col3'],
    sumFields: ['col4', 'col5'],

    columns: [
        {
            text: '구분',
            columns: [
                {

                    text: "수입/지출",
                    dataIndex: 'col1',
                    renderer: function (v) {
                        if (v == '합') {
                            return '총계'
                        }
                        return v;
                    }
                },
                {
                    text: "대항목",
                    dataIndex: 'col2',
                    renderer: function (v) {
                        var value = v.split('@')[1];
                        if (value == '합') {
                            return '합계'
                        }
                        return value;
                    }
                },
                {
                    text: "소항목",
                    dataIndex: 'col3',
                    renderer: function (v) {
                        var value = v.split('@')[2];
                        if (value == '합') {
                            return '소계'
                        }
                        return value;
                    }
                }
            ]
        },

        {
            width: 100,
            xtype: 'euinumbercolumn',
            text: "1월",
            dataIndex: 'col4'
        },
        {
            width: 100,
            xtype: 'euinumbercolumn',
            text: "2월",
            dataIndex: 'col5'
        },
        {
            width: 100,
            xtype: 'euinumbercolumn',
            text: "3월",
            dataIndex: 'col5'
        },
        {
            width: 100,
            xtype: 'euinumbercolumn',
            text: "4월",
            dataIndex: 'col5'
        },
        {
            width: 100,
            xtype: 'euinumbercolumn',
            text: "5월",
            dataIndex: 'col5'
        },
        {
            width: 100,
            xtype: 'euinumbercolumn',
            text: "6월",
            dataIndex: 'col5'
        },
        {
            width: 100,
            xtype: 'euinumbercolumn',
            text: "7월",
            dataIndex: 'col5'
        },
        {
            width: 100,
            xtype: 'euinumbercolumn',
            text: "8월",
            dataIndex: 'col5'
        },
        {
            width: 100,
            xtype: 'euinumbercolumn',
            text: "9월",
            dataIndex: 'col5'
        },
        {
            width: 100,
            xtype: 'euinumbercolumn',
            text: "10월",
            dataIndex: 'col5'
        },
        {
            width: 100,
            xtype: 'euinumbercolumn',
            text: "11월",
            dataIndex: 'col5'
        },
        {
            width: 100,
            xtype: 'euinumbercolumn',
            text: "12월",
            dataIndex: 'col5'
        }
    ]

});