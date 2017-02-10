Ext.define('template.view.template.tmp013.TMP013V02', {
	extend : 'eui.grid.Panel',
	xtype : 'TMP013V02',
	columns : [ {
		text : '사용자ID',
		editor : {
			xtype : 'euitext'
		},
		dataIndex : 'USEPRSN_ID'
	},{
		text : '성명',
		width : 100,
		editor : {
			xtype : 'euitext'
		},
		dataIndex : 'USEPRSN_NM'
	}, {
		text : '비밀번호',
		width : 100, 
		inputType: 'password',
        fieldLabel: 'Password',
		editor : {
			xtype : 'euitext'
		},
		dataIndex : 'PWD'
	}]
});
