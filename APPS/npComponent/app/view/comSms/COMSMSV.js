Ext.define('npComponent.view.comSms.COMSMSV', {
    extend: 'eui.container.BaseContainer',
    xtype: 'COMSMSV',
    title: 'SMS 관리',
    requires: [
        'npComponent.view.comSms.COMSMSC',
//        'npComponent.view.comSms.COMSMSM',
        'npComponent.view.comSms.COMSMSV01',
        'npComponent.view.comSms.COMSMSV02'

    ],
    controller: 'COMSMSC',
//    viewModel: 'COMSMSM',


    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
	items : [
        {
            xtype: 'euiheader',
            title: 'SMS'
        },
        {
            xtype: 'COMSMSV01'
	        },
	        {
	        	xtype: 'COMSMSV02'
	        }
    ]

});