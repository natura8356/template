Ext.define('npComponent.view.comOtp.COMOTPV', {
    extend: 'eui.container.BaseContainer',
    xtype: 'COMOTPV',
    title: '보안토큰인증',
    requires: [
        'npComponent.view.comOtp.COMOTPC',
        'npComponent.view.comOtp.COMOTPM',
        'npComponent.view.comOtp.COMOTPV01',
        'npComponent.view.comOtp.COMOTPV02'
    ],
    controller: 'COMOTPC',
    viewModel: 'COMOTPM',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'COMOTPV01'
        },
        {
        	xtype: 'COMOTPV02'
        }
    ]
});