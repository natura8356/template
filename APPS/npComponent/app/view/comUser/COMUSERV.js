Ext.define('npComponent.view.comUser.COMUSERV',{
    extend: 'eui.container.BaseContainer',
    xtype: 'COMUSERV',
    title: '사용자등록관리',
    requires: [
        'npComponent.view.comUser.COMUSERM',
        'npComponent.view.comUser.COMUSERC',
        'npComponent.view.comUser.COMUSERV01',
        'npComponent.view.comUser.COMUSERV02'
    ],
    controller: 'COMUSERC',
    viewModel: 'COMUSERM',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items : [
        {
            xtype: 'COMUSERV01'
        },
        {
            xtype: 'toolbar',
            margin: 10,
            items: [
				{
					reference: 'searchCD',
					fieldLabel: '검색항목',   
					hideLabel: false,
					width: 200,
				    xtype: 'type2combo'
				},   
				{
				    reference: 'searchNM',
				    xtype: 'euitext',
				    enableKeyEvent: true,
				    listeners: {
	                    specialkey: function(field, e){
		                    if (e.getKey() == e.ENTER) {
		                    	field.nextSibling().nextSibling().onClick()
		                    }
	                    }
                    },
				    width: 100
				},
                '->',
                {
                    xtype: 'euibutton',
                    iconCls: 'x-fa fa-filter',
                    text: '검색',
                    handler: 'dataSearch'
                }
            ]
        },
        {
        	itemId: 'excelgrid',
            reference: 'menuGrid',
        	flex:1,						//grid 높이
            xtype: 'COMUSERV02',
            bind: '{STORE01}'
        }
    ]

});


