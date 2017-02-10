Ext.define('template.view.tmp001.TMP001V04',{
    extend: 'eui.grid.Panel',
    xtype: 'TMP001V04',
    title: '수납우선순위',
    iconCls: 'emp',

    listeners: {
        euitabload: function (parameters) {
            console.log('탭 변경으로 인해 데이터 로드.', parameters)
        }
    },

    tbar: [
        '->',
        {
            xtype: 'component',
            html : '납기일이 동일할 경우 수납처리하는 순서'
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
            text: '연체계산여부',
            xtype: 'checkcolumn',
            dataIndex: 'd2'
        },
        {
            text: '수납우선순위',
            dataIndex: 'd3'
        }
    ]
})