Ext.define('npComponent.view.comMenu.COMMENUV01',{
    extend: 'Ext.container.Container',
    requires: ['npComponent.view.comMenu.COMBOBOX'],
    xtype: 'COMMENUV01',
    margin : 10,
    
    items: [
        {
	        xtype: 'toolbar',
            margin: '0 10 10 10',
            ui: 'plain',
	        items: [
	            {
	                xtype: 'euiheadernav',
	                text : '메뉴관리 > 메뉴등록관리'
	            },
	            '->',
                {
                    bind: '{STORE01}',
                    xtype: 'euicommand',
                    showExcelDownBtn: false,
                    showRowAddBtn: false,
                    showRowDelBtn: false,
                    showRegBtn: false,       // 등록 버튼 활성화
                    showModBtn: false,
                    params: {
                    	mnu_id: 'comMenu'
                    },
                    listeners: {
                    	 savebtnclick: 'onRowSave'
                    }
                }
	        ]
        },
        {
        	xtype:'toolbar',
        	margin: '0 10 10 10',
        	items:[
		        
				{
					reference: 'MNU_NM',
					fieldLabel: '검색항목',   
					hideLabel: false,
					width: 200,
				    xtype: 'type4combo'
				},   
				{
			        reference: 'detail',
			        xtype: 'euitext',
			        width: 100,
			        enableKeyEvent: true,
				    listeners: {
	                    specialkey: function(field, e){
		                    if (e.getKey() == e.ENTER) {
		                    	field.nextSibling().nextSibling().onClick()
		                    }
	                    }
                    }
		        },
		        '->',
		        {
		            xtype: 'euibutton',
		            iconCls: 'x-fa fa-filter',
		            width: 80,
		            text: '검색',
		            handler: 'dataSearch'
		        }
		    ]
        }
    ]
});



