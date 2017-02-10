Ext.define('npComponent.view.comAtrt.COMATRTV01',{
	extend: 'Ext.container.Container',
//    extend: 'eui.panel.Panel',
    requires: ['npComponent.view.comAtrt.COMBOBOX'],
    xtype: 'COMATRTV01',
    margin : 10,
    items: [
            {
    	        xtype: 'toolbar',
                margin: '0 10 10 10',
                ui: 'plain',
    	        items: [
    	            {
    	                xtype: 'euiheadernav',
    	                text : '사용자/권한관리 > 그룹별사용권한관리'
    	            },
    	            '->',
                    {
                        bind: '{STORE01}',
                        showExcelDownBtn: false,
                        showRowAddBtn: false,
                        showRowDelBtn: false,
                        showRegBtn: false,       // 등록 버튼 활성화
                        showModBtn: false,
                        xtype: 'euicommand',
                        params: {
                        	mnu_id: 'comAtrt'
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
						reference: 'searchCD',
						fieldLabel: '권한그룹',   
						hideLabel: false,
						width: 200,
					    xtype: 'type3combo'
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
})



