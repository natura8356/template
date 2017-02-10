Ext.define('npComponent.view.comEmail.COMEMAILV', {
    extend: 'eui.container.BaseContainer',
    xtype: 'COMEMAILV',
    title: 'EMAIL 관리',
    requires: [
        'npComponent.view.comEmail.COMEMAILC',
//        'npComponent.view.comEmail.COMEMAILM',
        'npComponent.view.comEmail.COMEMAILV01',
        'npComponent.view.comEmail.COMEMAILV02'

    ],
    controller: 'COMEMAILC',
//    viewModel: 'COMEMAILM',


    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
	items : [
        {
            xtype: 'euiheader',
            title: 'EMAIL'
        },
        {
            xtype: 'COMEMAILV01'
        },
        {
        	xtype: 'COMEMAILV02'
        }
    ]

});