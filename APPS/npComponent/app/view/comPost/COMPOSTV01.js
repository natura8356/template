Ext.define('npComponent.view.comPost.COMPOSTV01',{
    extend: 'eui.panel.Panel',
    xtype: 'COMPOSTV01',
    margin : 10,
    tbar: [
        {
            reference: 'cmpKey',
            xtype: 'euitext',
            triggers: {
                search: {
                    cls: 'x-form-search-trigger',
                    handler: 'onClearClick',
                    scope: 'this'
                }
            },
            cellCls: 'null',
            fieldLabel: '검색주소',
            width: 200
        },
        {
            xtype: 'tbseparator'
        }

    ],
    header: {
        xtype: 'header',
        titlePosition: 0,
        items: [
            {
                xtype: 'component',
                html : ' 코드관리 > 주소등록관리'
            }
        ]
    },
    title: '주소등록관리'
})