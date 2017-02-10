Ext.define('template.view.tmp001.TMP001V02G1', {
    extend: 'eui.grid.Panel',
    xtype: 'TMP001V02G1',
    height: 100,
    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: '업체명',
            dataIndex: 'field1'
        },
        {
            text: '대표자명',
            dataIndex: 'field2',
            exportStyle: {
                format: 'Currency',
                alignment: {
                    horizontal: 'Right'
                }
            }
        },
        {
            text: '사업자등록번호',
            dataIndex: 'field3'
        },
        {
            xtype: 'euidatecolumn',
            text: '설립일',
            dataIndex: 'field5'
        },
//        {
//            text: '전화번호',
//            dataIndex: 'field5'
//        },
        {
            text: '주소',
            dataIndex: 'field6'
        },
        {
            text: '비고',
            dataIndex: 'field7'
        }
    ]
});