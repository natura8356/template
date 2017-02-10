Ext.define('template.view.tmp003.process01.PROCESS010202',{
    extend: 'eui.grid.Panel',
    xtype: 'PROCESS010202',
    hideHeaderICon: true,
    height: 300,
    usePagingToolbar: true,

    columns: [
        {
            xtype: 'euirownumberer'
        },
        {
            xtype: 'euicolumn',
            align: 'center',
            text: '대금종류',
            dataIndex: 'field1'
        },
        {
            text: '적용기간',
            columns: [
                {
                    xtype: 'euidatecolumn',
                    text: '시작일자',
                    dataIndex: 'field2'
                },
                {
                    xtype: 'euidatecolumn',
                    text: '종료일자',
                    dataIndex: 'field3'
                }
            ]
        },
        {
            xtype: 'euinumbercolumn',
            text: '이율%',
            dataIndex: 'field5'
        }   ,
        {
            text: '절사기준',
            columns: [
                {
                    xtype: 'euinumbercolumn',
                    text: '자리수',
                    dataIndex: 'field6'
                },
                {
                    xtype: 'euinumbercolumn',
                    text: '방식',
                    dataIndex: 'field7'
                }
            ]
        }
    ]
});