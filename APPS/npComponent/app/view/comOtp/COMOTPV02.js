Ext.define('npComponent.view.comOtp.COMOTPV02', {
	extend: 'eui.form.Panel',
	xtype : 'COMOTPV02',
	title : '인증',
	tableColumns: 2,
    defaults: {
        allowBlank: false
    },
	items : [ {
		xtype : 'euifieldcontainer',
		items : [ {
			xtype : 'component',
			html : '보안토큰 인증하기'
		}, {
			width : 100,
			xtype : 'button',
			handler : 'sendOtp',
			text : '인증'
		}, {
			reference: 'reOtpStr',
			fieldLabel : '인증할 보안토큰번호',
			 width: '50%',
			xtype: 'euitext',
            bind: {
                value: '{RECORD.reOtpStr}'
            }
		}]
	} ]
});