Ext.define('npComponent.view.comOtp.COMOTPV01', {
	extend: 'eui.form.Panel',
	xtype : 'COMOTPV01',
	title : '보안토큰 생성',
	tableColumns: 2,
    defaults: {
        allowBlank: false
    },
	items : [ {
		xtype : 'euifieldcontainer',
		items : [ {
			xtype : 'component',
			html : '보안토큰 만들기'
		}, {
			width : 100,
			xtype : 'button',
			text : '생성',
			handler : 'dataSearch'
		}, {
			fieldLabel : '보안토큰번호',
			xtype: 'euitext',
            bind: {
                value: '{RECORD.STRO}'
            },
            readOnly: true,
            rowspan : 2, 
            width: '50%'
		} ]
		} ]
});