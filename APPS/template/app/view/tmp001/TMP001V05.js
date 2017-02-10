Ext.define('template.view.tmp001.TMP001V05',{
    extend: 'Ext.container.Container',
    xtype: 'TMP001V05',
    title: '기본연체율',

    items: [
        {
            margin :5,
            xtype:'euigrid',
            title: '대금 종류별 연체료율',
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    ui: 'plain',
                    margin: 5,
                    items: [
                        {
                            fieldLabel: '변경이력보기',
                            xtype: 'euicombo',
                            width: 300
                        },
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
            ],
            height: 300,
            store: {
                fields: [],
                data: [
                    {
                        d1: '보증금',
                        d2: 1,
                        d3: 10
                    },
                    {
                        d1: '임대료',
                        d2: 0,
                        d3: 20
                    },
                    {
                        d1: '렌탈비',
                        d2: 1,
                        d3: 30
                    },
                    {
                        d1: '수리비',
                        d2: 1,
                        d3: 40
                    }
                ]
            },
            columns: [
                {
                    xtype: 'rownumberer'
                },
                {
                    text: '대금종류',
                    dataIndex: 'd1'
                },
                {
                    text: '적용기간',
                    columns: [
                        {
                            text: '시작일자'
                        },
                        {
                            text: '종료일자'
                        }
                    ]
                },
                {
                    text: '1개월이하',
                    dataIndex: 'd3'
                },
                {
                    text: '2개월이상개월이하',
                    dataIndex: 'd3'
                },
                {
                    text: '4개월이하',
                    dataIndex: 'd3'
                }
            ]
        }
    ]

})