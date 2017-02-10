/***
 * 페이징을 이용한 무한스크롤 그리드
 * 그리드 내부에서 rowadd, delete , update는 지원하지 않으며
 * 폼을 통해 제어해야함.
 */
Ext.define('template.view.template.tmp012.TMP012V', {
    extend: 'eui.grid.Panel',
    xtype: 'TMP012V',
    title: '무한스크롤 그리드',
    requires: [
        'template.view.template.tmp012.TMP012M'
    ],
    viewModel: 'TMP012M',

    bind: '{STORE01}',
    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: '사용자',
            dataIndex: 'USEPRSN_NM',
            editor: {
                bind: "{customerRecord.USEPRSN_NM}",
                xtype: 'euitext'
            }
        },
        {
            text: 'To-do List항목',
            dataIndex: 'ITEM',
            editor: {
                xtype: 'euitext'
            }
        },
        {
            text: '조건',
            dataIndex: 'CNDT',
            editor: {
                xtype: 'euitext'
            }
        },
        {
            text: '기준일자',
            dataIndex: 'STD_DT',
            editor: {
                xtype: 'euinumber'
            }
        },
        {
            text: '메시지',
            dataIndex: 'MSG',
            editor: {
                xtype: 'euitext'
            }
        }
    ]

});