/***
 * 페이징을 이용한 무한스크롤 그리드
 * 그리드 내부에서 rowadd, delete , update는 지원하지 않으며
 * 폼을 통해 제어해야함.
 */
Ext.define('template.view.template.tmp014.TMP014V', {
    extend: 'eui.grid.Merge',
    xtype: 'TMP014V',
    title: '머지 그리드',
    requires: [
    ],
    viewModel: {
        stores: {
            store: {
                autoLoad: true,
                proxy: {
                    type: 'ajax',
                    url: 'resources/data/statdata2.json',
                    reader: {
                        type: 'json',
                        rootProperty: 'data'
                    }
                },
                fields: [
                    {
                        name: "col1",
                        type: "string"
                    },
                    {
                        name: "col2",
                        type: "string",
                        convert: function (v, record) {
                            return record.get('col1')+'@'+record.get('col2');
                        }
                    },
                    {
                        name: "col3",
                        type: "string",
                        convert: function (v, record) {
                            return record.get('col2')+'@'+record.get('col3');
                        }
                    }
                ],
                sorters: [
                    "idx"
                ]
            }
        }
    },

    bind: {
        store: '{store}'
    },

    groupFields: [
        {
            field: 'col1'
        },
        {
            field: 'col2'
        },
        {
            field: 'col3'
        }
    ],

    columns: [
        {
            text: '구분',
            columns: [
                {
                    text: "시도",
                    dataIndex: 'col1'
                },
                {
                    text: "구/군",
                    dataIndex: 'col2',
                    renderer: function (v) {
                        var value = v.split('@')[1];
                        return value;
                    }
                },
                {
                    text: "동",
                    dataIndex: 'col3',
                    renderer: function (v) {
                        var value = v.split('@')[2];
                        return value;
                    }
                }
            ]
        },
        {
            text: "1월",
            dataIndex: 'month01'
        }
    ]
});