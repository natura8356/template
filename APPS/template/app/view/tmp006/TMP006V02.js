Ext.define('template.view.tmp006.TMP006V02', {
    extend: 'eui.tree.Panel',
    xtype: 'TMP006V02',
    rootVisible: false,
    title: '프로그램목록',
    useArrows: true,
    margin: 10,
    hideHeaders: true,
    header: {
        xtype: 'header',
        titlePosition: 0,
        items: [
            {
               xtype: 'euibutton',
               iconCls: 'x-fa fa-search',
               text: '조회',
               handler: 'onSearch'
            }
        ]
    },
    // 컬럼 정보 정의.
    columns: [
    	{
            xtype: 'treecolumn', //this is so we know which column will show the tree
            width: 200,
            sortable: true,
            dataIndex: 'MENU_NAME'
        }
    ]
});