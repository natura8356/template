Ext.define('npComponent.view.comUser.COMUSERV02', {
	extend : 'eui.grid.Panel',
	xtype : 'COMUSERV02',
	margin : 10,
	height : 400,
    requires: ['npComponent.view.comUser.COMBOGROUP'],
	plugins : {
		ptype : 'cellediting', // 셀에디터를 추가.
		clicksToEdit : 2
	// 더블클릭을 통해 에디터로 변환됨.
	},
	selModel : { // 그리로우를 클릭시 체크박스를 통해 선택되며 체크와 체크해제
		selType : 'checkboxmodel'
	},
	 // 페이징 툴바 활성화.
   // usePagingToolbar: true,

    listeners: {                // ViewController클래스에 정의됨.
        select: 'onGridSelect'
    },
	columns : [ {
		text : '사용자ID',
		editor : {
			bind: {
//				disabled: '{!customerRecord.phantom}'
				disabled: '{!formStatus.phantom}'
			},
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
	}, {
		xtype : 'euicolumn',
		align : 'center',
		text : '권한그룹',
		width : 100,
		dataIndex : 'GR_NM',
		editor : {
			xtype : 'comboGroup',
            valueColumnDataIndex: 'GR_ID'
		}
	}, {
		text : '사용여부',
		xtype : 'euicheckcolumn',
		listeners : {
			checkchange : 'onUseChange'
		},
		dataIndex : 'USE_YN'
	},{
		text : '우편번호',
		width : 100,
		editor : {
			xtype : 'euitext'
		},
		dataIndex : 'POS_NO'
	}, {
		text : '주소1',
		width : 100,
		editor : {
			xtype : 'euitext'
		},
		dataIndex : 'ADDR_1'
	}, {
		text : '주소2',
		width : 100,
		editor : {
			xtype : 'euitext'
		},
		dataIndex : 'ADDR_2'
	}, {
		text : '회사번호',
		width : 100,
		editor : {
			xtype : 'euitext'
		},
		dataIndex : 'ONHS_PHON_NO'
	}, {
		text : '휴대전화번호',
		width : 150,
		editor : {
			xtype : 'euitext'
		},
		dataIndex : 'MPHN_NO'
	}, {
		text : '이메일',
		width : 150,
		editor : {
			xtype : 'euitext'
		},
		dataIndex : 'EMAIL'
	}, {
		text : '등록일시',
		width : 150,
		dataIndex : 'RGST_DNT',
		editor : {
			xtype : 'euidate',
			format : 'Y.m.d'
		}
	}, {
		text : '등록자',
		dataIndex : 'RGSTPRSN_ID'
	}, {
		text : '수정일시',
		width : 150,
		dataIndex : 'REV_DNT',
		editor : {
			xtype : 'euidate',
			format : 'Y.m.d'
		}
	}, {
		text : '수정자',
		dataIndex : 'REVPRSN_ID'
	} ]
});
